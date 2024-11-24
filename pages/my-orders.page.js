import BasePage from './base.page.js';

export default class MyOrdersPage extends BasePage {
    constructor(page) {
        super(page)
        this.page = page;
    }

    selectors = {
        ...this.selectors,
        previousBtn: 'button[aria-label="Previous page"]',
        addedOrderGrandTotal: 'table tr.example-element-row td.mat-column-orderTotal',
    }

    async navigate() {
        this.page.goto('/myorders');
        super.waitPageLoad()
    }

    async getAddedOrderGrandTotal() {
        while (await this.page.locator(this.selectors.previousBtn).isEnabled()) {
            await this.page.locator(this.selectors.previousBtn).click();
        }
        return await this.page.locator(this.selectors.addedOrderGrandTotal).first().textContent();
    }
}
