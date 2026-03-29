import { createBdd } from 'playwright-bdd';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

const { When, Then } = createBdd();

When('I proceed to checkout', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.proceedToCheckout();
});

When('I fill in shipping info with {string} {string} and {string}', async (
    { page }, firstName: string, lastName: string, postalCode: string
) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillShippingInfo(firstName, lastName, postalCode);
});

When('I continue to the overview', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.continueTo();
});

Then('I should see {int} item in the checkout overview', async ({ page }, count: number) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.expectItemCount(count);
});

When('I finish the checkout', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.finish();
});

Then('I should see the order confirmation {string}', async ({ page }, message: string) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.expectOrderComplete(message);
});
