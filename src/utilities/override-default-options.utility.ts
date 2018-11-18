import {CommandArgumentError} from "../errors/command-argument.error";
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
        if (typeof CDefaultOptions[key] === 'undefined') throw new CommandArgumentError(`Option '${key}' hasn't any default value.`);
        result[key] = CDefaultOptions[key];

        if (override[key]) {
            result[key] = override[key];
        }
    });

    return result;
}
