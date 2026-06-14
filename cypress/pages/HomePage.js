class HomePage {

    logo = "//img[contains(@alt,'HSBC')]";

    loginBtn = "//a[contains(@class,'login-button')]";

    validateLogo() {

        cy.xpath(this.logo, { timeout: 10000 })
          .should('be.visible');
    }

    closePopupIfPresent() {

    cy.get('body').then(($body) => {

        if ($body.find('button[aria-label="Continue to page"]').length > 0) {

            cy.log('Popup detected');

            cy.get('button[aria-label="Continue to page"]', { timeout: 15000 })
              .should('be.visible')
              .click({ force: true });

            cy.log('Popup closed');
        }
    });
}

    clickLogin() {

    cy.xpath(this.loginBtn, { timeout: 15000 })
      .first()
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    cy.wait(3000);

    cy.contains('Continue to log on with browser', { timeout: 15000 })
      .scrollIntoView()
      .should('exist')
      .click({ force: true });

    cy.wait(5000);
}
}

export default HomePage;