import {ECommandAdditionalArguments, ECommandArguments} from "../enums/command-arguments.enum";
import {ICommandNames} from "./command-names.interface";
import {ICommandConfig} from "./command-config.interface";

export interface ICommandAdditionalArgument {
    key: ECommandAdditionalArguments,
    value: string | boolean
}

export type ICommandAdditionalArguments = ICommandAdditionalArgument[];

export interface ICommandArguments {
    [ECommandArguments.CORE]: string;
    [ECommandArguments.TYPE]: string;
    [ECommandArguments.NAME]: ICommandNames;
    [ECommandArguments.ADDITIONAL]: ICommandAdditionalArguments;
    [ECommandArguments.CONFIG]?: ICommandConfig;
}
