import HomePage from "../pages/HomePage";
import AtmPage from "../pages/atmPage";

const homePage = new HomePage();
const atmPage = new AtmPage();

describe('HSBC ATM Search Scenario', () => {

    before(function () {

        cy.fixture('example').then((data) => {

            this.data = data;
        });

        cy.visit('/');
    });

    it('Validate HSBC ATM Search Functionality', function () {

        // Validate HSBC Logo
        homePage.validateLogo();

        // Scroll to Footer
        cy.scrollTo('bottom');

        // Click Find Branch Link
        atmPage.clickNearestBranchLink();

        // Validate URL
        atmPage.validateBranchPageUrl();

        cy.url().then((url) => {
            cy.log(url);
        });

        // Validate Header
        atmPage.validateBranchHeader();

        // Click Branch Locator
        atmPage.clickBranchLocatorButton();

        atmPage.testMethod();

        // Validate Search Field
        atmPage.validateSearchFieldPresent();

        // Search Location
        atmPage.searchLocation(this.data.country);

        // Validate Social Media Icons
        cy.scrollTo('bottom');

        atmPage.validateSocialMediaIcons();

        // Click HSBC Logo
        atmPage.clickHSBCLogo();

        // Validate Home Page
        atmPage.validateHomePageTitle();

        // Scroll Bottom
        cy.scrollTo('bottom');

        // Click Privacy
        atmPage.clickPrivacyLink();

        // Validate Privacy Page
        atmPage.validatePrivacyHeader();
    });
});
