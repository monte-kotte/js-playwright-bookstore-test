
import BasePage from './base.page.js';

export default class HomePage extends BasePage {
    constructor(page) {
        super(page)
        this.page = page;
    }

    selectors = {
        userName: '[aria-haspopup="menu"] span.mdc-button__label',
    }

    async getActualUsername() {
        return this.page.textContent(this.selectors.userName);
    }
}
