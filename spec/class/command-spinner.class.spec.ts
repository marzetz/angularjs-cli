import * as sinon from 'sinon';
import {spinner} from "../../src/class/command-spinner.class";
const expect = require('chai').expect;

describe('CommandSpinnerClass', () => {
    let startSpy: sinon.SinonSpy;
    let succeedSpy: sinon.SinonSpy;
    let failSpy: sinon.SinonSpy;
    let stub: sinon.SinonStub;

    before(() => {
        const toStub = {
            start: (text: string) => text,
            succeed: (text: string) => text,
            text: '',
            fail: (text: string) => text,
        };
        startSpy = sinon.spy(toStub, 'start');
        succeedSpy = sinon.spy(toStub, 'succeed');
        failSpy = sinon.spy(toStub, 'fail');
        stub = sinon.stub(spinner, 'getSpinner').callsFake(() => toStub);
    });

    after(() => {
        stub.resetBehavior();
    });

    it('should start spinner', () => {
        spinner.start('testStart');
        expect(startSpy.calledWith('testStart')).to.equal(true);
    });

    it('should set spinner\'s text', () => {
        spinner.setText('testSetText');
        expect(spinner.getSpinner().text).to.equal('testSetText');
    });

    it('should set spinner-succeed status', () => {
        spinner.setSucceed('testSucceed');
        expect(succeedSpy.calledWith('testSucceed')).to.equal(true);
    });

    it('should set spinner-fail status', () => {
        spinner.setFail('testFail');
        expect(failSpy.calledWith('testFail')).to.equal(true);
    });

    it('should return ora instance (sinon stub in this case)', () => {
        expect(spinner.getSpinner()).to.be.an('object');
    });
});
