import { test, expect } from '@playwright/test';

test('Home Page',async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  await expect(page).toHaveTitle('STORE');

  await page.close(); 
});

test('get started link',async ({ page }) => {
    await page.goto('https://demoblaze.com/');
  
    await expect(page).toHaveURL('https://demoblaze.com/');
  
    await page.close(); 
  });