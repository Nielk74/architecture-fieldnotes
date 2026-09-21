import {test,expect} from '@playwright/test';
import {paths,pathScene} from '../src/paths/registry.js';
import {editorialArtwork} from '../src/illustrations/editorial.js';
import {sceneLibrary} from '../src/illustrations/scenes.js';
import {renderScene} from '../src/illustrations/engine.js';

test('course covers keep a single cast without companion overlays and validate their recipe',async({page})=>{
 for(const path of Object.values(paths)) {
  const scene=pathScene({...path,earned:path.totalXP});
  const svg=renderScene(scene);
  await page.setContent(svg);
  await expect(page.locator('svg').first()).toHaveAccessibleName(`${path.hook} ${path.description}`);
  await expect(page.locator('svg')).toHaveAttribute('data-cast',editorialArtwork[path.world].cast);
  await expect(page.locator('[data-story-course],.editorial-companion,.iso-object')).toHaveCount(0);
  expect(svg).toBe(renderScene(pathScene({...path,earned:0})));
  expect(await page.evaluate(svg=>new DOMParser().parseFromString(svg,'image/svg+xml').querySelector('parsererror')?.textContent||'',svg)).toBe('');
 }
 const invalid=pathScene(paths.fundamentals);invalid.nodes[0].x=NaN;
 expect(()=>renderScene(invalid)).toThrow('Invalid coordinates');
});

test('course cover exports as a standalone SVG and object palettes remain usable',async({page})=>{
 await page.goto('/illustrations.html');
 await page.locator('#scene-choice').selectOption('world-harbor');
 await expect(page.locator('#palette-choice')).toBeDisabled();
 const downloadPromise=page.waitForEvent('download');
 await page.locator('#export-svg').click();
 const download=await downloadPromise;
 const stream=await download.createReadStream();const chunks=[];
 for await(const chunk of stream)chunks.push(chunk);
 const svg=Buffer.concat(chunks).toString();
 expect(svg).toContain('data-world="harbor"');
 expect(svg).toContain('href="data:image/webp;base64,');
 expect(svg).not.toContain('href="/artwork/');
 expect(svg).toContain('data-cast="robots"');
 expect(svg).not.toContain('data-story-course');
 expect(svg).not.toContain('<script');
 expect(svg).not.toContain('href="http');
 const xml=await page.evaluate(svg=>{const doc=new DOMParser().parseFromString(svg,'image/svg+xml');return {error:doc.querySelector('parsererror')?.textContent,root:doc.documentElement.localName}},svg);
 expect(xml).toEqual({error:undefined,root:'svg'});
 await page.locator('#scene-choice').selectOption('bookshop');
 await expect(page.locator('#palette-choice')).toBeEnabled();
 await page.locator('#palette-choice').selectOption('peach');
 await expect(page.locator('#scene-preview svg')).toBeVisible();
});


test('every scenic course image loads locally and its full frame fits a phone',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await page.goto('/');
 await expect(page.locator('[data-editorial-art]')).toHaveCount(8);
 const sources=await page.locator('[data-editorial-art]').evaluateAll(images=>images.map(image=>image.getAttribute('href')));
 for(const source of sources){
  const response=await page.request.get(source);
  expect(response.ok(),source).toBe(true);
  expect(response.headers()['content-type']).toContain('image/webp');
  const dimensions=await page.evaluate(async source=>{const image=new Image();image.src=source;await image.decode();return [image.naturalWidth,image.naturalHeight]},source);
  expect(dimensions).toEqual([1536,1024]);
 }
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});

test('native cast demonstrations keep beavers and robots separate',()=>{
 expect(sceneLibrary['log-workshop'].nodes.map(node=>node.kind)).toEqual(['beaver','log','beaver']);
 expect(sceneLibrary['robot-lab'].nodes.some(node=>node.kind==='beaver')).toBe(false);
 expect(Object.values(editorialArtwork).filter(art=>art.cast==='beavers')).toHaveLength(4);
 expect(Object.values(editorialArtwork).filter(art=>art.cast==='robots')).toHaveLength(4);
});
