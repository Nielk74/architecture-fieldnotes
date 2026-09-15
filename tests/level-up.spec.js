import {test,expect} from '@playwright/test';
import {paths} from '../src/paths/registry.js';
import {levelUpStages,levelUpTransition} from '../src/illustrations/level-up-model.js';

test('all 81 preview transitions use actual thresholds; unchanged, lower, and maximum XP never invent a level',()=>{
 for(const track of ['overall',...Object.keys(paths)]){
  const stages=levelUpStages(track);
  for(let i=1;i<stages.length;i++){
   const model=levelUpTransition({track,fromXP:stages[i].xp-20,toXP:stages[i].xp});
   expect(model.from).toBe(i-1);expect(model.to).toBe(i);expect(model.after).toEqual(stages[i]);
   expect(levelUpTransition({track,fromXP:stages[i].xp,toXP:stages[i].xp})).toBeNull();
   expect(levelUpTransition({track,fromXP:stages[i].xp,toXP:stages[i].xp-20})).toBeNull();
  }
  expect(levelUpTransition({track,fromXP:stages.at(-1).xp,toXP:stages.at(-1).xp+200})).toBeNull();
 }
 expect(levelUpTransition({fromXP:0,toXP:400}).to).toBe(2);
 expect(()=>levelUpTransition({fromXP:-1,toXP:100})).toThrow('nonnegative');
 expect(()=>levelUpTransition({track:'unknown',fromXP:0,toXP:100})).toThrow();
});

test('celebration visibly transforms Pip, settles, replays, and can be dismissed before finishing',async({page})=>{
 await page.emulateMedia({reducedMotion:'no-preference'});
 await page.goto('/illustrations.html#level-up');
 await page.locator('#preview-level-up').click();
 const dialog=page.getByRole('dialog');
 await expect(dialog).toHaveAttribute('data-phase','gather');
 await expect(dialog).toHaveAttribute('data-mode','animated');
 await expect(dialog.locator('.level-up-before .pip-avatar')).toHaveAttribute('data-pip-level','0');
 await expect(dialog.locator('.level-up-after .pip-avatar')).toHaveAttribute('data-pip-level','1');
 await expect(dialog).toHaveAttribute('data-phase','transform',{timeout:2500});
 const sizes=[];for(let i=0;i<4;i++){sizes.push((await dialog.locator('.level-up-after').boundingBox()).width);await page.waitForTimeout(150)}
 expect(Math.max(...sizes)-Math.min(...sizes)).toBeGreaterThan(5);
 await expect(dialog).toHaveAttribute('data-mode','settled',{timeout:5000});
 await expect(dialog.locator('.level-up-after')).toHaveCSS('opacity','1');
 await expect(dialog.locator('.level-up-reveal')).toHaveCSS('opacity','1');
 await expect(dialog.locator('.level-up-before')).toHaveCSS('opacity','0');
 await dialog.getByRole('button',{name:'Let’s go!'}).click();
 await page.locator('#preview-level-up').click();
 await expect(dialog).toHaveAttribute('data-phase','gather');
 await dialog.getByRole('button',{name:'Let’s go!'}).click();
 await expect(dialog).toHaveCount(0);await expect(page.locator('#preview-level-up')).toBeFocused();
 await expect(page.locator('body')).not.toHaveClass(/level-up-open/);
});

test('every course and overall final form previews without mutating XP, drafts, or motion preference',async({page})=>{
 await page.addInitScript(()=>{localStorage.setItem('fieldnotes-motion-v1','off');localStorage.setItem('fieldnotes-adr-v1','A preserved draft');});
 await page.goto('/illustrations.html#level-up');
 await page.locator('.companion-status').waitFor();
 await page.locator('#level-up-still').check();
 const before=await page.evaluate(()=>({...localStorage}));
 await expect(page.locator('#level-up-track option')).toHaveCount(9);
 for(const track of ['overall',...Object.keys(paths)]){
  await page.locator('#level-up-track').selectOption(track);await page.locator('#level-up-target').selectOption('9');
  await page.locator('#preview-level-up').click();
  const dialog=page.getByRole('dialog');
  await expect(dialog).toHaveAttribute('data-mode','still');
  await expect(dialog.locator('.level-up-after .pip-avatar')).toHaveAttribute('data-pip-level','9');
  if(track!=='overall')await expect(dialog.locator('.level-up-after .pip-avatar')).toHaveAttribute('data-pip-course',track);
  await expect(dialog.locator('.level-up-level-chip strong')).toHaveText('10');
  await expect(dialog.getByRole('heading')).toContainText(levelUpStages(track)[9].name.replace(/^Pip · /,''));
  await expect(dialog.getByRole('button')).toHaveCount(1);
  expect((await dialog.innerText()).split(/\s+/).length).toBeLessThan(30);
  await expect(dialog.locator('.level-up-reveal')).toHaveCSS('opacity','1');
  await dialog.getByRole('button',{name:'Let’s go!'}).click();
 }
 expect(await page.evaluate(()=>({...localStorage}))).toEqual(before);
});

test('an explicit still preview stays still under device reduction and contains keyboard focus',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.goto('/illustrations.html#level-up');
 await page.locator('#level-up-still').check();
 await page.locator('#preview-level-up').click();
 const dialog=page.getByRole('dialog');await expect(dialog).toHaveAttribute('data-mode','still');
 await expect(dialog.locator('.level-up-after')).toHaveCSS('opacity','1');
 await expect(dialog.locator('.level-up-after')).toHaveCSS('animation-name','none');
 await expect(dialog.getByRole('button')).toHaveCount(1);
 for(let i=0;i<7;i++){await page.keyboard.press('Tab');expect(await dialog.evaluate(e=>e.contains(document.activeElement))).toBe(true);}
 await page.keyboard.press('Shift+Tab');await expect(dialog.getByRole('button')).toBeFocused();
 await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);await expect(page.locator('#preview-level-up')).toBeFocused();
});

