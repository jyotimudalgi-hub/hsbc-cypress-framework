# HSBC Web Automation Framework using Cypress

## Project Overview

This project automates multiple customer journeys on the HSBC India website using Cypress automation framework.

The framework follows Page Object Model (POM) design pattern to achieve better code reusability, maintainability, and scalability.

The following business flows are automated:

1. HSBC Login Flow
2. HSBC Branch & ATM Locator Flow
3. HSBC Credit Card Comparison Flow

---

# Technology Stack

| Technology       | Version           |
| ---------------- | ----------------- |
| Cypress          | 15.15.0           |
| Node.js          | 22.22.3           |
| npm              | 10.9.8            |
| JavaScript       | ES6               |
| Framework Design | Page Object Model |
| Browser          | Chrome            |

---

# Framework Architecture

```
HSBC-Cypress-Automation

│
├── cypress
│
│   ├── e2e
│   │
│   │   ├── hsbcLogin.cy.js
│   │   ├── hsbcATM.cy.js
│   │   └── hsbcCreditCard.cy.js
│   │
│   ├── pages
│   │
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── ATMPage.js
│   │   └── CreditCardPage.js
│   │
│   ├── fixtures
│   │
│   └── support
│
├── cypress.config.js
├── package.json
└── README.md

```

---

# Automated Test Scenarios

# 1. HSBC Login Automation

## Scenario:

Validate HSBC Login functionality.

## Covered Validations:

✔ Open HSBC India website

✔ Validate HSBC Bank Logo

✔ Validate Home Page Title

✔ Click Login button

✔ Validate Log On header

✔ Validate Continue button availability

✔ Validate Continue button disabled initially

✔ Enter username/email

✔ Validate Continue button enabled

✔ Validate Remember Me checkbox default state

✔ Validate question mark tooltip

✔ Open tooltip popup

✔ Validate username information header

✔ Validate popup close button

✔ Close popup successfully

Test File:

```
hsbcLogin.cy.js
```

Page Object:

```
LoginPage.js
```

---

# 2. HSBC Branch & ATM Locator Automation

## Scenario:

Validate ATM and Branch locator functionality.

## Covered Validations:

✔ Open HSBC India website

✔ Navigate to footer section

✔ Click Find your nearest branch or ATM

✔ Validate Branches & ATM page URL

✔ Validate Branches & ATM header

✔ Open Branch & ATM Locator

✔ Search country India

✔ Select India from dropdown

✔ Validate ATM location

✔ Validate Rajbhavan Road ATM

✔ Click Show more results

✔ Validate additional ATM results

✔ Validate social media links:

* Instagram
* Facebook
* Twitter
* YouTube

✔ Click HSBC Logo

✔ Validate navigation back to Home Page

✔ Validate Privacy link

✔ Validate Privacy Statement page

Test File:

```
hsbcATM.cy.js
```

Page Object:

```
ATMPage.js
```

---

# 3. HSBC Credit Card Comparison Automation

## Scenario:

Validate HSBC Credit Card comparison journey.

## Covered Validations:

✔ Open HSBC India website

✔ Navigate to Credit Cards

✔ Validate Credit Cards page header

✔ Click "Find the right card for you"

✔ Validate Select cards to compare popup

✔ Select three credit cards

✔ Validate Compare button

✔ Click Compare

✔ Validate comparison result page

✔ Validate:

* Find out more buttons
* Apply buttons

✔ Remove second selected card

✔ Validate remaining cards

✔ Click Add card

✔ Validate comparison popup

✔ Close popup successfully

Test File:

```
hsbcCreditCard.cy.js
```

Page Object:

```
CreditCardPage.js
```

---

# Test Coverage Summary

| Module          | Coverage                            |
| --------------- | ----------------------------------- |
| Home Page       | Logo and title validation           |
| Login           | Login popup and username validation |
| ATM Locator     | Branch search and navigation        |
| Social Media    | Footer link validation              |
| Privacy         | Privacy statement navigation        |
| Credit Cards    | Card comparison flow                |
| Popup Handling  | Open/close validations              |
| Page Navigation | URL and header validations          |

---

# Installation

## Prerequisites

Install:

* Node.js
* npm
* Cypress

Verify:

```
node -v

npm -v

npx cypress -v
```

---

# Install Dependencies

Clone repository:

```
git clone <repository-url>
```

Navigate:

```
cd HSBC-Cypress-Automation
```

Install packages:

```
npm install
```

---

# Execute Tests

## Cypress Runner

```
npx cypress open
```

Select:

```
E2E Testing
```

Execute required test:

```
hsbcLogin.cy.js

hsbcATM.cy.js

hsbcCreditCard.cy.js
```

---

## Headless Execution

Run all tests:

```
npx cypress run
```

---

# Reporting and Evidence

Test execution evidence can be stored:

```
cypress/screenshots

cypress/videos
```

---

# Framework Benefits

✔ Page Object Model implementation

✔ Reusable page methods

✔ Maintainable locators

✔ Business flow based automation

✔ Easy CI/CD integration

✔ Scalable Cypress architecture

---

# Future Enhancements

* Jenkins pipeline integration
* GitHub Actions integration
* HTML reporting
* Cross-browser execution
* Environment configuration
* Test data management
* API automation integration

---

# Author

QA Automation Engineer

Framework:
Cypress + JavaScript

Project:
HSBC India Web Application Automation Testing
