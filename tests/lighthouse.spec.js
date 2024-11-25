import { test, chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { thresholds } from '../lighthouse/data/thresholdData.js'; // Normal ES module import
import { URLs } from '../lighthouse/data/urls.json';

// Function to dynamically import Lighthouse configuration
async function getLighthouseDesktopConfig() {
    const { default: desktopConfig } = await import('lighthouse/core/config/lr-desktop-config.js');
    return desktopConfig;
}

const reportDir = path.join(process.cwd(), 'lighthouse-reports');

// Check and create the directory if it doesn't exist
if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
}

URLs.forEach(url => {
    test(`Ligthouse performance test for ${url}`, async () => {

        const browser = await chromium.launch({
            args: ['--remote-debugging-port=9222'],
            headless: true
        });
        const page = await browser.newPage();
        await page.goto(url);

        const { playAudit } = await import('playwright-lighthouse'); // Dynamically import playwright-lighthouse
        const desktopConfig = await getLighthouseDesktopConfig(); // Dynamically load desktop config

        // Run the Lighthouse audit
        await playAudit({
            page: page,
            config: desktopConfig,
            thresholds: thresholds,
            port: 9222,
            opts: {
                loglevel: "info",
            },
            reports: {
                formats: { html: true },
                name: `lighthouse-${new Date().getTime()}`,
                directory: reportDir,
            },
        });

        await page.close();
        await browser.close();
    })
});
