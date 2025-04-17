import { expect, type Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly nextImg: Locator;
    readonly blogBody: Locator;
    readonly codeExample: Locator;
    readonly docsLink: Locator; 

    constructor(page: Page) {
        this.page = page;
        this.nextImg = page.getByRole('img', { name: 'Next.js logo' });
        this.blogBody = page.getByRole('paragraph');
        this.codeExample = page.getByText('src/app/page.tsx');
        this.docsLink = page.getByRole('link', { name: 'Read our docs' })
    };
    
    async goto() {
        await this.page.goto('http://localhost:3000');
    };

    async verifyIndexImg(){
        await expect(this.nextImg).toBeVisible();
    }
   
    async verifyDocsLink(){
        await expect(this.docsLink).toBeVisible();
    }

    async verifyCodeExample(){
        await expect(this.codeExample).toBeVisible();
    }
    


};