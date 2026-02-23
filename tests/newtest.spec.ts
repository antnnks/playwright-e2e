import { test, expect, _baseTest } from '@playwright/test';

test('search', async ({ page }) => {
  await page.goto('https://www.tagesspiegel.de/');
  await page.locator('iframe[title="Iframe title"]').contentFrame().getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByRole('searchbox', { name: 'Suche' }).fill('merz');
  await page.getByRole('button', { name: 'suchen' }).click();
  await page.getByRole('heading', { name: 'Suchergebnisse für „merz“' }).click();

  await expect(page.getByRole('heading', { name: 'Suchergebnisse für „merz“' })).toBeVisible();
})                                                                    