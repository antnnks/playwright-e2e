import { test, expect, _baseTest } from '@playwright/test';


test('login', async ({ page }) => {
  await page.goto('https://www.tagesspiegel.de/');
  await page.locator('iframe[title="Iframe title"]').contentFrame().getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.locator('#modal-iframe').contentFrame().getByRole('textbox', { name: 'E-Mail' }).fill(process.env.USER_EMAIL!);;
  await page.locator('#modal-iframe').contentFrame().getByRole('textbox', { name: 'Passwort' }).click();
  await page.locator('#modal-iframe').contentFrame().getByRole('textbox', { name: 'Passwort' }).click();
  await page.locator('#modal-iframe').contentFrame().getByRole('textbox', { name: 'Passwort' }).fill('https://www.tagesspiegel.de/');
  await page.locator('#modal-iframe').contentFrame().getByRole('textbox', { name: 'Passwort' }).click();
  await page.locator('#modal-iframe').contentFrame().getByRole('textbox', { name: 'Passwort' }).fill(process.env.USER_PASSWORD!);;
  await page.locator('#modal-iframe').contentFrame().getByRole('button', { name: 'Anmelden' }).click();
  await expect(page.getByRole('link', { name: 'Anmelden' })).not.toBeVisible({ timeout: 15000 });
  await expect(page.getByRole('button', { name: 'Mein Konto' })).toBeVisible({ timeout: 15000 });
});



test('search', async ({ page }) => {
  await page.goto('https://www.tagesspiegel.de/');
  await page.locator('iframe[title="Iframe title"]').contentFrame().getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByRole('searchbox', { name: 'Suche' }).fill('merz');
  await page.getByRole('button', { name: 'suchen' }).click();
  await page.getByRole('heading', { name: 'Suchergebnisse für „merz“' }).click();

  await expect(page.getByRole('heading', { name: 'Suchergebnisse für „merz“' })).toBeVisible();
})                                                                    