import {
    CAdditionalKeys, CDefaultOptions,
    ECommandCores,
    ICommandAdditionalArguments
} from "./data-enums-interfaces.utility";

/**
 * Prepares all options for a command;
 *
 * @param core
 * @param override
 */
export function overrideDefaultOptionsUtility(core: ECommandCores, override: ICommandAdditionalArguments): ICommandAdditionalArguments {
    const
        result: ICommandAdditionalArguments = {},
        keys = CAdditionalKeys[core];

    keys.forEach((key: string) => {
        result[key] = CDefaultOptions[key];

        if (typeof override[key] !== 'undefined') {
            result[key] = override[key];
        }
    });

    return result;
}
