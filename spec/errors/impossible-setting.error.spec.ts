import {ImpossibleSettingsError} from "../../src/errors/impossible-setting.error";

const expect = require('chai').expect;

describe('ImpossibleSettingError', () => {
    it('should return an error with default message', () => {
        const error = new ImpossibleSettingsError();

        expect(error.message).to.be.equal('ImpossibleSettings');
    });
    it('should return an error with custom message', () => {
        const error = new ImpossibleSettingsError('CustomMessage');

        expect(error.message).to.be.equal('CustomMessage');
    });
});
