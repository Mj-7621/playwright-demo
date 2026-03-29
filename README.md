# Playwright BDD Test Automation - POC

A **Proof of Concept** for BDD (Behavior-Driven Development) test automation using [Playwright](https://playwright.dev/) and [Cucumber](https://cucumber.io/) via [playwright-bdd](https://github.com/nicolo-ribaudo/playwright-bdd).

Tests run against the [SauceDemo](https://www.saucedemo.com/) e-commerce demo site.

## Tech Stack

| Tool | Purpose |
|------|---------|
| **Playwright** | Browser automation & test runner |
| **playwright-bdd** | Cucumber/Gherkin integration for Playwright |
| **TypeScript** | Type-safe test code |
| **GitHub Actions** | CI/CD pipeline |

## Project Structure

```
playwright-demo/
├── tests/
│   ├── features/              # Gherkin feature files (BDD scenarios)
│   │   ├── authentication.feature
│   │   ├── shopping-cart.feature
│   │   ├── checkout.feature
│   │   └── failure-demo.feature
│   ├── pages/                 # Page Object Model classes
│   │   ├── LoginPage.ts
│   │   ├── InventoryPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   └── steps/                 # Cucumber step definitions
│       ├── authSteps.ts
│       ├── cartSteps.ts
│       └── checkoutSteps.ts
├── playwright.config.ts       # Playwright & BDD configuration
├── .github/workflows/
│   └── playwright.yml         # CI pipeline
└── package.json
```

## Key Patterns

- **Page Object Model (POM)** - Each page of the app has a corresponding class that encapsulates its locators and actions
- **BDD with Gherkin** - Test scenarios are written in plain English using Given/When/Then syntax
- **Dynamic product handling** - Product interactions use data-test attributes derived from product names, making it easy to extend to new products
- **CI-aware configuration** - Headed mode with slow-motion locally for debugging; headless and fast on CI

## Test Scenarios

| Feature | Scenarios |
|---------|-----------|
| **Authentication** | Valid login, Invalid login with error message |
| **Shopping Cart** | Add product to cart, Remove product from cart |
| **Checkout** | End-to-end purchase flow with order confirmation |
| **Failure Demo** | Intentional failure to demonstrate screenshot capture |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

### Installation

```bash
npm install
npx playwright install --with-deps
```

### Running Tests

```bash
# Run all tests (headed mode with slow-motion)
npm test

# Run tests in interactive UI mode
npm run test:ui

# Run a specific feature
npx bddgen && npx playwright test --grep "Authentication"

# Run on a specific browser
npx bddgen && npx playwright test --project=chromium
```

### Viewing Reports

After a test run, the HTML report is generated automatically:

```bash
npx playwright show-report
```

## CI/CD

Tests run automatically via GitHub Actions on every push and pull request. The workflow:

1. Installs dependencies and Playwright browsers
2. Runs the full test suite (headless, multi-browser)
3. Uploads the HTML report as a build artifact (retained for 30 days)

## Cross-Browser Testing

Tests run on two browser engines:

- **Chromium** (Chrome)
- **WebKit** (Safari)

## License

ISC
