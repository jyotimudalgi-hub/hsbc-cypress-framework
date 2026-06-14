class LoginPage {

    logonHeader = "//h1";

    continueBtn = "//button[@type='submit']";

    usernameField = "//input[@id='username']";

    rememberMeCheckbox = "//input[@type='checkbox']";

    tooltipIcon = "//a[contains(@class,'help')]";

    usernameHeaderPopup = "//h2[contains(.,'Username')]";

    closePopupBtn = "//button[contains(@class,'close')]";

    validateLogonHeader() {

        cy.url({ timeout: 30000 })
          .should('include', '/security/');

        cy.xpath(this.logonHeader, { timeout: 30000 })
          .should('be.visible');

        cy.log('Login page opened successfully');
    }

    validateContinueButtonAvailable() {

        cy.xpath(this.continueBtn)
          .should('be.visible');

        cy.log('Continue button available');
    }

    validateContinueDisabled() {

        cy.xpath(this.continueBtn)
          .should('be.disabled');

        cy.log('Continue button disabled');
    }

    enterUsername(username) {

        cy.xpath(this.usernameField)
          .should('be.visible')
          .type(username);

        cy.log('Username entered');
    }

    validateContinueEnabled() {

        cy.xpath(this.continueBtn)
          .should('be.enabled');

        cy.log('Continue button enabled');
    }

    validateRememberMeUnchecked() {

        cy.xpath(this.rememberMeCheckbox)
          .should('not.be.checked');

        cy.log('Remember Me checkbox unchecked');
    }

    validateTooltipPresent() {

        cy.xpath(this.tooltipIcon)
          .should('be.visible');

        cy.log('Tooltip present');
    }

    clickTooltip() {

        cy.xpath(this.tooltipIcon)
          .click({ force: true });

        cy.log('Tooltip clicked');
    }

    validateUsernameHeaderPopup() {

        cy.xpath(this.usernameHeaderPopup)
          .should('be.visible');

        cy.log('Username popup header validated');
    }

    validateCloseButtonPresent() {

        cy.xpath(this.closePopupBtn)
          .should('be.visible');

        cy.log('Close button present');
    }

    clickClosePopup() {

        cy.xpath(this.closePopupBtn)
          .click({ force: true });

        cy.log('Popup closed');
    }
}

export default LoginPage;