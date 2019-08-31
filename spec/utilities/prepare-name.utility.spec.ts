import {prepareNameUtility} from "../../src/utilities/prepare-name.utility";
import {ICommandNames} from "../../src/utilities/data-enums-interfaces.utility";
import {expect} from "chai";

describe('prepareNameUtility', () => {
    const testName = 'testTest$test*123';
    const result: ICommandNames = {
        lowerCamel: "testTestTest123",
        upperCamel: "TestTestTest123",
        snake: "test_test_test_123",
        kebap: "test-test-test-123",
        allCaps: "TEST_TEST_TEST_123"
    };

    it('should return a wide range of names for different purposes', () => {
        const preparedNames = prepareNameUtility(testName);
        expect(preparedNames).to.be.deep.equal(result);
    });
});
