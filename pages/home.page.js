import BasePage from './base.page.js';

export default class HomePage extends BasePage {
    constructor(page) {
        super(page)
        this.page = page;
    }

    selectors = {
        ...this.selectors,
        addToCartBtn: 'mat-card-content span.mdc-button__label'
    }

    async navigate() {
        this.page.goto('/');
        super.waitPageLoad()
    }

    async addFirstBookToCart() {
        await this.page.locator(this.selectors.addToCartBtn)
            .first()
            .waitFor({ state: 'visible' });
        await this.page.locator(this.selectors.addToCartBtn).first().click();
        super.waitPageLoad()
    }
}
