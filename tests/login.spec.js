import { test, expect } from '@playwright/test'
import PomManager from '../pages/manager/pom.manager'

const username = process.env.USER_NAME;
const password = process.env.USER_PASSWORD;


test('Simple login test to start', async ({ page }) => {
    let pm = new PomManager(page);

    await page.goto('/login');
    await pm.loginPage.login(username, password);
    await expect(page.locator('mat-toolbar-row')).toContainText(username);
});
