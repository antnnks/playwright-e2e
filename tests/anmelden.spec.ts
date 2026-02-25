import { test, expect, _baseTest } from '@playwright/test';

test('Anmelden', async ({ page }) => {
  const email = process.env.USER_EMAIL!;
  const password = process.env.USER_PASSWORD!;
  await page.goto('https://www.tagesspiegel.de/');
  await page.locator('iframe[title="Iframe title"]').contentFrame().getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.locator('#modal-iframe').contentFrame().getByRole('textbox', { name: 'E-Mail' }).fill(email);
  await page.locator('#modal-iframe').contentFrame().getByRole('textbox', { name: 'Passwort' }).click();
  await page.locator('#modal-iframe').contentFrame().getByRole('textbox', { name: 'Passwort' }).fill(password);
  await page.locator('#modal-iframe').contentFrame().getByRole('button', { name: 'Anmelden' }).click();
  await expect(page.locator('#modal-iframe')).toBeHidden({ timeout: 15000 });
  await expect(page.getByRole('button', { name: 'Mein Konto' })).toBeVisible({ timeout: 15000 });
});