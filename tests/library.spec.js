import {test,expect} from '@playwright/test';
import fs from 'node:fs';
import {renderScene} from '../src/illustrations/engine.js';
import {chapterScene} from '../src/chapters/visuals.js';
const counts={'staff-engineer':9,'responsible-engineering':7,sre:34,observability:22,'ai-agents':13};
const load=(id,n)=>JSON.parse(fs.readFileSync(new URL(`../src/paths/${id}/chapters/${String(n).padStart(2,'0')}.json`,import.meta.url),'utf8'));
for(const [id,count] of Object.entries(counts)){
 test(`${id}: every chapter renders and its learning steps are reachable`,async({page})=>{
  test.setTimeout(120000);const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(`/learn.html?path=${id}`);await expect(page.locator('.chapter-card')).toHaveCount(count);
  for(let n=1;n<=count;n++){
   await page.goto(`/learn.html?path=${id}#chapter/${n}/intro`);await expect(page.locator('.book-intro')).toBeVisible();
   await page.locator('[data-go="explore"]').click();await expect(page.locator('[data-concept]').first()).toBeVisible();
   await page.locator('[data-go="scenario"]').click();await expect(page.locator('[data-choice]').first()).toBeVisible();
   await page.locator('[data-go="quiz"]').click();await expect(page.locator('[data-answer]').first()).toBeVisible();
   await page.locator('[data-go="apply"]').click();await expect(page.locator('[data-work]')).toHaveCount(3);
  }
  expect(errors).toEqual([]);
 });
 test(`${id}: XP and writing survive navigation and reload independently`,async({page})=>{
  await page.goto(`/learn.html?path=${id}#chapter/1/explore`);await page.locator('[data-concept]').first().waitFor();for(const b of await page.locator('[data-concept]').all())await b.click();await expect(page.locator('#book-chapter-score')).toHaveText('20 / 100 chapter XP');await page.locator('[data-go="apply"]').click();await page.locator('[data-work="0"]').fill(`My ${id} reflection remains independent.`);await page.getByRole('link',{name:'Learning paths'}).click();await expect(page.locator(`.path-${id}`)).toContainText('20 /');await expect(page.locator('.continue-learning')).toContainText('Chapter 1');await page.locator('[data-course-status="active"]').click();await expect(page.locator('.path-card:visible')).toHaveCount(1);await expect(page.locator(`.path-${id} progress`)).toHaveAttribute('value','20');await page.locator(`.path-${id} .primary`).click();await expect(page.locator('[data-work="0"]')).toHaveValue(`My ${id} reflection remains independent.`);await page.reload();await expect(page.locator('[data-work="0"]')).toHaveValue(`My ${id} reflection remains independent.`);
 });
 test(`${id}: content is complete, specific, source-bounded and renderable`,()=>{
  const index=JSON.parse(fs.readFileSync(new URL(`../docs/${id}/source-index.json`,import.meta.url),'utf8'));expect(index).toHaveLength(count);const bodies=new Set(),questions=new Set();
  for(let n=1;n<=count;n++){
   const ch=load(id,n),source=index[n-1];expect(ch.number).toBe(n);expect(ch.source.startLine).toBe(source.startLine);expect(ch.source.endLine).toBe(source.endLine);expect(ch.source.endLine).toBeGreaterThan(ch.source.startLine);expect(ch.title).toBe(source.title);expect(ch.concepts.length).toBeGreaterThanOrEqual(4);expect(ch.exercise.fields).toHaveLength(3);for(const field of ch.exercise.fields){expect(field.label.trim().length).toBeGreaterThan(2);expect(field.placeholder.trim().length).toBeGreaterThan(10)}expect(ch.quiz).toHaveLength(3);expect(ch.scenario.options).toHaveLength(2);
   for(const c of ch.concepts){expect(c.body.length).toBeGreaterThan(100);expect(c.body).not.toMatch(/as a practical lens|is treated in this chapter as|source explains the mechanism, names the conditions|chapter develops .+ as a concrete design concern/);expect(bodies.has(c.body)).toBe(false);bodies.add(c.body)}
   for(const q of ch.quiz){expect(q.answer).toBeGreaterThanOrEqual(0);expect(q.answer).toBeLessThan(q.options.length);expect(questions.has(q.question)).toBe(false);questions.add(q.question)}
   expect(renderScene(chapterScene(ch))).toContain('iso-object');expect(fs.readFileSync(new URL(`../public/notes/${id}/chapter-${String(n).padStart(2,'0')}.md`,import.meta.url),'utf8').split(/\s+/).length).toBeGreaterThan(240);
  }
 });
}
test('course library shows every illustration and filters on small phones',async({page})=>{
 for(const width of [320,390,768]){
  await page.setViewportSize({width,height:800});await page.goto('/');
  await expect(page.locator('.path-card:visible')).toHaveCount(7);
  await expect(page.locator('.course-art .iso-scene')).toHaveCount(7);
  await expect(page.locator('.path-progress progress')).toHaveCount(7);
  await page.locator('#path-category').selectOption('People & responsibility');await expect(page.locator('.path-card:visible')).toHaveCount(2);
  await page.locator('#path-category').selectOption('all');await page.locator('#path-search').fill('agents');await expect(page.locator('.path-card:visible')).toHaveCount(1);await expect(page.locator('.path-ai-agents')).toBeVisible();
  await page.locator('#path-search').fill('no matching course');await expect(page.locator('#no-paths')).toBeVisible();await page.locator('#reset-course-filters').click();await expect(page.locator('.path-card:visible')).toHaveCount(7);
  await page.locator('[data-course-status="completed"]').click();await expect(page.locator('#no-paths')).toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 }
});
test('people scenes communicate through local actions and pause with the app',async({page})=>{
 await page.goto('/illustrations.html');const handoff=page.locator('#vocabulary .iso-node[data-kind="handoff"] .people-pass');await handoff.scrollIntoViewIfNeeded();await expect.poll(()=>handoff.evaluate(e=>getComputedStyle(e).animationPlayState)).toBe('running');const a=await handoff.evaluate(e=>getComputedStyle(e).translate);await page.waitForTimeout(700);expect(await handoff.evaluate(e=>getComputedStyle(e).translate)).not.toBe(a);await page.locator('#studio-motion').click();await handoff.scrollIntoViewIfNeeded();await expect.poll(()=>handoff.evaluate(e=>getComputedStyle(e).animationPlayState)).toBe('paused');const b=await handoff.evaluate(e=>getComputedStyle(e).translate);await page.waitForTimeout(300);expect(await handoff.evaluate(e=>getComputedStyle(e).translate)).toBe(b);
});
