import { test, expect } from '@playwright/test';

test('clicking about link navigates to about page', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=About').click()
  ]);

  const aboutTitle = page.locator('h1');
  await expect(aboutTitle).toHaveText('About Alcoholy');
});