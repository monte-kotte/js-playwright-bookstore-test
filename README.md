# Playwright Project

This project uses [Playwright](https://playwright.dev/) for end-to-end testing.
The tests are written to interact with the demo bookstore website: [Test Demo Bookstore](https://bookcart.azurewebsites.net).

Follow the steps below to set up and run the tests.

## Prerequisites

Make sure you have the following installed on your machine:
- **Node.js**: 20.x
- **NPM** (comes with Node.js)

## Getting Started

Follow these steps to set up and run the project:

```bash
# Clone the repository and navigate to the project folder
git clone https://github.com/monte-kotte/js-playwright-bookstore-test
cd js-playwright-bookstore-test

# Install the necessary dependencies and Playwright browsers
npm install
npx playwright install

# Run tests
npx playwright test
