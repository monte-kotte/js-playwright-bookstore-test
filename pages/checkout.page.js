import BasePage from './base.page.js';

export default class CheckoutPage extends BasePage {
    constructor(page) {
        super(page)
        this.page = page;
    }

    selectors = {
        ...this.selectors,
        grandTotal: 'mat-card-title:has-text("Order Summary") ~ table tfoot th:last-child',
        placeOrderBtn: 'button:has-text("Place Order")',
    }

    async getGrandTotal() {
        return await this.page.textContent(this.selectors.grandTotal);
    }

    async placeOrder() {
        await this.page.locator(this.selectors.placeOrderBtn).click();
        await super.waitPageLoad();
    }
}
