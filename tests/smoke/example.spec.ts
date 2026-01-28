import { test, expect } from '@playwright/test';

test("test", async ({ page }) => {
  await page.goto('https://dvbzk.github.io/test-app/');
  await expect(page).toHaveTitle(/test-app/);
});




// import { test, expect } from '@playwright/test';

// import {
//   generateRandomPhoneUA,
//   generateRandomEmail,
//   generateRandomText,
// } from '../helpers';

// test('show validation errors', async ({ page }) => {
//   await page.goto('/register');
//   await page.getByRole('button', { name: 'Зареєструватись' }).click();

//   const usernameWarning = page
//     .getByPlaceholder('Введіть ваше повне імʼя')
//     .locator('..')
//     .getByText('Поле не може бути порожнім.');

//   const phoneWarning = page
//     .locator('input[value="+380 "]')
//     .locator('../../..')
//     .getByText('Поле не може бути порожнім.');

//   const emailWarning = page
//     .getByPlaceholder('Вкажіть вашу електронну скриньку')
//     .locator('..')
//     .getByText('Обовʼязкове поле.');

//   const passwordWarning = page
//     .getByPlaceholder('Придумайте пароль')
//     .locator('..')
//     .getByText('Обовʼязкове поле. Від 6 до 20 символів.');

//   await expect(usernameWarning).toBeVisible();
//   await expect(phoneWarning).toBeVisible();
//   await expect(emailWarning).toBeVisible();
//   await expect(passwordWarning).toBeVisible();
// });

// test('register with valid data', async ({ page }) => {
//   const randomEmail = generateRandomEmail();
//   const randomText = generateRandomText();
//   const randomPhone = generateRandomPhoneUA();

//   await page.goto('/register');
//   await page.getByPlaceholder('Введіть ваше повне імʼя').fill(randomText);
//   await page.locator('input[value="+380 "]').pressSequentially(randomPhone);
//   await page
//     .getByPlaceholder('Вкажіть вашу електронну скриньку')
//     .fill(randomEmail);
//   await page.getByPlaceholder('Придумайте пароль').fill(randomText);
//   await page.getByRole('button', { name: 'Зареєструватись' }).click();

//   await expect(page).toHaveURL('register/success');
// });

// import { test, expect } from '@playwright/test';

// test('show validation errors', async ({ page }) => {
//   await page.goto('/login');

//   page.getByRole('button', { name: 'Увійти' }).click();

//   const emailError = page
//     .getByPlaceholder('Вкажіть вашу електронну скриньку')
//     .locator('..')
//     .getByText('Обовʼязкове поле.');

//   const passwordError = page
//     .getByPlaceholder('Вкажіть ваш пароль')
//     .locator('..')
//     .getByText('Обовʼязкове поле.');

//   await expect(emailError).toBeVisible();
//   await expect(passwordError).toBeVisible();
// });

// test('login with valid creds', async ({ page }) => {
//   await page.goto('/login');

//   await page
//     .getByPlaceholder('Вкажіть вашу електронну скриньку')
//     .fill('manager@test.com');
//   await page.getByPlaceholder('Вкажіть ваш пароль').fill('LimiT2121');
//   await page.getByRole('button', { name: 'Увійти' }).click();

//   await expect(page).toHaveURL('/dashboard');
// });

// test('login with invalid creds', async ({ page }) => {
//   await page.goto('/login');

//   await page
//     .getByPlaceholder('Вкажіть вашу електронну скриньку')
//     .fill('wrong@test.com');
//   await page.getByPlaceholder('Вкажіть ваш пароль').fill('wrongpass');
//   await page.getByRole('button', { name: 'Увійти' }).click();

//   await expect(
//     page.getByText(
//       'Невірний e-mail або пароль. Будь ласка, перевірте введені дані та повторіть спробу.',
//     ),
//   ).toBeVisible();
// });