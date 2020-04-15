
///<refrence types="Cypress"/>
import Steps from '../integration/TestCasesPackage/Steps'

const stepObj = new Steps();

describe('Test package for automation practice', function () {

    it('Go to Automation practice class', () => {
        stepObj.visit();
        stepObj.ShoopingWithGuestUser();

    });
});