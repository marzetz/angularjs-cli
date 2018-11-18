#!/usr/bin/env node

import {readArgumentsHandler} from "./handlers/read-arguments.handler";
import {readCommandDataHandler} from "./handlers/read-command-data.handler";
import {writeFilesAndDirectoriesHandler} from "./handlers/write-files-and-directories.handler";
import {callInfoCommandHandler} from "./handlers/call-info-command.handler";
import {ECommandCores} from "./utilities/data-enums-interfaces.utility";
import chalk from "chalk";

async function run(): Promise<void> {
    const args = readArgumentsHandler();

    if (args.core === ECommandCores.INFO) {
        callInfoCommandHandler();
        return;
    }

    const commandData = await readCommandDataHandler(args);
    await writeFilesAndDirectoriesHandler(commandData);
}

(async () => {
    try {
        await run();
    } catch (e) {
        console.error(chalk.red(e));
    }
})();
