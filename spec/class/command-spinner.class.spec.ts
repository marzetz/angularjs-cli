import {spinner} from "../../src/class/command-spinner.class";

const expect = require('chai').expect;
const ora = require('ora');

let currentSpinner: any = null;
afterEach(() => {
    spinner.restart();
    currentSpinner = spinner;
});

describe('CommandSpinnerClass', () => {

    it('should initialize spinner', () => {
        expect(currentSpinner.getSpinner()).to.deep.equal(ora());
    });
});
