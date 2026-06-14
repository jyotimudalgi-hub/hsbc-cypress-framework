1. Project Overview

Example:

# HSBC Cypress Automation Framework

## Overview

This project automates HSBC India web application test scenarios using Cypress.

The framework follows Page Object Model (POM) design pattern and validates key banking workflows.
2. Application Under Test
Application:
https://www.hsbc.co.in/
3. Technology Stack
## Technology Stack

- Cypress 15.15.0
- JavaScript
- Node.js 22.22.3
- npm 10.9.8
- VS Code
- GitHub
4. Automated Test Scenarios
## Automated Test Coverage

### 1. HSBC Login Flow

Validations:
- HSBC Logo
- Home page title
- Login navigation
- Log On header
- Continue button disabled/enabled behaviour
- Username validation
- Remember me checkbox
- Tooltip validation
- Popup validation


### 2. HSBC ATM Search Flow

Validations:
- Branch and ATM navigation
- URL validation
- ATM locator search
- Branch details
- Show more results
- Social media links
- Privacy statement


### 3. HSBC Credit Card Compare Flow

Validations:
- Navigate to Credit Cards
- Open card comparison popup
- Select multiple cards
- Compare cards
- Validate selected cards
- Remove cards
- Add card functionality
- Popup close validation
5. Framework Structure
## Framework Structure

cypress
|
├── e2e
|   ├── hsbcLogin.cy.js
|   ├── hsbcATM.cy.js
|   └── hsbcCreditCard.cy.js
|
├── pages
|   ├── HomePage.js
|   ├── LoginPage.js
|   ├── atmPage.js
|   └── CreditCardPage.js
|
├── fixtures
|
└── support
6. Execution Commands
## Execution

Install dependencies:

npm install


Open Cypress:

npx cypress open


Run headless:

npx cypress run