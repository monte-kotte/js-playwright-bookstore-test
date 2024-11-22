# Playwright Project

This project uses [Playwright](https://playwright.dev/) for end-to-end testing.
The tests are written to interact with the demo bookstore website: [Test Demo Bookcart](https://bookcart.azurewebsites.net).

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

## Run tests
```bash
npx playwright test
```

## Show test run report
```bash
npx playwright show-report
```
