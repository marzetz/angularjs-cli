import {CommandReadError} from "../../src/errors/command-read.error";

const expect = require('chai').expect;

describe('CommandReadError', () => {
    it('should return an error with default message', () => {
        const error = new CommandReadError();

        expect(error.message).to.be.equal('ReadError');
    });
    it('should return an error with custom message', () => {
        const error = new CommandReadError('CustomMessage');

        expect(error.message).to.be.equal('CustomMessage');
    });
});
