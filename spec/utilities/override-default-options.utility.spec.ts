import {overrideDefaultOptionsUtility} from "../../src/utilities/override-default-options.utility";
import {
    ECommandAdditionalArguments,
    ECommandAdditionalArgumentsStyle,
    ECommandCores,
    ICommandAdditionalArguments
} from "../../src/utilities/data-enums-interfaces.utility";
import {expect} from "chai";

describe('overrideDefaultOptionsUtility', () => {
    it('should override all default values (new command)', () => {
        const newCommandAdditionalArguments: ICommandAdditionalArguments = {
            [ECommandAdditionalArguments.STYLE]: ECommandAdditionalArgumentsStyle.SCSS,
            [ECommandAdditionalArguments.DEPENDENCIES]: false
        };
        const overwrittenOptions = overrideDefaultOptionsUtility(ECommandCores.NEW, newCommandAdditionalArguments);

        expect(overwrittenOptions).to.be.equal(newCommandAdditionalArguments);
    });

    it('should override all default values (generate command)', () => {
        const generateCommandAdditionalArguments: ICommandAdditionalArguments = {
            [ECommandAdditionalArguments.STYLE]: ECommandAdditionalArgumentsStyle.SCSS,
            [ECommandAdditionalArguments.SKIP_IMPORT]: false
        };
        const overwrittenOptions = overrideDefaultOptionsUtility(ECommandCores.GENERATE, generateCommandAdditionalArguments);

        expect(overwrittenOptions).to.be.equal(generateCommandAdditionalArguments);
    });
});
