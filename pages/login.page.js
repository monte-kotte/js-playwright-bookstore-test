import BasePage from './base.page.js';

export default class LoginPage extends BasePage {
    constructor(page) {
        super(page)
        this.page = page;
    }

    selectors = {
    }

    async login(username, password) {
        console.log(`Login as '${username}'`)
        await this.page.getByPlaceholder('Username').click();
        await this.page.getByPlaceholder('Username').fill(username);
        await this.page.getByText('Password').click();
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();
    }
}
