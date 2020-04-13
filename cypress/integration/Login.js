
import Steps from '../integration/TestCasesPackage/Steps'
import Locator from '../fixtures/Locator';


const StepsObj = new Steps();

describe('Test package for automation practice', function () {

    // it('Go to Automation practice class', () => {

    //     StepsObj.visit();

    // });

    // it('find search text field', function () {

    //     StepsObj.goToSearchField();
    // });

    // it('validate search product name', function () {

    //     StepsObj.findProductName();
    // });

    // it('Go to cart screen', function () {

    //     StepsObj.goToSearchText();

    // });



    it('Go to Automation practice class', () => {

        StepsObj.visit();

    });

    it('Click on sign in button', () => {

        StepsObj.clickOnSignIn();

    });

    it('Click on new Account button', () => {

        StepsObj.createNewAccount();

    });



});
