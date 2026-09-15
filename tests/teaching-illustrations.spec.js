import {test,expect} from '@playwright/test';
import fs from 'node:fs';
import baseline from '../docs/storybook-baseline.json' with {type:'json'};
import {teachingRecipes} from '../src/illustrations/teaching-recipes.js';
import {validateTeaching} from '../src/illustrations/teaching.js';
import {chapterScene} from '../src/chapters/visuals.js';
import {firstDimensionScene} from '../src/chapters/first-story.js';
import {renderScene} from '../src/illustrations/engine.js';

test('every chapter has an authored teaching example, with no more than three frames',()=>{
 const keys=Object.keys(teachingRecipes);
 expect(keys.length).toBe(174);
 for(const [chapter,entry]of Object.entries(baseline.chapters)){
  const ch=JSON.parse(fs.readFileSync(entry.file));
  expect(keys.some(k=>k.startsWith(chapter+'/')),chapter).toBe(true);
  for(const [i,c]of ch.concepts.entries()){
   const scene=chapterScene(ch,{visual:c.visual});
   expect(scene.sequence.length).toBeLessThanOrEqual(3);
   if(teachingRecipes[`${chapter}/${i}`])expect(renderScene(scene)).toContain('data-teaching=');
  }
 }
 expect(renderScene(firstDimensionScene(1))).toContain('data-teaching="bars"');
 for(const[k,t]of Object.entries(teachingRecipes)){
  validateTeaching(t);expect(t.frames.length,k).toBeLessThanOrEqual(3);
  const[course,n,index]=k.split('/');
  if(!(course==='fundamentals'&&n==='1')){
   const ch=JSON.parse(fs.readFileSync(baseline.chapters[`${course}/${n}`].file));
   expect(ch.concepts[Number(index)],k).toBeTruthy();
  }
  if(t.kind==='equation'){
   const[a,b,c]=t.terms.map(v=>Number(v.value.replaceAll(',','')));
   expect((t.operator==='÷'?a/b:a*b),k).toBeCloseTo(c,8);
  }
 }
 expect(()=>validateTeaching({...teachingRecipes['observability/1/1'],frames:[{},{},{},{}]})).toThrow('maximum three frames');
 expect(()=>renderScene({title:'Validate every authored step before compacting',nodes:[{id:'pip',kind:'pip',x:63,y:58}],sequence:[{node:'pip'},{node:'pip'},{node:'missing'},{node:'pip'}]})).toThrow('missing node');
 const cardinality=teachingRecipes['observability/1/1'];
 expect(cardinality.columns.map((_,i)=>new Set(cardinality.rows.map(r=>r[i])).size)).toEqual([4,2,2]);
 const spans=teachingRecipes['observability/6/1'].items;
 expect(spans[1].end-spans[1].start+spans[2].end-spans[2].start).toBeGreaterThan(spans[0].end-spans[0].start);
});

test('authored SVG labels neither overlap each other nor leave the canvas',async({page})=>{
 await page.goto('/illustrations.html');
 const examples=Object.entries(teachingRecipes).map(([key,teaching])=>({key,svg:renderScene({title:key,teaching,nodes:[{id:'pip',kind:'pip',course:key.split('/')[0],x:63,y:58}],sequence:[0,1,2].map(i=>({node:'pip',text:`Step ${i+1}`}))})}));
 const errors=await page.evaluate(examples=>{
  const mount=document.createElement('div');mount.style.cssText='position:fixed;width:480px;top:0;left:0';document.body.append(mount);
  const errors=[];
  for(const{key,svg}of examples){
   mount.innerHTML=svg;
   for(const frame of mount.querySelectorAll('[data-teaching-frame]')){
    frame.style.display='inline';
    const labels=[...frame.querySelectorAll('text')].map(e=>({text:e.textContent,b:e.getBBox()}));
    for(const a of labels)if(a.b.x<14||a.b.x+a.b.width>466)errors.push(`${key}: clipped ${a.text}`);
    for(let i=0;i<labels.length;i++)for(let j=i+1;j<labels.length;j++){
     const a=labels[i],b=labels[j];
     if(a.b.x<b.b.x+b.b.width&&a.b.x+a.b.width>b.b.x&&a.b.y<b.b.y+b.b.height&&a.b.y+a.b.height>b.b.y)errors.push(`${key}: ${a.text} overlaps ${b.text}`);
    }
    frame.style.display='none';
   }
  }
  mount.remove();return [...new Set(errors)];
 },examples);
 expect(errors).toEqual([]);
});

test('Pip demonstrates cardinality in three keyboard-operable frames with motion off',async({page},testInfo)=>{
 await page.addInitScript(()=>localStorage.setItem('fieldnotes-motion-v1','off'));
 await page.setViewportSize({width:390,height:844});
 await page.goto('/learn.html?path=observability#chapter/1/explore');
 await page.locator('[data-concept="1"]').click();
 const scene=page.locator('[data-concept-illustration]');
 await expect(scene.locator('[data-scene-step]')).toHaveCount(3);
 for(let i=0;i<3;i++){
  const button=scene.locator(`[data-scene-step="${i}"]`);await button.focus();await page.keyboard.press('Enter');
  await expect(scene.locator(`[data-teaching-frame="${i}"]`)).toBeVisible();
  await expect(scene.locator('[data-teaching-frame]:visible')).toHaveCount(1);
  await expect(scene.locator('[data-teaching-frame]:visible')).toContainText('4 distinct');
  await expect(scene.locator('[data-scene-caption]')).toHaveText(teachingRecipes['observability/1/1'].captions[i]);
 }
 for(const width of[320,390,1440]){
  await page.setViewportSize({width,height:844});await scene.scrollIntoViewIfNeeded();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:testInfo.outputPath(`cardinality-${width}.png`)});
 }
 await expect(page.locator('#book-chapter-score')).toHaveText('0 / 100 chapter XP');
});

test('studio concept selection and standalone export preserve the concrete table',async({page})=>{
 await page.goto('/illustrations.html');
 await page.locator('#scene-choice').selectOption('observability-01');
 await page.locator('#concept-choice').selectOption('1');
 await expect(page.locator('#scene-preview')).toContainText('Count different values');
 const pending=page.waitForEvent('download');await page.locator('#export-svg').click();
 const download=await pending,stream=await download.createReadStream();let svg='';for await(const chunk of stream)svg+=chunk;
 expect(svg).toContain('4 distinct');expect(svg).toContain('req-04');
 expect(svg).toContain('data-story-course="observability"');
 expect((svg.match(/data-teaching-frame=/g)||[])).toHaveLength(3);
 expect((svg.match(/<svg\b/g)||[])).toHaveLength(1);
 expect(svg).toContain('font-family="sans-serif"');
});
