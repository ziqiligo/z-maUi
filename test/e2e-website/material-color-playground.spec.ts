import { test as base, expect } from '@playwright/test';
import { TestFixture } from './playwright.config';

const test = base.extend<TestFixture>({});

test('should be able to change color without crash', async ({ page }) => {
  await page.goto('/customization/color/#playground', { waitUntil: 'networkidle' });

  await page.fill('#primary', ''); // clear the input
  await page.type('#primary', '#e91e63');

  await page.fill('#secondary', ''); // clear the input
  await page.type('#secondary', '#ffc400');

  await page.click('button:has-text("Set Docs Colors")');

  await page.click('button[aria-label="Change language"]');

  await expect(page.locator('#language-menu')).toBeVisible();
});
