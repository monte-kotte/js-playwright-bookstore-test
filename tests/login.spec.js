import test from '../fixtures/test.fixtures.js';
import { expect } from '@playwright/test';

test.describe('Login Tests', () => {

    const username = process.env.USER_NAME;
    const password = process.env.USER_PASSWORD;

    test('User can log in with valid credentials', async ({ page, pm }) => {
        // Login existing user
        await page.goto('/login');
        await pm.loginPage.login(username, password);
        // Expect user was logged in
        const actualUser = await pm.homePage.getActualUsername();
        expect(actualUser).toContain(username);
    });

    test('Error messages appeare when login with empty fields', async ({ page, pm }) => {
        // Login with empty username and password
        await page.goto('/login');
        await pm.loginPage.login('', '');
        // Expect error messages next to email and password fields
        const emailErrorMessage = await pm.loginPage.getEmailErrorMessage();
        expect(emailErrorMessage).toContain('Username is required');
        const passwordErrorMessage = await pm.loginPage.getPasswordErrorMessage();
        expect(passwordErrorMessage).toContain('Password is required');
    });

});
