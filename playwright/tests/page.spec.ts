import { test, expect } from '@playwright/test';
import { HomePage } from '../app/page';

test('has title', async ({ page }) => {
  const homePage = new HomePage(page); 
  await homePage.goto();
  await expect(page).toHaveTitle('Create Next App'); //I'm unsure how to locate the title. This is the page title (tab title)
});

test('PageChecks', async ({ page }) => {
  const homePage = new HomePage(page); 
  await homePage.goto();
  await homePage.verifyIndexImg();
  await homePage.verifyCodeExample();
  await homePage.verifyDocsLink();
});



