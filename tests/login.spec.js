const { test, expect } = require('@playwright/test');

test('login exitoso con credenciales válidas', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');

  await expect(page).toHaveURL(/.*logged-in-successfully/);

  await expect(page.locator('h1')).toContainText('Logged In Successfully');
});
