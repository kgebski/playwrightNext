import { test, expect } from '@playwright/test';

test('index-nav-check', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByRole("heading"))
    .toHaveText("Homepage");
});

test('docs-nav-check', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByRole("heading"))
    .toHaveText("Homepage");
  await page.getByTestId('nav-docs').click();
  await expect(page.getByRole("heading"))
  .toHaveText("Docs");
  await expect(page).toHaveURL("http://localhost:3000/docs");
});

test('examples-nav-check', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByRole("heading"))
    .toHaveText("Homepage");
  await page.getByTestId('nav-examples').click();
  await expect(page.getByRole("heading"))
  .toHaveText("Examples");
  await expect(page).toHaveURL("http://localhost:3000/examples");
});

test('blog-nav-check', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByRole("heading"))
    .toHaveText("Homepage");
  await page.getByTestId('nav-blog').click();
  await expect(page.getByRole("heading"))
  .toHaveText("Blog");
  await expect(page).toHaveURL("http://localhost:3000/blog");
});


