import { test, expect } from '@playwright/test';

test("test", async ({ page }) => {
  await page.goto('https://dvbzk.github.io/test-app/');
  await expect(page).toHaveTitle(/page/);
});




