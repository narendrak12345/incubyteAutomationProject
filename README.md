# Incubyte Parabank Automation Assessment

## Project Overview

This project automates the Parabank user registration and login flow using **Playwright**, **TypeScript**, **Cucumber (BDD)**, and the **Page Object Model (POM)** design pattern.

The automation performs the following actions:

* Launches the Parabank application
* Registers a new user with randomly generated test data
* Verifies successful registration
* Logs out
* Logs in with the newly created user
* Navigates to the Accounts Overview page
* Reads and prints the account balance in the console

---

## Tech Stack

* Playwright
* TypeScript
* Cucumber (BDD)
* Page Object Model (POM)
* Faker.js (Random Test Data)
* Node.js


## Prerequisites

* Node.js (v20 or later)
* npm

---

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Run the Tests

Execute the BDD tests:

```bash
npm run bdd
```

---

## Framework Highlights

* BDD implementation using Cucumber
* Page Object Model for maintainability
* Random test data generation using Faker
* Type-safe models using TypeScript interfaces
* Modular and reusable page classes
* Console logging of account balance after successful login

---

## Test Scenario

1. Launch the application.
2. Navigate to the registration page.
3. Register a new user with random data.
4. Verify successful registration.
5. Log out.
6. Log in with the registered credentials.
7. Verify the Accounts Overview page.
8. Print the displayed account balance.

---

## Assignment Deliverables

* Automation implemented using Playwright and TypeScript
* BDD using Cucumber
* Page Object Model design pattern
* Randomized test data
* Excel test cases
* Proof of execution (screenshot/screen recording)
