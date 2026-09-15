import {test,expect} from '@playwright/test';
import fs from 'node:fs';
import {paths} from '../src/paths/registry.js';

const path=paths['green-software'];
const chapters=path.catalog.map(c=>JSON.parse(fs.readFileSync(new URL(`../src/paths/green-software/chapters/${String(c.number).padStart(2,'0')}.json`,import.meta.url),'utf8')));
const url=(n,step='map')=>`${path.entry}#chapter/${n}/${step}`;

for(const ch of chapters)test(`Green Software ${ch.number}: complete, export, persist, and prevent repeated rewards`,async({page},testInfo)=>{
 await page.goto(url(ch.number));
 await expect(page.locator('.chapter-overview h1')).toHaveText(ch.title);
 await expect(page.locator('.map-stop')).toHaveCount(5);
 const notes=await page.request.get(`/notes/green-software/chapter-${String(ch.number).padStart(2,'0')}.md`);
 expect(notes.ok()).toBe(true);expect(await notes.text()).toContain(ch.source.reference);
 if(ch.number===5)await page.screenshot({path:testInfo.outputPath('desktop-map.png'),animations:'disabled'});
 await page.locator('[data-go="intro"]').click();
 await expect(page.locator('.book-intro')).toBeVisible();
 await page.locator('#book-next').click();
 await expect(page.locator('[data-concept]')).toHaveCount(ch.concepts.length);
 for(const button of await page.locator('[data-concept]').all())await button.click();
 await expect(page.locator('#book-chapter-score')).toHaveText('20 / 100 chapter XP');
 await page.locator('#book-next').click();
 await page.locator('[data-choice="0"]').click();
 await expect(page.locator('#decision-consequence')).toContainText(ch.scenario.options[0].cost);
 await page.locator('[data-choice="1"]').click();
 await expect(page.locator('#book-chapter-score')).toHaveText('40 / 100 chapter XP');
 if(ch.number===5)await page.screenshot({path:testInfo.outputPath('desktop-decision.png'),animations:'disabled'});
 await page.locator('#book-next').click();
 for(const q of ch.quiz){
  await page.locator(`[data-answer="${q.answer}"]`).click();
  await expect(page.locator('.quiz-feedback')).toBeEmpty();
  await page.locator('#book-next').click();
  await expect(page.locator('.quiz-feedback')).toContainText(q.explanation);
  await page.locator('#book-next').click();
 }
 await expect(page.locator('.quiz-finish')).toContainText('3 of 3');
 await page.locator('#book-next').click();
 const draft=`Chapter ${ch.number}: compare total resource use for equivalent completed work and preserve the deadline.`;
 await expect(page.locator('[data-work]')).toHaveCount(3);
 for(const field of await page.locator('[data-work]').all())await field.fill(draft);
 const pending=page.waitForEvent('download');await page.locator('#book-next').click();
 const download=await pending;
 expect(download.suggestedFilename()).toBe(`green-software-chapter-${String(ch.number).padStart(2,'0')}-reflection.md`);
 expect(fs.readFileSync(await download.path(),'utf8')).toContain(draft);
 await expect(page.locator('#book-chapter-score')).toHaveText('100 / 100 chapter XP');
 await page.reload();await expect(page.locator('[data-work="0"]')).toHaveValue(draft);
 await page.locator('[data-go="scenario"]').click();await page.locator('[data-choice="0"]').click();await page.locator('[data-choice="1"]').click();
 await expect(page.locator('#book-chapter-score')).toHaveText('100 / 100 chapter XP');
 await page.getByRole('link',{name:'Learning paths',exact:true}).click();
 await expect(page.locator('.path-green-software')).toContainText('100 / 1,300 XP');
 await expect(page.locator('.path-fundamentals progress')).toHaveAttribute('value','0');
});

test('green course is usable on short phones with keyboard, history, skip, and paused scenes',async({page},testInfo)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.emulateMedia({reducedMotion:'reduce'});
 for(const width of [320,390]){
  await page.setViewportSize({width,height:568});
  for(const step of ['map','intro','explore','scenario','quiz','apply']){
   await page.goto(`${path.entry}&motion=system#chapter/9/${step}`);
   await expect(page.locator('#book-location')).toContainText('Measurement');
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
   expect(await page.locator('.course-stage').evaluate(e=>e.scrollWidth<=e.clientWidth)).toBe(true);
   if(step!=='map')await expect(page.locator('#book-next')).toBeInViewport();
   if(step==='apply'){
    await page.locator('[data-work="2"]').fill('Include allocated hardware over the same period.');
    await expect(page.locator('[data-work="2"]')).toBeInViewport();
   }
  }
 }
 await page.setViewportSize({width:390,height:844});
 await page.goto(`${path.entry}&motion=system#chapter/5/explore`);
 await page.locator('[data-concept="0"]').focus();await page.keyboard.press('ArrowRight');
 await expect(page.locator('[data-concept="1"]')).toBeFocused();
 await page.locator('[data-scene-step="2"]').click();
 await page.locator('[data-scene-player]').scrollIntoViewIfNeeded();
 await page.screenshot({path:testInfo.outputPath('phone-lesson.png'),animations:'disabled'});
 await page.locator('#book-skip').click();await expect(page).toHaveURL(/scenario$/);
 await page.locator('[data-choice="0"]').click();
 await page.locator('#book-skip').click();await expect(page).toHaveURL(/quiz$/);
 await page.goBack();await expect(page.locator('[data-choice="0"]')).toHaveAttribute('aria-pressed','true');
 await expect(page.locator('#book-chapter-score')).toHaveText('0 / 100 chapter XP');
 await page.locator('[data-go="quiz"]').click();
 const q=chapters[4].quiz[0];await page.locator(`[data-answer="${(q.answer+1)%3}"]`).click();await page.locator('#book-next').click();
 await expect(page.locator('.quiz-feedback')).toContainText('Not quite.');
 await expect(page.locator('.quiz-feedback')).toContainText(q.explanation);
 await expect(page.locator('#book-chapter-score')).toHaveText('0 / 100 chapter XP');
 await page.locator('.quiz-feedback').scrollIntoViewIfNeeded();
 await page.screenshot({path:testInfo.outputPath('phone-feedback.png'),animations:'disabled'});
 expect(errors).toEqual([]);
});
