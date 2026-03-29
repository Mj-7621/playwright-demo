import { createBdd } from 'playwright-bdd';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

const { When, Then } = createBdd();

When('I add {string} to the cart', async ({ page }, product: string) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addProductToCart(product);
});

When('I remove {string} from the cart', async ({ page }, product: string) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.removeProductFromCart(product);
});

Then('the cart badge should show {string}', async ({ page }, count: string) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.expectCartBadgeCount(count);
});

Then('the cart badge should not be visible', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.expectCartBadgeNotVisible();
});

When('I go to the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.goToCart();
});

Then('I should see {int} item in the cart', async ({ page }, count: number) => {
    const cartPage = new CartPage(page);
    await cartPage.expectItemCount(count);
});
