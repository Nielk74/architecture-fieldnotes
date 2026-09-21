import {test,expect} from '@playwright/test';
import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import {paths,pathScene} from '../src/paths/registry.js';
import {renderScene} from '../src/illustrations/engine.js';
import {chapterScene} from '../src/chapters/visuals.js';

test('every course and legacy chapter retains source, answer, length and notes contracts',()=>{
 expect(execFileSync(process.execPath,['scripts/check-story-content.mjs'],{encoding:'utf8'})).toContain('136/136');
 const worlds=new Set();
 for(const path of Object.values(paths)){
  worlds.add(path.world);const scene=pathScene({...path,earned:100});
  expect(scene.nodes.find(n=>n.kind==='pip')).toMatchObject({course:path.id,xp:100});
  expect(renderScene(scene)).toContain(`data-world="${path.world}"`);
 }
 expect(worlds.size).toBe(Object.keys(paths).length);
 expect(()=>renderScene({title:'Bad state',nodes:[{id:'pip',kind:'pip',x:100,y:100}],sequence:[{node:'pip',states:{missing:'off'}}]})).toThrow('Invalid illustration state');
});

for(const course of Object.keys(paths))test(`${course}: concept stories change the illustration on phones and preserve reading with motion off`,async({page},testInfo)=>{
 const n=course==='fundamentals'?2:1;
 const file=course==='fundamentals'?`src/chapters/02.json`:`src/paths/${course}/chapters/01.json`;
 const ch=JSON.parse(fs.readFileSync(file,'utf8'));
 const entry=course==='fundamentals'?'/fundamentals.html':course==='hard-parts'?'/hard-parts.html':`/learn.html?path=${course}`;
 await page.setViewportSize({width:390,height:844});
 await page.addInitScript(()=>localStorage.setItem('fieldnotes-motion-v1','off'));
 await page.goto(`${entry}#chapter/${n}/explore`);
 const scene=page.locator('[data-concept-illustration]');
 const shapes=()=>scene.locator('.iso-node,.teaching-board').evaluateAll(nodes=>nodes.map(n=>[n.dataset.kind||'teaching',n.textContent]));
 await expect(page.locator('#chapter-concept')).toContainText(ch.concepts[0].body);
 await expect(page.locator('.content-swap')).toHaveCSS('opacity','1');
 const before=await shapes();
 await page.locator('[data-concept="0"]').focus();await page.keyboard.press('ArrowRight');
 await expect(page.locator('[data-concept="1"]')).toBeFocused();
 await expect(page.locator('#chapter-concept')).toContainText(ch.concepts[1].body);
 expect(await shapes()).not.toEqual(before);
 await expect(page.locator('.content-swap')).toHaveCSS('animation-name','none');
 await expect(page.locator('#chapter-concept .example')).toHaveCount(0);
 await expect(scene.locator('.iso-object > .story-pip-avatar')).toHaveAttribute('data-story-course',course);
 await scene.locator('[data-scene-step="2"]').click();
 await expect(scene.locator('[data-scene-caption]')).toHaveText(chapterScene(ch,{visual:ch.concepts[1].visual}).sequence[2].text);
 await expect(scene.locator('[data-scene-step]')).toHaveCount(3);
 await expect(page.locator('#book-chapter-score')).toHaveText('0 / 100 chapter XP');
 for(const width of [320,390,1440]){
  await page.setViewportSize({width,height:844});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  expect(await page.locator('#book-stage').evaluate(e=>e.scrollWidth<=e.clientWidth)).toBe(true);
  await scene.scrollIntoViewIfNeeded();
  await page.screenshot({path:testInfo.outputPath(`${course}-${width}.png`)});
 }
 await page.locator('#chapter-concept').scrollIntoViewIfNeeded();
 await expect(page.locator('#chapter-concept')).toBeInViewport();
 await expect(page.locator('#book-next')).toBeInViewport();
});

test('cinema server really changes state and manual stepping remains usable while paused',async({page})=>{
 await page.addInitScript(()=>localStorage.setItem('fieldnotes-motion-v1','off'));
 await page.goto('/learn.html?path=green-software#chapter/4/intro');
 const scene=page.locator('[data-scene-player]');
 const sequence=JSON.parse(await scene.locator('svg').getAttribute('data-sequence'));
 for(const [i,step] of sequence.entries()){
  await scene.locator(`[data-scene-step="${i}"]`).click();
  for(const [id,state] of Object.entries(step.states||{}))await expect(scene.locator(`[data-iso-node="${id}"]`)).toHaveAttribute('data-story-state',state);
 }
 const off=scene.locator('[data-story-state="off"]');
 await expect(off).toHaveCount(1);
 await expect(off.locator('.iso-object')).toHaveCSS('opacity','0.3');
 await expect(off.locator('.iso-subtitle')).toHaveCSS('opacity','1');
 await expect(scene.locator('[data-scene-caption]')).toContainText(sequence.at(-1).text);
});

test('legacy chapter swaps its story scene without duplicating the example or changing reward rules',async({page})=>{
 await page.addInitScript(()=>localStorage.setItem('fieldnotes-motion-v1','off'));
 await page.goto('/chapter-one.html#lesson/foundations');
 await expect(page.locator('#concept-panel')).toContainText('Pip follows an order');
 await expect(page.locator('#concept-panel .example')).toHaveCount(0);
 await page.getByRole('tab',{name:'Decisions',exact:true}).click();
 await expect(page.locator('.dimension-art [data-kind="gateway"]')).toHaveCount(1);
 await expect(page.locator('#concept-panel .content-swap')).toHaveCSS('opacity','1');
 await expect(page.locator('#xp')).toHaveText('0');
});

test('story SVG exports retain Pip and semantic props without requiring page styles',async({page})=>{
 await page.goto('/illustrations.html');
 await page.locator('#scene-choice').selectOption('green-software-06');
 const pending=page.waitForEvent('download');await page.locator('#export-svg').click();
 const download=await pending,stream=await download.createReadStream();let svg='';for await(const chunk of stream)svg+=chunk;
 expect(svg).toContain('data-kind="phone"');expect(svg).toContain('data-story-course="green-software"');
 expect(svg).toContain('fill="none"');expect(svg).toContain('<style>');
 expect((svg.match(/<svg\b/g)||[])).toHaveLength(1);
});
