class atmPage {

    nearestBranchLink = "//a[@href='/ways-to-bank/branches/']";

    branchHeader = "//h1[contains(text(),'Branches & ATM')]";

    branchLocatorBtn = "(//span[contains(text(),'Branch & ATM Locator')])[1]";

    searchInput = "//input[@id='searchInput']";

    hsbcLogo = "(//img[contains(@alt,'HSBC')])[1]";

    privacyLink = "//a[contains(text(),'Privacy')]";

    privacyHeader = "//h1[contains(text(),'Privacy')]";

    instagramIcon = "//a[contains(@href,'instagram')]";

    facebookIcon = "//a[contains(@href,'facebook')]";

    twitterIcon = "//a[contains(@href,'twitter')]";

    youtubeIcon = "//a[contains(@href,'youtube')]";

    clickNearestBranchLink() {

        cy.xpath(this.nearestBranchLink, { timeout: 15000 })
            .first()
            .scrollIntoView()
            .click({ force: true });
    }

    validateBranchPageUrl() {

        cy.url({ timeout: 15000 })
            .should('include', '/ways-to-bank/branches/');
    }

    validateBranchHeader() {

        cy.xpath(this.branchHeader, { timeout: 15000 })
            .should('be.visible');
    }

    clickBranchLocatorButton() {

        cy.xpath(this.branchLocatorBtn, { timeout: 15000 })
            .first()
            .scrollIntoView()
            .click({ force: true });

        cy.log('Branch & ATM Locator clicked');
    }

    testMethod() {
    cy.log('ATM PAGE METHOD CALLED');
}

    validateSearchFieldPresent() {

    cy.get('#searchInput', { timeout: 15000 })
      .should('be.visible');

    cy.log('Search field is visible');
}

    searchLocation(location) {

    cy.get('#searchInput', { timeout: 15000 })
      .should('exist');

    cy.wait(1000);

    cy.get('#searchInput')
      .type(location, {
          force: true,
          delay: 150
      });

    cy.wait(2000);

    cy.log('Location entered');
}

    

    validateSocialMediaIcons() {

        cy.xpath(this.instagramIcon).should('exist');

        cy.xpath(this.facebookIcon).should('exist');

        cy.xpath(this.twitterIcon).should('exist');

        cy.xpath(this.youtubeIcon).should('exist');
    }

    clickHSBCLogo() {

        cy.xpath(this.hsbcLogo)
            .first()
            .click({ force: true });
    }

    validateHomePageTitle() {

        cy.title()
            .should('contain', 'HSBC');
    }

    clickPrivacyLink() {

        cy.xpath(this.privacyLink)
            .first()
            .scrollIntoView()
            .click({ force: true });
    }

    validatePrivacyHeader() {

        cy.xpath(this.privacyHeader, { timeout: 15000 })
            .should('be.visible');
    }
}

export default atmPage;