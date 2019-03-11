import {CommandArgumentError} from "../../src/errors/command-argument.error";

const expect = require('chai').expect;

describe('CommandArgumentError', () => {
    it('should return an error with default message', () => {
        const error = new CommandArgumentError();

        expect(error.message).to.be.equal('ArgumentError');
    });
    it('should return an error with custom message', () => {
        const error = new CommandArgumentError('CustomMessage');

        expect(error.message).to.be.equal('CustomMessage');
    });
});
