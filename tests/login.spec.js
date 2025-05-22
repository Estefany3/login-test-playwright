const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('Login exitoso con credenciales válidas', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('student', 'Password123');

  await expect(loginPage.successMessage).toHaveText('Logged In Successfully');
  await expect(page).toHaveURL(/.*logged-in-successfully/);
});

test('Login falla con credenciales inválidas', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('incorrectUser', 'Password123');

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toHaveText('Your username is invalid!');
});

test('Login falla con contraseña inválida', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('student', 'incorrectPassword');

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toHaveText('Your password is invalid!');
});
