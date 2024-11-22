// @ts-check
const { defineConfig } = require('@playwright/test');

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

module.exports = defineConfig({
  testDir: './tests',
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: process.env.CI ? 'list' : 'html',
  use: {
    baseURL: 'https://bookcart.azurewebsites.net',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry'
      },
    },
  ],
});
