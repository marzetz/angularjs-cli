import {ICommandFile} from "./command-file.interface";
import {ICommandArguments} from "./command-arguments.interface";

export interface ICommandData {
    args: ICommandArguments,
    path: string,
    project: boolean,
    root: boolean,
    files: ICommandFile[],
    dependencies: boolean
}
