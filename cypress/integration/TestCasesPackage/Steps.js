
import Constant from '../../fixtures/Constant';
import Locator from '../../fixtures/Locator';
import Utility from '../../fixtures/Utility';

const ObjUtill = new Utility();

class Steps {

    visit() {
        cy.visit(Constant.Url);
        return this;
    }

    clickOnSignIn() {
        cy.get(Locator.SignIn).click();
        return this;

    }

    createNewAccount() {
        //
        //ObjUtill.getfirstname()
        //ObjUtill.getLastName()
        cy.get(Locator.emailCreateAccount).type(ObjUtill.makeEmail());
        cy.wait(5000);
        //cy.get('#create-account_form > .form_content > .form-group > label').click();
        cy.get(Locator.SignUpForm).submit();
        // cy.get(Locator.genderRadio).click();
        // cy.get(Locator.firstName).type('Ahmed');    
        // cy.wait(1000);
        // cy.get(Locator.lastName).type('Ali');


        //    console.log(ObjUtill.makeEmail());
        //    console.log(ObjUtill.getRandomString());
        return this;

    }





    //sign in Text cases

    findAndInsertValueInEmailField() {

        cy.get(Locator.EmailTextField).type(Constant.EMAIL_ID);
        return this;
    }

    findAndInsertValueInPasswordField() {
        cy.get(Locator.PasswordTextField).type(Constant.PASSWORD);
        return this;

    }
    findSignedInButtonAndPress() {
        cy.get(Locator.SignInButton).click();
        return this;

    }

    goToSearchText() {
        cy.get('div.product-image-container').last().click();
        cy.get('.exclusive > span').click();
        cy.get(Locator.continue).click();
        cy.get(Locator.viewMyCart).click();

        cy.get(Locator.inStockText).invoke('text').should('eq', Constant.InStockText);
        cy.get(Locator.unitePrice).invoke('text').should('eq', Constant.UnitePrice);
        cy.get(Locator.checlout).click();
        cy.get(Locator.EmailTextField).type(Constant.EMAIL_ID);
        cy.get(Locator.PasswordTextField).type(Constant.PASSWORD);
        cy.get(Locator.SignInButton).click();
        cy.get(Locator.checlout).click();
        cy.get(Locator.checkField).click();
        cy.get(Locator.checlout).click();
        cy.get(Locator.BankLink).click();
        cy.get(Locator.Checkout).click();
        cy.get(Locator.OrderDetail).contains(Constant.TotalPrice);
















    }

    goTOLogo() {
        cy.get('.logo').click();
    }

    goToSearchField() {

        cy.get(Locator.SeachTextField).type(Constant.SEARCHTEXT);
        cy.get(Locator.SearchTextButton).click();
    }

    findProductName() {
        cy.get('.right-block > h5 > .product-name').invoke('text').should('eq', '\n\t\t\t\t\t\t\tBlouse\n\t\t\t\t\t\t');
    }






}
export default Steps;