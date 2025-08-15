import { test, expect } from '@playwright/test';
import { BlogPage } from '../app/blog';

test('BlogCheck', async ({ page }) => {
    const blogPage = new BlogPage(page); 
    await blogPage.goto();
    await blogPage.blogImg;
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible(); 
    await expect(page.getByRole('heading')).toHaveText('Blog');
    await expect(page.getByRole('paragraph')).toBeVisible;
    await expect(page.getByTestId('subnav1')).toBeVisible; 
    await expect(page.getByTestId('subnav2')).toBeVisible; 
    await expect(page.getByTestId('subnav3')).toBeVisible; 
  });
    
