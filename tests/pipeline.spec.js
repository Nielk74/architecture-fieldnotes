import {test,expect} from '@playwright/test';
import {traceRecord,pipelineRecipe} from '../src/activities/pipeline.js';
test('validation changes the actual route and preserves useful data',()=>{
 expect(traceRecord({guarded:false,valid:false}).at(-1).outcome).toBe('polluted');
 expect(traceRecord({guarded:true,valid:false}).map(s=>s.node)).toEqual(['source','tester','reject']);
 expect(traceRecord({guarded:true,valid:true}).at(-1).outcome).toBe('stored');
 expect(pipelineRecipe(true).edges).toContainEqual({from:'tester',to:'reject',dashed:true});
 expect(pipelineRecipe(false).nodes.some(n=>n.id==='tester')).toBe(false);
});
test('lab failures teach, pause supports manual steps, and proof earns XP once',async({page})=>{
 await page.goto('/#chapter/11/scenario');await page.locator('#book-next').click();await expect(page.locator('.lab-visual')).toHaveAttribute('data-outcome','polluted');await expect(page.locator('#book-chapter-score')).toHaveText('0 / 100 chapter XP');
 await page.locator('#lab-guard').check();await expect(page.locator('[data-iso-node="tester"]')).toBeVisible();await page.locator('.motion-toggle').click();await page.locator('#book-next').click();await expect(page.locator('.lab-step')).toBeVisible();await page.locator('.lab-step').click();await expect(page.locator('svg[data-record-stage]')).toHaveAttribute('data-record-stage','tester');await page.waitForTimeout(1100);await expect(page.locator('svg[data-record-stage]')).toHaveAttribute('data-record-stage','tester');await page.locator('.lab-step').click();await expect(page.locator('.lab-visual')).toHaveAttribute('data-outcome','rejected');
 await page.locator('[value="good"]').check();await page.locator('#book-next').click();for(let i=0;i<3;i++)await page.locator('.lab-step').click();await expect(page.locator('#book-chapter-score')).toHaveText('20 / 100 chapter XP');await page.reload();await expect(page.locator('#book-chapter-score')).toHaveText('20 / 100 chapter XP');await expect(page.locator('#book-next')).toHaveText('Continue →');await page.locator('#book-next').click();await expect(page).toHaveURL(/quiz$/);
});
test('mobile pilot has visible actions, explicit checking and freely accessible skip',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/#chapter/11/quiz');await expect(page.locator('#book-next')).toBeDisabled();await page.locator('[data-answer="1"]').click();await expect(page.locator('.quiz-feedback')).toBeEmpty();await expect(page.locator('#book-next')).toHaveText('Check answer');await page.locator('#book-next').click();await expect(page.locator('.quiz-feedback')).toContainText('Exactly.');await expect(page.locator('#book-next')).toHaveText('Next question →');await page.locator('#book-skip').click();await expect(page).toHaveURL(/apply$/);await expect(page.locator('#book-chapter-score')).toHaveText('0 / 100 chapter XP');
 for(const width of [320,390,768]){await page.setViewportSize({width,height:844});for(const step of ['scenario','quiz','apply']){await page.goto('/#chapter/11/'+step);await expect(page.locator('#book-next')).toBeInViewport();expect(await page.locator('.course-stage').evaluate(e=>e.scrollWidth<=e.clientWidth)).toBe(true);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);}}
});
