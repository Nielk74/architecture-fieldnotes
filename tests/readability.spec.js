import { test, expect } from '@playwright/test';

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
