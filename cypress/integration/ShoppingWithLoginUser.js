///<refrence types="Cypress"/>

import Steps from './TestCasesPackage/Steps'

const stepObj = new Steps();

describe('Test cases for Login', function () {

    it('Go to Automation practice site', () => {
        stepObj.visit();
    });

    it('Sign in and doing shopping', () => {
        stepObj.ShoopingWithLoginUser();
    });

});
