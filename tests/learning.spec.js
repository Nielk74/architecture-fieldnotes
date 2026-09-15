import { test, expect } from '@playwright/test';
import { renderScene } from '../src/illustrations/engine.js';
import { sceneLibrary } from '../src/illustrations/scenes.js';

const jump = async(page,id) => page.locator(`.course-steps [data-open-lesson="${id}"]`).click();
async function start(page,id){await page.goto('/chapter-one.html');await expect(page.locator('.course-map')).toBeVisible();if(id)await jump(page,id)}

test('one activity at a time, freely navigable with back, skip, map and browser history',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await start(page);
 await expect(page.locator('.lesson-panel:visible')).toHaveCount(0);
 await page.getByRole('button',{name:'Open lesson 2: Four dimensions'}).click();await expect(page.locator('.lesson-panel:visible')).toHaveCount(1);await expect(page.locator('#foundations')).toBeVisible();
 await page.getByRole('button',{name:'Skip for now'}).click();await expect(page.locator('#card-challenge')).toBeVisible();await expect(page.locator('#xp')).toHaveText('0');await expect(page.locator('#course-count')).toHaveText('0 of 8 complete');
 await page.getByRole('button',{name:'← Back',exact:true}).click();await expect(page.locator('#foundations')).toBeVisible();await page.goBack();await expect(page.locator('#card-challenge')).toBeVisible();
 await page.locator('#show-map').click();await expect(page.locator('#course-map')).toBeVisible();await page.getByRole('button',{name:'Open lesson 8: Leave the why'}).click();await expect(page.locator('#rationale')).toBeVisible();expect(errors).toEqual([]);
});

test('dimensions support keyboards and illustrations respond to the simulator',async({page})=>{
 await start(page,'foundations');await page.getByRole('tab',{name:'Structure',exact:true}).focus();await page.keyboard.press('ArrowRight');await expect(page.getByRole('tab',{name:'Characteristics',exact:true})).toBeFocused();await expect(page.getByRole('tabpanel')).toContainText('Characteristics define success');await expect(page.locator('.dimension-art svg')).toHaveAttribute('aria-label',/latency/);
 await page.getByRole('tab',{name:'Decisions',exact:true}).click();await expect(page.getByRole('tabpanel')).toContainText('variance');await expect(page.locator('.dimension-art [data-iso-node="boundary"]')).toHaveCount(1);
 await jump(page,'tradeoffs');await page.getByRole('slider').fill('5');await expect(page.locator('#verdict')).toContainText('More freedom');await expect(page.locator('.deployment-world [data-iso-node]')).toHaveCount(5);await page.getByRole('button',{name:'Growing platform'}).click();await expect(page.locator('#verdict')).toContainText('Independence may earn its keep');
});

test('quiz gives feedback, retains answers across navigation, and restarts',async({page})=>{
 await start(page,'checkpoint');await page.locator('[data-answer="0"]').click();await expect(page.locator('.quiz-feedback')).toContainText('Not quite');await jump(page,'architect');await jump(page,'checkpoint');await expect(page.locator('.quiz-feedback')).toContainText('Not quite');
 await page.getByRole('button',{name:'Next question'}).click();await page.locator('[data-answer="2"]').click();await page.getByRole('button',{name:'Next question'}).click();await page.locator('[data-answer="0"]').click();await page.getByRole('button',{name:'See your takeaway'}).click();await expect(page.locator('#quiz')).toContainText('2 of 3');await page.getByRole('button',{name:'Try again'}).click();await expect(page.locator('#quiz')).toContainText('Question 01');
});

test('decision record persists on reload with its lesson route and downloads',async({page})=>{
 await start(page,'rationale');await page.locator('#decision').fill('Keep a modular bookshop');await expect(page.locator('#save-status')).toContainText('Draft saved');await page.reload();await expect(page.locator('#rationale')).toBeVisible();await expect(page.locator('#decision')).toHaveValue('Keep a modular bookshop');const pending=page.waitForEvent('download');await page.getByRole('button',{name:'Download your decision'}).click();const download=await pending;expect(download.suggestedFilename()).toBe('architecture-decision-001.md');const stream=await download.createReadStream();let result='';for await(const chunk of stream)result+=chunk;expect(result).toContain('Keep a modular bookshop');
});

