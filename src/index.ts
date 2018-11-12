#!/usr/bin/env node

import {readArgumentsHandler} from "./handlers/read-arguments.handler";
import {readCommandDataHandler} from "./handlers/read-command-data.handler";
import {writeFilesAndDirectoriesHandler} from "./handlers/write-files-and-directories.handler";
import {ECommandCores} from "./enums/command-cores.enum";
import {callInfoCommandHandler} from "./handlers/call-info-command.handler";

async function run(): Promise<void> {
    const args = readArgumentsHandler();

    if (args.core === ECommandCores.INFO) {
        callInfoCommandHandler();
        return;
    }

    const commandData = await readCommandDataHandler(args);

    // @TODO: Override structures with passed options

    await writeFilesAndDirectoriesHandler(commandData);
}

run();
