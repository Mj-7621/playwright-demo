import { type Page, type Locator, expect } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly title: Locator;
    readonly addToCartBackpack: Locator;
    readonly removeBackpack: Locator;
    readonly cartBadge: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.title');
        this.addToCartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.removeBackpack = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async addBackpackToCart() {
        await this.addToCartBackpack.click();
    }

    async removeBackpackFromCart() {
        await this.removeBackpack.click();
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
