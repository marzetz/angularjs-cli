import {CommandArgumentError} from "../errors/command-argument.error";
import {
    CAdditionalKeys, CDefaultOptions,
    ECommandCores,
    ICommandAdditionalArgument,
    ICommandAdditionalArguments
} from "./data-enums-interfaces.utility";

/**
 * Prepares all options for a command;
 *
 * @param core
 * @param override
 */
export function overrideDefaultOptionsUtility(core: ECommandCores, override: ICommandAdditionalArgument[]): ICommandAdditionalArguments {
    const
        result: ICommandAdditionalArguments = [],
        keys = CAdditionalKeys[core];

    keys.forEach((key: string) => {
        if (typeof CDefaultOptions[key] === 'undefined') throw new CommandArgumentError(`Option '${key}' hasn't any default value.`);
        const prepared = {
            key: key,
            value: CDefaultOptions[key]
        };
        override.forEach((item: ICommandAdditionalArgument) => {
            if (item.key === prepared.key) prepared.value = item.value;
        });

        result.push(prepared as ICommandAdditionalArgument);
    });

    return result;
}
