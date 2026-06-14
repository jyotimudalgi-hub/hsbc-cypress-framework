import HomePage from "../pages/HomePage";

const homePage = new HomePage();

describe('HSBC Login Scenario', () => {

    before(function () {

        cy.fixture('example').then(function (data) {

            this.data = data;
        });

        cy.visit('/');
    });

    it('Validate HSBC Login Functionality', function () {

        // Home Page Validations
        homePage.validateLogo();

        cy.title().should('contain', 'HSBC');

        // Login Navigation
        homePage.clickLogin();

        // Cross Origin Handling
        cy.origin('https://www.hsbc.co.in', () => {

    cy.url({ timeout: 30000 })
      .should('include', '/security/');

    cy.log('Successfully navigated to HSBC security page');
});
    });
});