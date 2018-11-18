import {splitArgumentsUtility} from "../utilities/split-arguments.utility";
import {CommandArgumentError} from "../errors/command-argument.error";
import {prepareNameUtility} from "../utilities/prepare-name.utility";
import {overrideDefaultOptionsUtility} from "../utilities/override-default-options.utility";
import {
    CAdditionalKeys, ECommandAdditionalArguments,
    ECommandArguments,
    ECommandCores,
    ECommandTypes, ICommandAdditionalArguments,
    ICommandArguments, ICommandNames
} from "../utilities/data-enums-interfaces.utility";

/**
 * Returns prepared command arguments;
 */
export function readArgumentsHandler(): ICommandArguments {
    const args: string[] = process.argv;

    args.splice(0, 2);

    const splitted: {main: string[], additional: string[]} = splitArgumentsUtility(args);

    const
        core = getCore(splitted.main),
        type = getType(splitted.main, core),
        name = getName(splitted.main, core),
        additional = getAdditional(splitted.additional, core);

    return {
        [ECommandArguments.CORE]: core,
        [ECommandArguments.TYPE]: type ? type : '',
        [ECommandArguments.NAME]: name ? name : {camel: '', kebap: '', snake: '', capitalized: ''},
        [ECommandArguments.ADDITIONAL]: additional ? additional : undefined
    };
}

/**
 * Returns the first part of a command;
 *
 * @param mainArgs
 */
function getCore(mainArgs: string[]): ECommandCores {
    switch (mainArgs[0]) {
        case ECommandCores.NEW:
            return ECommandCores.NEW;
        case ECommandCores.GENERATE:
            return ECommandCores.GENERATE;
        case ECommandCores.GENERATE[0]:
            return ECommandCores.GENERATE;
        default:
            return ECommandCores.INFO;
    }
}

/**
 * Returns the second part of a command;
 *
 * @param mainArgs
 * @param core
 */
function getType(mainArgs: string[], core: ECommandCores): ECommandTypes | undefined {
    if (core === ECommandCores.NEW || core === ECommandCores.INFO) return undefined;

    switch (mainArgs[1]) {
        case ECommandTypes.COMPONENT:
            return ECommandTypes.COMPONENT;
        case ECommandTypes.DIRECTIVE:
            return ECommandTypes.DIRECTIVE;
        case ECommandTypes.CONSTANT:
            return ECommandTypes.CONSTANT;
        case ECommandTypes.FILTER:
            return ECommandTypes.FILTER;
        case ECommandTypes.SERVICE:
            return ECommandTypes.SERVICE;
        case ECommandTypes.FACTORY:
            return ECommandTypes.FACTORY;
        case ECommandTypes.PROVIDER:
            return ECommandTypes.PROVIDER;
        default:
            throw new CommandArgumentError(`Please provide type of structure to generate.`);
    }
}

/**
 * Returns the name of a structure;
 *
 * @param mainArgs
 * @param core
 */
function getName(mainArgs: string[], core: ECommandCores): ICommandNames | undefined {
    if (core === ECommandCores.INFO) return undefined;
    if (core === ECommandCores.NEW) {
        if (!mainArgs[1]) throw new CommandArgumentError(`Please provide name of structure to generate.`);

        return prepareNameUtility(mainArgs[1]);
    }

    if (!mainArgs[2]) throw new CommandArgumentError(`Please provide name of structure to generate.`);

    return prepareNameUtility(mainArgs[2]);
}

/**
 * Splits additional arguments and returns prepared data;
 *
 * @param additionalArgs
 * @param core
 */
function getAdditional(additionalArgs: string[], core: ECommandCores): ICommandAdditionalArguments | undefined {
    if (core === ECommandCores.INFO) return undefined;
    let result: ICommandAdditionalArguments = {};
    additionalArgs.forEach((item: string) => {
        if (item.indexOf('--') === 0) {
            item = item.replace('--', '');
        }
        if (item.indexOf('-') === 0) {
            item = item.replace('-', '');
        }

        const splitted = item.split('=');

        /**
         * Check if specific option is available for currently triggered command;
         */
        if (CAdditionalKeys[core]) {
            if (CAdditionalKeys[core].indexOf(splitted[0] as ECommandAdditionalArguments) === -1) {
                throw new CommandArgumentError(`Option '${splitted[0]}' is not allowed in '${core}' command.`);
            }
        }

        result[splitted[0]] = splitted[1] ? splitted[1] : true;
    });

    result = overrideDefaultOptionsUtility(core, result);

    return result;
}
