export default class BasePage {
    constructor(page) {
        this.page = page;
    }

    selectors = {
        // menu items
        userName: '[aria-haspopup="menu"] span.mdc-button__label',
        openShoppingCartBtn: 'button mat-icon:has-text("shopping_cart")',
    }

    async waitPageLoad() {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async pageRefresh() {
        await this.page.reload()
    }

    async getActualUsername() {
        return await this.page.textContent(this.selectors.userName);
    }

    async openShoppingCart() {
        await this.page.locator(this.selectors.openShoppingCartBtn).first().click();
        await this.waitPageLoad();
    }

    /**
   * Fill form base of JSON data
   * @param {Object} fields - Objects with selectors and values
   */
    async fillForm(fields) {
        for (const [selector, value] of Object.entries(fields)) {
            const element = await this.page.locator(selector);
            const tagName = await element.evaluate(el => el.tagName);

            if (tagName === 'INPUT') {
                const type = await element.getAttribute('type');
                this.handleDifferentTypesInputs(element, type, value)
            } else if (tagName === 'TEXTAREA') {
                await this.page.fill(selector, value);
            } else if (tagName === 'SELECT') {
                await this.page.selectOption(selector, value);
            } else {
                console.warn(`Unsupported tag "${tagName}" for selector "${selector}"`);
            }
        }
    }

    async handleDifferentTypesInputs(element, type, value) {
        switch (type) {
            case 'checkbox': {
                const isChecked = await element.isChecked();
                if ((value && !isChecked) || (!value && isChecked)) await element.click();
                break;
            }
            case 'radio':
                await element.check();
                break;
            case 'file':
                await element.setInputFiles(value);
                break;
            default:
                await element.fill(value);
        }
    }
}
