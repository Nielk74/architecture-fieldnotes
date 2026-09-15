import {test,expect} from '@playwright/test';
test('Pip stays visible on every screen, including narrow phones',async({page})=>{
 for(const width of [320,390,1440]){
  await page.setViewportSize({width,height:800});
  for(const url of ['/','/fundamentals.html','/chapter-one.html#lesson/system','/learn.html?path=staff-engineer#chapter/1/explore','/illustrations.html']){
   await page.goto(url);const pip=page.locator('.companion-status');await expect(pip).toBeInViewport();for(const avatar of await pip.locator('.pip-avatar').all())await expect(avatar).toBeVisible();await expect(pip.locator('progress').first()).toHaveAttribute('value','0');
   await page.evaluate(()=>{document.querySelectorAll('.paths-main,.course-stage').forEach(e=>e.scrollTop=e.scrollHeight);window.scrollTo(0,document.body.scrollHeight)});
   await expect(pip).toBeInViewport();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  }
 }
});
test('Pip uses combined XP, updates immediately, and resets the next evolution interval',async({page})=>{
 await page.goto('/');await page.evaluate(()=>localStorage.setItem('fieldnotes-book-v1',JSON.stringify({version:1,chapters:{1:{missions:{explore:true,sort:true,lab:true,quiz:true}}}})));
 await page.goto('/learn.html?path=staff-engineer#chapter/1/explore');await expect(page.locator('[data-companion-track="overall"] .companion-growth')).toContainText('20 XP to evolve');await expect(page.locator('[data-companion-track="overall"] .companion-growth progress')).toHaveAttribute('value','80');
 for(const button of await page.locator('[data-concept]').all())await button.click();
 await expect(page.locator('[data-companion-track="overall"] .companion-identity')).toContainText('Pip the apprentice');await expect(page.locator('[data-companion-track="overall"] .companion-growth')).toContainText('300 XP to evolve');await expect(page.locator('[data-companion-track="overall"] .companion-growth progress')).toHaveAttribute('value','0');await expect(page.locator('[data-companion-track="overall"] .companion-announcement')).toContainText('unlocked');
 await expect(page.locator('[data-companion-track="staff-engineer"] .companion-identity')).toContainText('Level 1 / 10');await expect(page.locator('[data-companion-track="staff-engineer"] progress')).toHaveAttribute('value','50');
 await page.reload();await expect(page.locator('[data-companion-track="overall"] .companion-identity')).toContainText('Pip the apprentice');
});
