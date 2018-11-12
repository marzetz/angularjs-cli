import {ICommandAdditionalArgument, ICommandArguments} from "../interfaces/command-arguments.interface";
import {ICommandData} from "../interfaces/command-data.interface";
import {ECommandCores} from "../enums/command-cores.enum";
import {ICommandFile} from "../interfaces/command-file.interface";
import {Tools} from "../utilities/tools.utility";
import {ECommandAdditionalArguments} from "../enums/command-arguments.enum";
import {ProjectExistsError} from "../errors/project-exists.error";
import {prepareFilesDataUtility} from "../utilities/prepare-files-data.utility";

export async function readCommandDataHandler(args: ICommandArguments): Promise<ICommandData> {
    const
        pathAndProject = await getPathAndProject(args),
        root = await getRoot();

    return {
        args: args,
        path: pathAndProject.path,
        project: pathAndProject.project,
        root: root,
        files: await getFiles(args, pathAndProject.path, root, pathAndProject.project),
        dependencies: getDependencies(args)
    };
}

async function getPathAndProject(args: ICommandArguments): Promise<{ path: string, project: boolean }> {

    const
        parts = process.cwd().split('/'),
        partsLength = parts.length - 1;

    let exists = false,
        _path = process.cwd();

    for (let i = 0; i < partsLength; i++) {
        if (await Tools.exists(Tools.path.resolve(`${_path}/.angularjs-cli.json`))) {
            exists = true;
            break;
        }
        _path = Tools.path.resolve(_path, '..');
    }

    if (args.core === ECommandCores.NEW && exists)
        throw new ProjectExistsError(`Already inside a project directory, try to create new project somewhere else.`);

    if (exists) return {path: _path, project: exists};

    return {path: process.cwd(), project: exists};
}

async function getRoot(): Promise<boolean> {
    return !!await Tools.exists(Tools.path.resolve(`${process.cwd()}/.angularjs-cli.json`));
}

async function getFiles(args: ICommandArguments, path: string, root: boolean, project: boolean): Promise<ICommandFile[]> {
    return await prepareFilesDataUtility(args, path, root, project);
}

function getDependencies(args: ICommandArguments): boolean {
    let dependencies = false;
    if (typeof args.additional === "undefined") return dependencies;

    args.additional
        .forEach((option: ICommandAdditionalArgument) => {
            if (option.key === ECommandAdditionalArguments.DEPENDENCIES) dependencies = !!option.value;
        });
    return dependencies;
}
