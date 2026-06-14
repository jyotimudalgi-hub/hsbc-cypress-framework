class CreditCardPage {


    // ================= LOCATORS =================


    creditCardsLink = "//a[@href='/credit-cards/']//span[contains(normalize-space(),'Credit cards')]";


    creditCardHeader = "//h1[contains(normalize-space(),'Credit cards')]";


    findRightCardButton =
        "//a[contains(normalize-space(),'Find the right card for you')]";


    comparePopupHeader =
        "//h2[contains(normalize-space(),'Select cards to compare')]";


    comparePopupCloseBtn =
    "//button[contains(@class,'close-button')]";


    cardCheckbox =
        "//div[@role='checkbox']";


    compareButton =
        "//button[contains(normalize-space(),'Compare')]";


    findOutMoreButton =
    "//a[contains(@data-event-name,'Find out more')]";


    applyButton =
    "//a[contains(@data-event-name,'Apply now | secondary')]";


    addCardLink =
    "//span[@aria-hidden='true' and normalize-space()='Add card']/parent::*";


    removeLinks =
    "//span[@aria-hidden='true' and normalize-space()='Remove card']/parent::*";




    // ================= METHODS =================



    openCreditCards(){

    cy.xpath(this.creditCardsLink,
    {timeout:20000})
    .first()
    .should('be.visible')
    .click({force:true});

    cy.wait(3000);

}



    validateCreditCardHeader(){


        cy.xpath(this.creditCardHeader,
        {timeout:20000})
        .should('be.visible');

    }




    clickFindRightCardForYou(){

    cy.xpath(this.findRightCardButton,
    {timeout:20000})
    .first()
    .should('be.visible')
    .click({force:true});

}





    validateComparePopup(){


        cy.xpath(this.comparePopupHeader,
        {timeout:20000})
        .should('be.visible');


    }




    selectThreeCards(){


        cy.xpath(this.cardCheckbox,
        {timeout:20000})
        .eq(0)
        .click({force:true});



        cy.xpath(this.cardCheckbox)
        .eq(1)
        .click({force:true});



        cy.xpath(this.cardCheckbox)
        .eq(2)
        .click({force:true});


    }





    validateCompareButton(){

    cy.xpath(this.compareButton,
    {timeout:20000})
    .first()
    .should('be.visible');

}





    clickCompareButton(){


        cy.xpath(this.compareButton,
        {timeout:20000})
        .click({force:true});


        cy.wait(5000);

    }

    validateSelectedCardsPage(){

    cy.contains('Visa Platinum Credit Card',
    {timeout:20000})
    .should('be.visible');

    cy.wait(3000);

    }



    validateFindOutMoreButton(){

    cy.xpath(this.findOutMoreButton)
      .first()
      .scrollIntoView()
      .should('be.visible')
      .then(()=>{

          cy.log("Find out more button validated");

      });

}




    validateApplyButton(){

    cy.xpath(this.applyButton)
      .first()
      .scrollIntoView()
      .should('be.visible')
      .then(()=>{

          cy.log("Apply button validated");

      });

}


    removeSecondCard(){

    cy.xpath(this.removeLinks,
    {timeout:20000})
    .eq(1)
    .should('be.visible')
    .click({force:true});

    cy.wait(3000);

}



    clickAddCard(){

    cy.xpath(this.addCardLink,
    {timeout:20000})
    .first()
    .should('be.visible')
    .click({force:true});

    cy.wait(3000);

}





    closePopup(){

    cy.xpath(this.comparePopupCloseBtn,
    {timeout:20000})
    .filter(':visible')
    .first()
    .should('be.visible')
    .click({force:true});

}


}


export default CreditCardPage;