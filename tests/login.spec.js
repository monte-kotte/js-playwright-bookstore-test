import test from '../fixtures/test.fixtures.js';
import { expect } from '@playwright/test';

test.describe('Login Tests', () => {

    const username = process.env.USER_NAME;
    const password = process.env.USER_PASSWORD;

    test('User can log in with valid credentials', async ({ pm }) => {
        // Login existing user
        await pm.loginPage.navigate();
        await pm.loginPage.login(username, password);
        // Expect user was logged in
        const actualUser = await pm.homePage.getActualUsername();
        expect(actualUser).toContain(username);
    });

    test('Error messages appear when login with empty fields', async ({ pm }) => {
        // Login with empty username and password
        await pm.loginPage.navigate();
        await pm.loginPage.login('', '');
        // Expect error messages next to email and password fields
        const emailErrorMessage = await pm.loginPage.getEmailErrorMessage();
        expect(emailErrorMessage).toContain('Username is required');
        const passwordErrorMessage = await pm.loginPage.getPasswordErrorMessage();
        expect(passwordErrorMessage).toContain('Password is required');
    });

    test('Error message appears when login with invalid data', async ({ pm }) => {
        const expectedMessage = 'Username or Password is incorrect.';
        // Login with valid username but invalid password
        await pm.loginPage.navigate();
        await pm.loginPage.login(username, 'invalid_password');
        // Expect error message on login form
        let actualErrorMessage = await pm.loginPage.getLoginFormErrorMessage();
        expect(actualErrorMessage).toContain(expectedMessage);

        // Login with invalid username
        await pm.loginPage.pageRefresh();
        await pm.loginPage.login('invalid_username', password);
        // Expect error message on login form
        actualErrorMessage = await pm.loginPage.getLoginFormErrorMessage();
        expect(actualErrorMessage).toContain(expectedMessage);
    });

});
