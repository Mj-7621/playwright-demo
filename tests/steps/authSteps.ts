import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
});

When('I login with {string} and {string}', async ({ page }, username: string, password: string) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(username, password);
});

Given('I login as a standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginAsStandardUser();
});

Then('I should be redirected to the inventory page', async ({ page }) => {
    await expect(page).toHaveURL(/inventory\.html/);
});

Then('I should see the page title {string}', async ({ page }, title: string) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.expectPageTitle(title);
});

Then('I should see the error message {string}', async ({ page }, message: string) => {
    const loginPage = new LoginPage(page);
    await loginPage.expectErrorMessage(message);
});
