import BasePage from './base.page.js';

export default class MyOrdersPage extends BasePage {
    constructor(page) {
        super(page)
        this.page = page;
    }

    selectors = {
        ...this.selectors,
        nextbtn: 'button[aria-label="Previous page"]',
        lastOrderGrandTotal: 'table tr.example-element-row td.mat-column-orderTotal',
    }

    async getLastOrderGrandTotal() {
        while (await this.page.locator(this.selectors.nextbtn).isEnabled()) {
            await this.page.locator(this.selectors.nextbtn).click();
        }
        return await this.page.locator(this.selectors.lastOrderGrandTotal).first().textContent();
    }
}
