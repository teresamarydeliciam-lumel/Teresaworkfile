import { test, expect } from '@playwright/test';

test("Filltest", async ({ page }) => {
  await page.goto("https://ultimateqa.com/filling-out-forms/");
  await page.locator('#et_pb_contact_name_0').fill("TestCode");
  await page.locator('#et_pb_contact_message_0').fill("Learn Playwright");
})

  