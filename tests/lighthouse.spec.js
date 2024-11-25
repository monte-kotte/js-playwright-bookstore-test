import test from '../fixtures/lighthouse.fixtures.js';
import { thresholds } from '../lighthouse/data/thresholdData.js';
import { URLs } from '../lighthouse/data/urls.json';
import { runLighthouseAuditDesktop } from '../lighthouse/lighthouse-audit';

URLs.forEach(url => {
    test(`Ligthouse performance chrome desktop test for ${url}`, async ({ page }) => {
        await page.goto(url);
        await runLighthouseAuditDesktop(page, thresholds);
    })
});
