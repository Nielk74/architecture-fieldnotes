import {test,expect} from '@playwright/test';
import {paths} from '../src/paths/registry.js';
import {courseEvolutions} from '../src/illustrations/course-sidekicks.js';

function ledger(path,xp,unearnedChapter=1){
 const chapters={};
 for(const id of [...Array.from({length:path.count},(_,i)=>i+1).filter(id=>id!==unearnedChapter),unearnedChapter]){
  const rewards=path.id==='fundamentals'&&id===1?{explore:20,sort:20,lab:20,quiz:20,record:20}:{explore:20,scenario:20,quiz:20,apply:40};
  for(const [mission,amount]of Object.entries(rewards)){
   if(id===unearnedChapter&&mission==='explore')continue;
   if(xp>=amount){chapters[id]??={missions:{}};chapters[id].missions[mission]=true;xp-=amount;}
  }
 }
 if(xp!==0)throw new Error('Unreachable test XP');
 return {version:1,chapters};
}

for(const path of Object.values(paths)){
 test(`${path.id}: earned course and overall evolutions queue once, persist, and never replay on reload`,async({page},testInfo)=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.setViewportSize({width:390,height:844});
  const chapter=path.id==='fundamentals'?2:1,threshold=courseEvolutions(path.id)[1].xp;
  const other=paths[path.id==='fundamentals'?'staff-engineer':'fundamentals'];
  await page.goto('/');
  await page.evaluate(({entries})=>{for(const [key,value]of entries)localStorage.setItem(key,JSON.stringify(value));},
   {entries:[[path.key,ledger(path,threshold-20,chapter)],[other.key,ledger(other,380-(threshold-20))]]});
  await page.goto(`${path.entry}#chapter/${chapter}/explore`);
  await expect(page.locator('.companion-status')).toBeVisible();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  for(const button of await page.locator('[data-concept]').all())await button.click();
  const dialog=page.getByRole('dialog');
  await expect(dialog).toHaveCount(1);await expect(dialog).toHaveAttribute('data-source','reward');
  await expect(dialog).toHaveAttribute('data-track',path.id);
  await expect(dialog.locator('.level-up-after .pip-avatar')).toHaveAttribute('data-pip-course',path.id);
  await expect(dialog.locator('.level-up-after .pip-avatar')).toHaveAttribute('data-pip-level','1');
  await expect(dialog).toHaveAttribute('data-mode','animated');
  if(path.id==='green-software'){
   await expect(dialog).toHaveAttribute('data-phase','transform');
   const a=await dialog.locator('.level-up-after').boundingBox();await page.waitForTimeout(180);
   const b=await dialog.locator('.level-up-after').boundingBox();expect(Math.abs(b.y-a.y)).toBeGreaterThan(2);
   await page.screenshot({path:testInfo.outputPath('earned-level-up-phone.png')});
  }
  await dialog.getByRole('button',{name:'Let’s go!'}).click();
  await expect(dialog).toHaveCount(1);await expect(dialog).toHaveAttribute('data-track','overall');
  await expect(dialog.locator('.level-up-after .pip-avatar')).toHaveAttribute('data-pip-level','2');
  await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);
  await expect(page.locator('[data-concept]').last()).toBeFocused();
  await expect(page.locator('#book-chapter-score')).toHaveText('20 / 100 chapter XP');
  for(const button of await page.locator('[data-concept]').all())await button.click();
  await expect(dialog).toHaveCount(0);
  await page.reload();await expect(page.locator('.companion-status')).toBeVisible();
  await expect(dialog).toHaveCount(0);
  await expect(page.locator('[data-companion-track=overall]')).toContainText('Level 3 / 10');
  await expect(page.locator(`#book-chapter-score`)).toHaveText('20 / 100 chapter XP');
  const saved=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),path.key);
  expect(saved.chapters[chapter].missions.explore).toBe(true);
 });
}

test('Chapter one earns its live celebration and a paused learner gets a still form without changing preferences',async({page})=>{
 await page.goto('/');
 await page.evaluate(()=>{
  localStorage.setItem('fieldnotes-motion-v1','off');
  localStorage.setItem('fieldnotes-book-v1',JSON.stringify({version:1,chapters:{1:{missions:{explore:true,sort:true,lab:true,quiz:true}}}}));
 });
 await page.goto('/chapter-one.html#lesson/rationale');
 await expect(page.locator('#rationale')).toBeVisible();await expect(page.getByRole('dialog')).toHaveCount(0);
 const download=page.waitForEvent('download');await page.getByRole('button',{name:'Download your decision'}).click();await download;
 const dialog=page.getByRole('dialog');await expect(dialog).toHaveAttribute('data-track','overall');
 await expect(dialog).toHaveAttribute('data-mode','still');
 await expect(dialog.locator('.level-up-after')).toHaveCSS('animation-name','none');
 await expect(dialog.locator('.level-up-after')).toHaveCSS('opacity','1');
 await dialog.getByRole('button',{name:'Let’s go!'}).click();
 expect(await page.evaluate(()=>localStorage.getItem('fieldnotes-motion-v1'))).toBe('off');
 await page.reload();await expect(page.locator('#xp')).toHaveText('100');await expect(dialog).toHaveCount(0);
});

test('opening, reading, skipping, and saving a draft do not celebrate existing or unearned levels',async({page})=>{
 await page.goto('/');
 await page.evaluate(value=>localStorage.setItem('fieldnotes-book-v1',JSON.stringify(value)),ledger(paths.fundamentals,380));
 await page.goto('/learn.html?path=green-software#chapter/1/intro');
 await expect(page.locator('.companion-status')).toBeVisible();
 await page.locator('#book-next').click();await page.locator('#book-skip').click();
 await page.locator('[data-go=apply]').click();await page.locator('[data-work]').first().fill('An unfinished reflection, not a reward.');
 await expect(page.getByRole('dialog')).toHaveCount(0);
 await expect(page.locator('#book-chapter-score')).toHaveText('0 / 100 chapter XP');
 await page.reload();await expect(page.locator('[data-work]').first()).toHaveValue('An unfinished reflection, not a reward.');
 await expect(page.getByRole('dialog')).toHaveCount(0);
});
