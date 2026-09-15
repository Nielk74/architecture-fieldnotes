import { test, expect } from '@playwright/test';

test('manual motion pause never freezes lesson text in its entrance fade',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await page.emulateMedia({reducedMotion:'no-preference'});
 await page.addInitScript(()=>localStorage.setItem('fieldnotes-motion-v1','off'));
 for(const route of ['/learn.html?path=green-software#chapter/1/intro','/fundamentals.html#chapter/2/intro']){
  await page.goto(route);
  await expect(page.locator('body')).toHaveClass(/motion-paused/);
  const stage=page.locator('#book-stage');
  await expect(stage).toHaveClass(/lesson-enter/);
  await expect(stage).toHaveCSS('opacity','1');
  await expect(stage).toHaveCSS('transform','none');
  await page.locator('#book-next').click();
  await expect(page).toHaveURL(/explore$/);
  await expect(stage).toHaveCSS('opacity','1');
  await expect(stage).toHaveCSS('animation-name','none');
 }
});

test('sustained reading copy stays justified and legible on phones',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await page.goto('/fundamentals.html#chapter/2/intro');
 const prose=page.locator('.chapter-prose > p').first();
 await expect(prose).toBeVisible();
 expect(await prose.evaluate(element=>getComputedStyle(element).textAlign)).toBe('justify');
 expect(await prose.evaluate(element=>getComputedStyle(element).hyphens)).toBe('auto');
 expect(await prose.evaluate(element=>getComputedStyle(element).fontSize)).toBe('15px');
 expect(await prose.evaluate(element=>getComputedStyle(element).lineHeight)).toBe('26.25px');

 await page.goto('/');
 const welcome=page.locator('.library-welcome > div > p');
 await expect(welcome).toBeVisible();
 expect(await welcome.evaluate(element=>getComputedStyle(element).textAlign)).toBe('justify');
});
