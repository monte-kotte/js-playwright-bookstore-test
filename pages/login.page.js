
import BasePage from './base.page.js';

export default class LoginPage extends BasePage {
    constructor(page) {
        super(page)
        this.page = page;
    }

    selectors = {
        usernameInput: '[formcontrolname="username"]',
        passwordInput: '[formcontrolname="password"]',
        loginBtn: 'button[mat-raised-button] span:has-text("Login")',
        usernameErrorMsg: '#mat-mdc-error-0',
        passwordErrorMsg: '#mat-mdc-error-1',
        loginFormErrorMsg: 'mat-card-subtitle mat-error',
    }

    async login(username, password) {
        console.log(`Login as '${username}'`)
        await this.page.fill(this.selectors.usernameInput, username);
        await this.page.fill(this.selectors.passwordInput, password);
        await this.page.click(this.selectors.loginBtn);
    }

    async getEmailErrorMessage() {
        return await this.page.textContent(this.selectors.usernameErrorMsg);
    }

    async getPasswordErrorMessage() {
        return await this.page.textContent(this.selectors.passwordErrorMsg);
    }

    async getLoginFormErrorMessage() {
        return await this.page.textContent(this.selectors.loginFormErrorMsg);
    }
}
