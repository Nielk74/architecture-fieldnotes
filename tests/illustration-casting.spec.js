import {test,expect} from '@playwright/test';
import fs from 'node:fs';
import {chapterScene} from '../src/chapters/visuals.js';
import {renderScene} from '../src/illustrations/engine.js';
import {sceneLibrary} from '../src/illustrations/scenes.js';

const files=[...fs.readdirSync('src/chapters').filter(f=>f.endsWith('.json')).map(f=>`src/chapters/${f}`),...fs.readdirSync('src/paths').flatMap(course=>fs.existsSync(`src/paths/${course}/chapters`)?fs.readdirSync(`src/paths/${course}/chapters`).filter(f=>f.endsWith('.json')).map(f=>`src/paths/${course}/chapters/${f}`):[])];

test('authored characters and logs remain visible without mixing beavers and robots',()=>{
 const scenes=Object.entries(sceneLibrary);
 for(const file of files){
  const chapter=JSON.parse(fs.readFileSync(file,'utf8'));
  for(const [slot,visual] of [['intro',chapter.visual],...chapter.concepts.map((c,i)=>[i,c.visual])]){
   const scene=chapterScene(chapter,{visual});
   for(const kind of ['beaver','log']){
    // An authored prop must not disappear behind a teaching-board override.
    if(visual.nodes.some(n=>n.kind===kind))expect(scene.nodes.some(n=>n.kind===kind),`${file}/${slot}: hidden ${kind}`).toBe(true);
   }
   scenes.push([`${file}/${slot}`,scene]);
  }
 }
 for(const [key,scene] of scenes){
  const beavers=scene.nodes.filter(n=>n.kind==='beaver').length;
  const logs=scene.nodes.filter(n=>n.kind==='log').length;
  if(!beavers&&!logs)continue;
  const svg=renderScene(scene);
  expect((svg.match(/class="story-beaver"/g)||[]).length,key).toBe(beavers);
  expect((svg.match(/class="wooden-log"/g)||[]).length,key).toBe(logs);
  if(beavers){
   expect(scene.nodes.some(n=>['pip','agent'].includes(n.kind)),key).toBe(false);
   expect(svg,key).not.toMatch(/story-robot|story-pip-avatar/);
  }
 }
});

test('logging adaptations preserve traces, metrics and decision documents',()=>{
 const concept=(course,n,i)=>JSON.parse(fs.readFileSync(`src/paths/${course}/chapters/${String(n).padStart(2,'0')}.json`,'utf8')).concepts[i].visual;
 const calls=concept('ai-agents',10,1).nodes;
 expect(calls.find(n=>n.label==='MODEL + TOOL CALLS').kind).toBe('trace');
 expect(calls.find(n=>n.label==='REQUEST LOG').kind).toBe('log');
 const signals=concept('observability',9,2).nodes;
 expect(signals.find(n=>n.label==='CAPACITY TREND').kind).toBe('gauge');
 expect(signals.find(n=>n.label==='REQUEST INVESTIGATION').kind).toBe('trace');
 const review=JSON.parse(fs.readFileSync('src/chapters/19.json','utf8')).concepts[4].visual;
 expect(review.nodes.find(n=>n.label==='ACCESSIBLE ADR').kind).toBe('document');
});

test('a phone lesson shows the inspector and event logs while course XP stays in the companion UI',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await page.addInitScript(()=>localStorage.setItem('fieldnotes-motion-v1','off'));
 await page.goto('/learn.html?path=observability#chapter/2/explore');
 await page.locator('[data-concept="1"]').click();
 const scene=page.locator('[data-concept-illustration]');
 await expect(scene.locator('.story-beaver')).toHaveCount(1);
 await expect(scene.locator('.wooden-log')).toHaveCount(2);
 await expect(scene.locator('.story-pip-avatar,.story-robot')).toHaveCount(0);
 await expect(page.locator('[data-companion-track=observability]')).toBeVisible();
 await scene.locator('[data-scene-step="2"]').click();
 await expect(scene.locator('svg.iso-scene')).toHaveAttribute('data-step','2');
 await expect(page.locator('#book-chapter-score')).toHaveText('0 / 100 chapter XP');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
