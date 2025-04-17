import { test, expect } from '@playwright/test';
import { BlogPage } from '../app/blog';

test('BlogCheck', async ({ page }) => {
    const blogPage = new BlogPage(page); 
    await blogPage.goto();
    await blogPage.blogImg;
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible(); //Should we make the heading checks global across our tests? 
    await blogPage.blogBody;
  })
