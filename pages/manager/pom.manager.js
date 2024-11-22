import BasePage from '../base.page.js'
import LoginPage from '../login.page.js'

export default class PomManager {
    constructor(page) {
        this.page = page;
        this.basePage = new BasePage(page);
        this.loginPage = new LoginPage(page);
    }
}
