import {test,expect} from '@playwright/test';
async function positions(locator){await expect(locator).toBeVisible();const ys=[];for(let i=0;i<9;i++){ys.push((await locator.boundingBox()).y);await new Promise(r=>setTimeout(r,250))}return Math.max(...ys)-Math.min(...ys)}
for(const [name,path,ready,scene] of [
 ['book','/#chapter/11/intro','.book-intro','.book-intro .iso-object'],
 ['chapter one','/chapter-one.html#lesson/foundations','#foundations.lesson-panel','.dimension-art .iso-object'],
 ['studio','/illustrations.html#log-workshop','#scene-preview','#scene-preview .iso-object'],
]){
 test(`${name}: system reduction is truthful and explicit enable moves actual SVG pixels`,async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});await page.goto(path.replace('/#','/?motion=system#').replace('.html','.html?motion=system'));await page.locator(ready).waitFor({state:'visible'});const object=page.locator(scene).first();await expect.poll(()=>object.evaluate(e=>getComputedStyle(e).animationName)).toBe('none');await page.waitForTimeout(400);expect(await positions(object)).toBeLessThan(.1);
  const button=page.getByRole('button',{name:'Enable animations (device prefers reduced motion)',exact:true});await expect(button).toBeVisible();await button.click();await expect(page.locator('body')).toHaveClass(/motion-on/);await expect.poll(()=>object.evaluate(e=>getComputedStyle(e).animationName)).toBe('iso-float-subject');expect(await positions(object)).toBeGreaterThan(1);
  await page.reload();await page.locator(ready).waitFor({state:'visible'});await expect(page.locator('body')).toHaveClass(/motion-on/);expect(await positions(page.locator(scene).first())).toBeGreaterThan(1);
  await page.getByRole('button',{name:'Pause animations',exact:true}).click();const paused=page.locator(scene).first();expect(await positions(paused)).toBeLessThan(.1);await expect(page.locator('body')).toHaveClass(/motion-paused/);
 });
}
test('a direct motion-on link overrides reduction and playback advances',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/?motion=on#chapter/11/intro');await page.locator('.book-intro').waitFor();await expect(page.locator('body')).toHaveClass(/motion-on/);const svg=page.locator('.book-intro svg.iso-scene');await expect(svg).toHaveAttribute('data-step','1',{timeout:5000});await expect(page).toHaveURL(/fundamentals\.html#chapter\/11\/intro$/);
});
test('pressing Play in a reduced-motion scene explicitly enables real playback',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/?motion=system#chapter/11/intro');await page.locator('[data-scene-play]').click();await expect(page.locator('body')).toHaveClass(/motion-on/);await expect(page.locator('.book-intro svg.iso-scene')).toHaveAttribute('data-step','1',{timeout:5000});
});

for(const path of ['/#chapter/11/intro','/chapter-one.html#lesson/foundations','/illustrations.html#log-workshop']){
 test(`motion defaults on despite device reduction: ${path}`,async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});await page.goto(path);
  await page.locator('.companion-status').waitFor({state:'visible'});
  if(path.includes('chapter-one'))await page.locator('#foundations.lesson-panel').waitFor({state:'visible'});
  await expect(page.getByRole('button',{name:'Pause animations',exact:true})).toBeVisible();
  await expect(page.locator('body')).toHaveClass(/motion-on/);
  const object=page.locator('.iso-scene:visible .iso-object').first();
  expect(await positions(object)).toBeGreaterThan(1);
  await page.getByRole('button',{name:'Pause animations',exact:true}).click();await page.reload();
  await page.locator('.companion-status').waitFor({state:'visible'});
  if(path.includes('chapter-one'))await page.locator('#foundations.lesson-panel').waitFor({state:'visible'});
  await expect(page.getByRole('button',{name:'Enable animations',exact:true})).toBeVisible();
  expect(await positions(page.locator('.iso-scene:visible .iso-object').first())).toBeLessThan(.1);
 });
}
