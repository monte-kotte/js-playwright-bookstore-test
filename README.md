# Playwright UI and Performance Test Project

This project uses [Playwright](https://playwright.dev/) to run automated UI and integrates with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) to run performance audits.

The tests are written to interact with the demo bookstore website: [Test Demo Bookcart](https://bookcart.azurewebsites.net).

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
```

## Setting up the Environment

Register your User in [Test Demo Bookcart (Registration Form)](https://bookcart.azurewebsites.net/register)

To securely store sensitive information like your username and password, create a `.env` file in the root of the project. This file will be used to load environment variables into your test code.

### Steps:

1. **Create a `.env` file** in the root directory of the project (next to `package.json`).
2. **Add your environment variables** in the `.env` file. Here's an example:

    ```plaintext
    USER_NAME=yourusername
    USER_PASSWORD=yourpassword
    ```

3. **Save the `.env` file**. It will be automatically loaded by the `dotenv` package.

## GitHub Actions Workflows

GitHub Actions workflows are used for testing in this repository.

### 1. Playwright UI Regression Tests

The **UI Regression Tests** workflow is triggered automatically with every **push** and **pull request** to the `main` branch. It ensures that recent changes don't introduce regressions or break existing functionality in the UI of the application.

- **Trigger**: On every pull request and push to the `main` branch.
- **Purpose**: Automatically runs regression tests to verify that the UI remains consistent after code changes.
- **Viewing Results**: Results are displayed in the **Actions** tab of the repository.

#### Example:

To trigger this workflow, create a pull request or push changes to the `main` branch. The tests will run automatically, and the results can be checked in the **GitHub Actions** tab.

### 2. Lighthouse Performance Tests

The **Lighthouse Performance Tests** workflow runs manually using the **workflow_dispatch** event. This allows the tests to be executed on demand to evaluate performance metrics of your web application.

- **Trigger**: Manually triggered from the GitHub UI or via API using `workflow_dispatch`.
- **Purpose**: Runs Lighthouse performance audits to assess metrics like page speed, accessibility, SEO, and best practices.
- **Viewing Results**: After the test completes, the Lighthouse reports can be downloaded as artifacts from the GitHub Actions.

#### Example:

To run the Lighthouse tests manually, navigate to the **Actions** tab on GitHub, select **Lighthouse Performance Tests**, and click **Run Workflow**.

## Run Tests Locally

You can run tests locally using Playwright's command-line interface (CLI).

### Run all tests:

```bash
# Run all tests
npm run test

# Run only regression ui tests
npm run test:regression

# Run only performance-related tests (lighthouse)
npm run test:performance
