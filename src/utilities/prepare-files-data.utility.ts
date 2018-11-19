import {
    ECommandCores,
    ICommandArguments,
    ICommandFile
} from "./data-enums-interfaces.utility";
import {CommandFilesNewClass} from "../class/command-files-new.class";
import {CommandFilesGenerateClass} from "../class/command-files-generate.class";
import {CommandReadError} from "../errors/command-read.error";

export async function prepareFilesDataUtility(args: ICommandArguments, path: string, root: boolean, project: boolean): Promise<ICommandFile[]> {
    let files: CommandFilesNewClass | CommandFilesGenerateClass;
    switch (args.core) {
        case ECommandCores.NEW:
            files = new CommandFilesNewClass(args, path);
            break;
        case ECommandCores.GENERATE:
            files = new CommandFilesGenerateClass(args, path, root, project);
            break;
        default:
            throw new CommandReadError("Current command core does not have files to generate.");
    }
    return await files.init();
}
