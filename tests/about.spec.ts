import { test, expect } from '@playwright/test';

test('clicking about link navigates to about page', async ({ page }) => {
  // baseURL is taken directly from web server,
  // See https://playwright.dev/docs/test-advanced
  await page.goto('/');

  await Promise.all([
    page.waitForNavigation(),
    page.locator('text=About').click()
  ]);

  const aboutTitle = page.locator('h1');
  await expect(aboutTitle).toHaveText('About Alcoholy');
});