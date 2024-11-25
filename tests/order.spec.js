import test from '../fixtures/test.fixtures.js';
import { expect } from '@playwright/test';

test.describe('Books order test', () => {

    const username = process.env.USER_NAME;
    const password = process.env.USER_PASSWORD;

    test.beforeEach('Login before each test', async ({ pm }) => {
        // Login with existing user
        await pm.loginPage.navigate();
        await pm.loginPage.login(username, password);
        // Wait until the network is idle and DOMContent loaded
        await pm.loginPage.waitPageLoad();
    })

    const checkoutFormFields = {
        '[formcontrolname="name"]': 'TEST name',
        '[formcontrolname="addressLine1"]': 'Hoboken 123',
        '[formcontrolname="addressLine2"]': '07030 USA',
        '[formcontrolname="pincode"]': '123456',
        '[formcontrolname="state"]': 'New Jersey',
    };

    test('User can place a book order', async ({ pm }) => {
        // Place an order with one book
        await pm.homePage.addFirstBookToCart();
        await pm.homePage.openShoppingCart();
        await pm.shoppingCart.goToCheckout();
        await pm.checkoutPage.fillForm(checkoutFormFields);
        const grandTotalFromCheckout = await pm.checkoutPage.getGrandTotal();
        await pm.checkoutPage.placeOrder();
        // Expect newly added order amount is equal to the amount in checkout
        const lastOrderTotal = await pm.myOrdersPage.getAddedOrderGrandTotal()
        expect(lastOrderTotal).toContain(grandTotalFromCheckout);
    });

});
