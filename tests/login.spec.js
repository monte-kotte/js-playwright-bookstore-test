import { test, expect } from '@playwright/test'
const username = process.env.USER_NAME;
const password = process.env.USER_PASSWORD;

test('Simple login test to start', async ({ page }) => {
    await page.goto('/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(username);
    await page.getByText('Password').click();
    await page.getByPlaceholder('Password').fill(password);
    await page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('mat-toolbar-row')).toContainText(username);
});