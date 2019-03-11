import {ProjectExistsError} from "../../src/errors/project-exists.error";

const expect = require('chai').expect;

describe('ProjectExistsError', () => {
    it('should return an error with default message', () => {
        const error = new ProjectExistsError();

        expect(error.message).to.be.equal('ProjectExists');
    });
    it('should return an error with custom message', () => {
        const error = new ProjectExistsError('CustomMessage');

        expect(error.message).to.be.equal('CustomMessage');
    });
});
