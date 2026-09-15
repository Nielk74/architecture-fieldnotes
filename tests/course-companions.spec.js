import {test,expect} from '@playwright/test';
import {paths} from '../src/paths/registry.js';
import {courseEvolutions,courseEvolutionFor,nextCourseEvolution,renderCourseBot} from '../src/illustrations/course-sidekicks.js';
test('all registered courses have ten distinct forms with reachable, independent thresholds',()=>{
 const all=new Set();
 for(const path of Object.values(paths)){
  const stages=courseEvolutions(path.id);expect(stages).toHaveLength(10);expect(stages[0].xp).toBe(0);expect(stages[9].xp).toBe(path.totalXP);expect(new Set(stages.map(s=>s.gear)).size).toBe(10);
  for(const [i,stage] of stages.entries()){
   expect(courseEvolutionFor(path.id,stage.xp).level).toBe(i);expect(stage.xp%20).toBe(0);if(i>0){expect(stage.xp).toBeGreaterThan(stages[i-1].xp);expect(courseEvolutionFor(path.id,stage.xp-1).level).toBe(i-1)}
   const svg=renderCourseBot({course:path.id,level:i}).replace(/data-[\w-]+="[^"]*"/g,'');expect(all.has(svg)).toBe(false);all.add(svg);
  }
  expect(nextCourseEvolution(path.id,path.totalXP)).toBeNull();expect(courseEvolutionFor(path.id,0).level).toBe(0);
 }
 expect(all.size).toBe(Object.keys(paths).length*10);
});
test('the atlas exposes every preview without granting XP and links to the current course',async({page})=>{
 await page.setViewportSize({width:320,height:800});await page.goto('/companions.html');await expect(page.locator('.pip-form')).toHaveCount((Object.keys(paths).length+1)*10);await expect(page.locator('.pip-form.current')).toHaveCount(Object.keys(paths).length+1);await expect(page.locator('.pip-form.locked')).toHaveCount((Object.keys(paths).length+1)*9);
 await page.locator('#pip-track').selectOption('sre');await expect(page.locator('.pip-form:visible')).toHaveCount(10);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.goto('/learn.html?path=sre#chapter/1/explore');await expect(page.locator('[data-companion-track]')).toHaveCount(2);await expect(page.locator('[data-companion-track=sre]')).toBeInViewport();await page.getByRole('link',{name:'Explore course Pip evolutions'}).click();await expect(page.locator('#pip-track')).toHaveValue('sre');await expect(page.locator('[data-pip-family=sre]')).toContainText('0 course XP');
});
test('maxed course and overall companions remain visible and never divide by zero',async({page})=>{
 await page.setViewportSize({width:320,height:800});await page.goto('/');
 await page.evaluate(configs=>{for(const p of configs){const chapters=Object.fromEntries(Array.from({length:p.count},(_,i)=>[i+1,{missions:{explore:true,sort:true,lab:true,quiz:true,record:true,scenario:true,apply:true}}]));localStorage.setItem(p.key,JSON.stringify({version:1,chapters}))}},Object.values(paths));
 await page.goto('/learn.html?path=sre#chapter/1/intro');await expect(page.locator('[data-companion-track=overall]')).toContainText('Level 10 / 10');await expect(page.locator('[data-companion-track=sre]')).toContainText('Level 10 / 10');
 for(const progress of await page.locator('.companion-status progress').all())await expect(progress).toHaveAttribute('value','100');
 for(const track of await page.locator('[data-companion-track]').all())await expect(track).toBeInViewport();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
test('changing the atlas family changes only its course companion',async({page})=>{
 await page.goto('/companions.html?track=staff-engineer');await expect(page.locator('[data-companion-track=staff-engineer]')).toBeVisible();await page.locator('#pip-track').selectOption('ai-agents');await expect(page.locator('[data-companion-track=ai-agents]')).toBeVisible();await expect(page.locator('[data-companion-track=staff-engineer]')).toHaveCount(0);await page.locator('#pip-track').selectOption('all');await expect(page.locator('[data-companion-track]')).toHaveCount(1);await expect(page.locator('[data-companion-track=overall]')).toBeVisible();
});
