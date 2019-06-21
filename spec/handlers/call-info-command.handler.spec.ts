import {callInfoCommandHandler} from "../../src/handlers/call-info-command.handler";
import {logger} from "../../src/utilities/logger.utility";
import * as sinon from 'sinon';

const expect = require('chai').expect;

describe('callInfoCommandHandler', () => {
    let spy: any;
    beforeEach(() => {
        spy = sinon.stub(logger, 'log').callsFake(() => {});
    });

    afterEach(function() {
        spy.resetBehavior();
    });

    it('should call a logger five times', async () => {
        await callInfoCommandHandler();
        const counter = spy.callCount;
        expect(counter).to.be.equal(5);
    });
});
