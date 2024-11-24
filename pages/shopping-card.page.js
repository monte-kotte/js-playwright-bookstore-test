import BasePage from './base.page.js';

export default class ShoppingCardPage extends BasePage {
    constructor(page) {
        super(page)
        this.page = page;
    }

    selectors = {
        ...this.selectors,
        checkOutBtn: 'button:has-text("CheckOut")'
    }

    async navigate() {
        this.page.goto('/shopping-cart');
        super.waitPageLoad()
    }

    async goToCheckout() {
        await this.page.locator(this.selectors.checkOutBtn).click();
        super.waitPageLoad()
    }
}
