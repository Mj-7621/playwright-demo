import { type Page, type Locator, expect } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly title: Locator;
    readonly cartBadge: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.title');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    private toDataTestId(productName: string): string {
        return productName.toLowerCase().replace(/ /g, '-');
    }

    async addProductToCart(productName: string) {
        const testId = this.toDataTestId(productName);
        await this.page.locator(`[data-test="add-to-cart-${testId}"]`).click();
    }

    async removeProductFromCart(productName: string) {
        const testId = this.toDataTestId(productName);
        await this.page.locator(`[data-test="remove-${testId}"]`).click();
    }

    async goToCart() {
        await this.cartLink.click();
        await expect(this.page).toHaveURL(/cart\.html/);
    }

    async expectCartBadgeCount(count: string) {
        await expect(this.cartBadge).toHaveText(count);
    }

    async expectCartBadgeNotVisible() {
        await expect(this.cartBadge).not.toBeVisible();
    }

    async expectPageTitle(text: string) {
        await expect(this.title).toHaveText(text);
    }
}
