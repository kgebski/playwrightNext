import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Create Next App');
});

test('PageChecks', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Click the get started link.
  await page.getByRole('link', { name: 'Read our docs' }).click();

  await expect(page.getByRole('heading', { name: 'Introduction' })).toBeVisible();

  await expect(page).toHaveURL("https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app");


  await page.getByRole('button', { name: 'Search documentation...' }).click();

  await page.keyboard.type('styling'); //Not seeing the ui pop the serach modal in the UI test

  //await page.getByRole('textbox').fill('focus');
})
  // Y NO WORK? await locator.focus();

