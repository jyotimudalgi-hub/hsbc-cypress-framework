import HomePage from "../pages/HomePage";
import CreditCardPage from "../pages/CreditCardPage";


const homePage = new HomePage();
const creditCardPage = new CreditCardPage();


describe('HSBC Credit Card Compare Flow',()=>{


before(function(){

    cy.fixture('example')
    .then((data)=>{

        this.data=data;

    });


    cy.visit('/');

});



it('Validate Credit Card Compare Functionality',function(){


    /// Step 1
creditCardPage.openCreditCards();


// Step 2
creditCardPage.validateCreditCardHeader();


// Step 3
creditCardPage.clickFindRightCardForYou();


// Step 4
creditCardPage.validateComparePopup();


// Step 5
// Select 3 cards in popup
creditCardPage.selectThreeCards();


// Step 6
// Compare button should appear
creditCardPage.validateCompareButton();


// Step 7
// Click Compare
creditCardPage.clickCompareButton();


// Step 8
// Validate comparison result page
creditCardPage.validateSelectedCardsPage();


// Step 9
// Validate Find out more buttons
creditCardPage.validateFindOutMoreButton();


// Step 10
// Validate Apply buttons
creditCardPage.validateApplyButton();


// Step 11
// Remove second card
creditCardPage.removeSecondCard();


// Step 12
// Click Add card
creditCardPage.clickAddCard();


// Step 13
// Close popup
creditCardPage.closePopup();



});

});