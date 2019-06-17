import {CommandTypeError} from "../../src/errors/command-type.error";

const expect = require('chai').expect;

describe('CommandTypeError', () => {
    it('should return an error with default message', () => {
        const error = new CommandTypeError();

        expect(error.message).to.be.equal('TypeError');
    });
    it('should return an error with custom message', () => {
        const error = new CommandTypeError('CustomMessage');

        expect(error.message).to.be.equal('CustomMessage');
    });
});