test('switching to a still view during the transformation never freezes a faded title',async({page})=>{
 await page.emulateMedia({reducedMotion:'no-preference'});
 await page.goto('/illustrations.html?motion=system#level-up');await page.locator('#preview-level-up').click();
 const dialog=page.getByRole('dialog');
 await expect(dialog).toHaveAttribute('data-phase','transform',{timeout:2500});
 await page.emulateMedia({reducedMotion:'reduce'});
 await expect(dialog).toHaveAttribute('data-mode','still');
 await expect(dialog.locator('.level-up-reveal')).toHaveCSS('opacity','1');
 await expect(dialog.locator('.level-up-after')).toHaveCSS('opacity','1');
 await expect(dialog.locator('.level-up-particle').first()).toHaveCSS('opacity','0');
});

test('the studio still option is temporary and the next animated preview moves stars and rings',async({page})=>{
 await page.emulateMedia({reducedMotion:'no-preference'});
 await page.goto('/illustrations.html#level-up');
 const preference=await page.evaluate(()=>localStorage.getItem('fieldnotes-motion-v1'));
 await page.locator('#level-up-still').check();await page.locator('#preview-level-up').click();
 const dialog=page.getByRole('dialog');await expect(dialog).toHaveAttribute('data-mode','still');
 await page.keyboard.press('Escape');await page.locator('#level-up-still').uncheck();await page.locator('#preview-level-up').click();
 await expect(dialog).toHaveAttribute('data-mode','animated');
 await expect(dialog).toHaveAttribute('data-phase','celebrate');
 const particle=dialog.locator('.level-up-particle').first();
 const before=await particle.evaluate(e=>getComputedStyle(e).transform);
 await page.waitForTimeout(160);
 expect(await particle.evaluate(e=>getComputedStyle(e).transform)).not.toBe(before);
 await expect(dialog.locator('.level-up-ripple').first()).toHaveCSS('animation-name','level-up-ripple');
 await page.keyboard.press('Escape');
 expect(await page.evaluate(()=>localStorage.getItem('fieldnotes-motion-v1'))).toBe(preference);
});

test('the dialog and its dismissal remain reachable on short phones and landscape',async({page},testInfo)=>{
 await page.addInitScript(()=>localStorage.setItem('fieldnotes-motion-v1','off'));
 await page.goto('/illustrations.html#level-up');
 await page.locator('#level-up-still').check();
 await page.locator('#level-up-track').selectOption('responsible-engineering');await page.locator('#level-up-target').selectOption('9');
 for(const [width,height]of [[320,568],[390,844],[844,390],[1440,900]]){
  await page.setViewportSize({width,height});await page.locator('#preview-level-up').click();
  const dialog=page.getByRole('dialog'),box=await dialog.boundingBox();
  expect(box.x).toBeGreaterThanOrEqual(0);expect(box.y).toBeGreaterThanOrEqual(0);expect(box.x+box.width).toBeLessThanOrEqual(width);expect(box.y+box.height).toBeLessThanOrEqual(height);
  expect(await dialog.evaluate(e=>e.scrollWidth<=e.clientWidth)).toBe(true);
  await expect(dialog.getByRole('button',{name:'Let’s go!'})).toBeInViewport();
  await page.screenshot({path:testInfo.outputPath(`level-up-${width}-${height}.png`)});
  await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);
 }
});

for(const mode of ['on','off','system']){
 test(`Play celebration moves Pip with device reduction and saved motion ${mode}`,async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto(`/illustrations.html?motion=${mode}#level-up`);
  const before=await page.evaluate(()=>({...localStorage}));
  await page.getByRole('button',{name:'Play celebration'}).click();
  const dialog=page.getByRole('dialog');
  await expect(page.locator('body')).toHaveClass(/motion-on/);
  await expect(dialog).toHaveAttribute('data-mode','animated');
  const pip=dialog.locator('.level-up-after');
  await expect(pip).toHaveCSS('animation-name','level-up-arrive');
  await expect(dialog).toHaveAttribute('data-phase','transform');
  const positions=[];
  for(let i=0;i<7;i++){positions.push((await pip.boundingBox()).y);await page.waitForTimeout(100);}
  expect(Math.max(...positions)-Math.min(...positions)).toBeGreaterThan(8);
  await expect(dialog.locator('.level-up-particle').first()).toHaveCSS('animation-name','level-up-confetti');
  await page.keyboard.press('Escape');
  const after=await page.evaluate(()=>({...localStorage}));
  expect(after['fieldnotes-motion-v1']).toBe('on');
  delete before['fieldnotes-motion-v1'];delete after['fieldnotes-motion-v1'];
  expect(after).toEqual(before);
  await page.getByRole('button',{name:'Pause animations',exact:true}).click();
  await expect(page.locator('body')).toHaveClass(/motion-paused/);
  await page.locator('#level-up-still').check();
  await page.getByRole('button',{name:'Preview still'}).click();
  await expect(dialog).toHaveAttribute('data-mode','still');
  await expect(pip).toHaveCSS('animation-name','none');
 });
}
