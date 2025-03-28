import { test, expect } from '@playwright/test';

test('BlogCheck', async ({ page }) => {
    await page.goto('http://localhost:3000/blog');
    await expect(page.getByText('src/app/blog/page.tsx')).toBeVisible();
    // Click the get started link.
    await expect(page.getByRole('link', { name: 'Read our docs' })).toBeVisible(); // This navigates away to Next docs
    
    const expectInput = page.getByRole('link', { name: 'Read our docs' })
    await expect(expectInput).toBeVisible();
  
    //await expect(page.getByRole('heading', { name: 'Introduction' })).toBeVisible();
    //await expect(page).toHaveURL("https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app");
    //await page.getByRole('button', { name: 'Search documentation...' }).click();
    //await page.keyboard.type('styling'); //Not seeing the ui pop the serach modal in the UI test
  
  
    //await page.getByRole('textbox').fill('focus');
  })
    // Y NO WORK? await locator.focus();