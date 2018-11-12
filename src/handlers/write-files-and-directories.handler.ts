import {ICommandData} from "../interfaces/command-data.interface";
import {ICommandFile} from "../interfaces/command-file.interface";
import {Tools} from "../utilities/tools.utility";
import {FileExistsError} from "../errors/file-exists.error";

export async function writeFilesAndDirectoriesHandler(data: ICommandData): Promise<void> {
    const filesLength = data.files.length;

    for (let i = 0; i < filesLength; i++) {
        await saveFile(data.files[i]);
    }
}

async function saveFile(file: ICommandFile): Promise<void> {
    await createDirectory(file);
    await createFile(file);
    await appendImports(file);
}

async function createDirectory(file: ICommandFile): Promise<void> {
    const splitted = file.directory.split('/');
    const pathLength = splitted.length;
    let toCheck = '';

    for (let i = 0; i < pathLength; i++) {
        if (!splitted[i].length) continue;
        toCheck += `/${splitted[i]}`;

        const exists = await Tools.exists(toCheck);

        if (!exists) await Tools.mkdir(toCheck);
    }
}

async function createFile(file: ICommandFile): Promise<void> {
    let preparedContent = file.content;
    if (file.params) preparedContent = prepareContent(file.content, file.params);

    let directory = Tools.path.resolve(`${file.directory}/${file.name}`);
    if (file.extension) directory += `.${file.extension}`;

    if (await Tools.exists(directory)) throw new FileExistsError(`File '${directory}' already exists.`);

    await Tools.writeFile(directory, preparedContent);
}

function prepareContent(content: string | undefined, params: { replace: RegExp, value: string }[]): string {
    const paramsLength = params.length;
    let preparedContent: string = content ? content : '';
    for (let i = 0; i < paramsLength; i++) {
        preparedContent = preparedContent.replace(params[i].replace, params[i].value);
    }

    return preparedContent;
}

async function appendImports(file: ICommandFile): Promise<void> {
    if (file.import) await Tools.appendFile(file.import.path, file.import.value);
}
