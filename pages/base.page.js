export default class BasePage {
    constructor(page) {
        this.page = page;
    }

    selectors = {
    }

    async pageRefresh() {
        await this.page.reload()
    }
}
