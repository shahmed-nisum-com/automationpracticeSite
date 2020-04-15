///<refrence types="Cypress"/>

import Steps from '../integration/TestCasesPackage/Steps'
import Constant from '../fixtures/Constant';



const stepObj = new Steps();

describe('Test cases for Login', function () {

    beforeEach(() => {

        stepObj.visit();

    });

    it('Provide valid credentials and check account and LogOut links', () => {

        stepObj.loginProcess(Constant.EMAIL_ID,Constant.PASSWORD);
        stepObj.findAccountLink();
        stepObj.findLogOutLink();

    });

    it('Provide invalid credentials and check account and LogOut links', () => {

        stepObj.loginProcess(Constant.WRONG_EMAIL_ID,Constant.WRONG_PASSWORD);
        stepObj.findErrorMessage();

    });

});
