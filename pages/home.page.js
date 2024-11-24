import BasePage from './base.page.js';

export default class HomePage extends BasePage {
    constructor(page) {
        super(page)
        this.page = page;
    }

    selectors = {
        ...this.selectors,
        addToCardBtn: 'mat-card-content span.mdc-button__label'
    }

    async addFirstBookToCart() {
        await this.page.locator(this.selectors.addToCardBtn).first().click();
    }
}
