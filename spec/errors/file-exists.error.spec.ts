import {FileExistsError} from "../../src/errors/file-exists.error";

const expect = require('chai').expect;

describe('FileExistsError', () => {
    it('should return an error with default message', () => {
        const error = new FileExistsError();

        expect(error.message).to.be.equal('FileExists');
    });
    it('should return an error with custom message', () => {
        const error = new FileExistsError('CustomMessage');

        expect(error.message).to.be.equal('CustomMessage');
    });
});