test('Chapter one contributes earned XP to book progression without repeat rewards',async({page})=>{
 await start(page,'foundations');await expect(page.locator('.quest-emblem svg')).toHaveAttribute('data-pip-level','0');
 for(const name of ['Characteristics','Decisions','Principles'])await page.getByRole('tab',{name,exact:true}).click();await expect(page.locator('#xp')).toHaveText('20');await expect(page.locator('.quest-emblem svg')).toHaveAttribute('data-pip-level','0');await page.getByRole('tab',{name:'Structure',exact:true}).click();await expect(page.locator('#xp')).toHaveText('20');
 await jump(page,'card-challenge');await page.locator('[data-category="1"]').click();await expect(page.locator('#sort-feedback')).toContainText('Try another');
 for(let i=0;i<4;i++){await page.locator(`[data-category="${i}"]`).click();if(i<3)await page.getByRole('button',{name:'Next note'}).click()}
 await expect(page.locator('.quest-emblem svg')).toHaveAttribute('data-pip-level','0');await jump(page,'tradeoffs');await page.getByRole('slider').fill('4');await page.getByRole('button',{name:'Growing platform'}).click();await expect(page.locator('.quest-emblem svg')).toHaveAttribute('data-pip-level','0');
 await jump(page,'checkpoint');for(let i=0;i<3;i++){await page.locator(`[data-answer="${[1,2,0][i]}"]`).click();await page.getByRole('button',{name:i===2?'See your takeaway':'Next question'}).click()}
 await expect(page.locator('.quest-emblem svg')).toHaveAttribute('data-pip-level','0');await jump(page,'rationale');const download=page.waitForEvent('download');await page.getByRole('button',{name:'Download your decision'}).click();await download;await expect(page.locator('#xp')).toHaveText('100');await expect(page.locator('.quest-emblem svg')).toHaveAttribute('data-pip-level','1');await expect(page.locator('.quest-emblem svg')).toHaveAttribute('aria-label','Pip the apprentice');
 await expect(page.locator('#course-count')).toHaveText('5 of 8 complete');await page.locator('#show-map').click();await expect(page.locator('#pip-next')).toHaveText('Next course evolution at 120 XP');
});

test('mobile order walkthrough, pause and reduced motion remain usable',async({page})=>{
 await page.setViewportSize({width:390,height:844});await start(page,'system');await page.getByRole('button',{name:'Send a book order'}).click();await expect(page.locator('.architecture-svg [data-iso-node="interface"]')).toHaveClass(/iso-active/);await expect(page.locator('.order-status')).toContainText('Order confirmed',{timeout:6000});
 await page.getByRole('button',{name:'Pause animations'}).click();await expect(page.locator('body')).toHaveClass(/motion-paused/);await expect(page.getByRole('button',{name:'Enable animations'})).toHaveAttribute('aria-pressed','true');
 await page.emulateMedia({reducedMotion:'reduce'});expect(await page.locator('.architecture-svg .iso-object').first().evaluate(el=>getComputedStyle(el).animationName)).toBe('none');
 for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:900});for(const id of ['foundations','ecosystem','rationale']){await jump(page,id);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`document overflow at ${width} / ${id}`).toBe(true);expect(await page.locator('.course-stage').evaluate(el=>el.scrollWidth<=el.clientWidth),`stage overflow at ${width} / ${id}`).toBe(true)}}
});

test('illustration recipes validate references, reject invalid nodes and escape labels',()=>{
 for(const scene of Object.values(sceneLibrary))expect(renderScene(scene)).toContain('role="img"');
 expect(()=>renderScene({title:'Bad',nodes:[{id:'x',x:1,y:2},{id:'x',x:3,y:4}]})).toThrow(/unique/);
 expect(()=>renderScene({title:'Bad',nodes:[],edges:[{from:'x',to:'y'}]})).toThrow(/missing node/);
 expect(renderScene({title:'A < B',nodes:[{id:'x',x:120,y:120,label:'<script>alert(1)</script>'}]})).not.toContain('<script>');
});

test('illustration studio previews recipes and exports a standalone SVG',async({page})=>{
 await page.goto('/illustrations.html');await page.locator('#scene-choice').selectOption('rationale');await page.locator('#palette-choice').selectOption('lilac');await expect(page.locator('#scene-preview svg')).toHaveAttribute('aria-label',/decision record/);await expect(page.locator('#recipe')).toContainText('"tone": "lilac"');const pending=page.waitForEvent('download');await page.getByRole('button',{name:'Download SVG'}).click();const download=await pending;expect(download.suggestedFilename()).toBe('fieldnotes-rationale.svg');const stream=await download.createReadStream();let svg='';for await(const chunk of stream)svg+=chunk;expect(svg).toContain('<style>');expect(svg).toContain('xmlns="http://www.w3.org/2000/svg"');
 await page.setViewportSize({width:360,height:800});expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});


test('lesson content scrolls inside the screen while navigation stays visible',async({page})=>{
 await page.setViewportSize({width:360,height:640});await start(page,'rationale');
 const stage=page.locator('.course-stage');expect(await stage.evaluate(el=>el.scrollHeight>el.clientHeight)).toBe(true);
 await page.getByRole('button',{name:'Download your decision'}).scrollIntoViewIfNeeded();await expect(page.getByRole('button',{name:'Download your decision'})).toBeInViewport();await expect(page.locator('#lesson-back')).toBeInViewport();await expect(page.locator('#lesson-next')).toBeInViewport();expect(await page.evaluate(()=>document.documentElement.scrollHeight<=innerHeight)).toBe(true);
 await page.getByRole('button',{name:'Chapter map',exact:true}).click();await page.getByRole('button',{name:'Open lesson 8: Leave the why'}).scrollIntoViewIfNeeded();await expect(page.getByRole('button',{name:'Open lesson 8: Leave the why'})).toBeInViewport();
});
