
import fs from 'fs';
import path from 'path';

const reportDir = path.join(process.cwd(), 'lighthouse-reports');
if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
}

async function getLighthouseDesktopConfig() {
    const { default: desktopConfig } = await import('lighthouse/core/config/desktop-config.js');
    return desktopConfig;
}

export async function runLighthouseAuditDesktop(page, thresholds) {
    const { playAudit } = await import('playwright-lighthouse');
    const desktopConfig = await getLighthouseDesktopConfig();

    try {
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
    } catch (error) {
        console.error('Error during Lighthouse audit:', error);
        throw error;
    }
}
