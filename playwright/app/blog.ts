import { expect, type Page, Locator } from '@playwright/test';

export class BlogPage {
    readonly page: Page;
    readonly blogImg: Locator;
    readonly blogBody: Locator;

    constructor(page: Page) {
        this.page = page;
        this.blogImg = page.getByLabel('portrait');
        this.blogBody = page.getByRole('paragraph');
    };
    
    async goto() {
        await this.page.goto('http://localhost:3000/blog');
    };

    async confirmImg(){
        await expect(this.blogImg).toBeVisible();
    }
   
    async blogText(){
        await expect(this.blogBody).toBeVisible();
    }
    

};