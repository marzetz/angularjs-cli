import {logger} from "../../src/utilities/logger.utility";
import {expect} from 'chai';

describe('logger utility', () => {
    it('should prove that cloned console is equal to native console', () => {
        expect(logger).to.be.deep.equal(console);
    });
});
