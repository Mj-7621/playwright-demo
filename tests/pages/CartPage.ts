import { type Page, type Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartItems: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async expectItemCount(count: number) {
        await expect(this.cartItems).toHaveCount(count);
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
        await expect(this.page).toHaveURL(/checkout-step-one\.html/);
    }
}
