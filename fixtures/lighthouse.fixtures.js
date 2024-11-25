import { test as base, chromium } from '@playwright/test';

const test = base.extend({
    browser: async ({ }, use) => {
        const browser = await chromium.launch({
            args: ['--remote-debugging-port=9222'],
        });
        await use(browser);
        await browser.close();
    },

    context: async ({ browser }, use) => {
        const context = await browser.newContext();
        await use(context);
        await context.close();
    },

    page: async ({ context }, use) => {
        const page = await context.newPage();
        await use(page);
        await page.close();
    },
});

export default test;
