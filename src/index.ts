#!/usr/bin/env node

import {readArgumentsHandler} from "./handlers/read-arguments.handler";
import {readCommandDataHandler} from "./handlers/read-command-data.handler";
import {writeFilesAndDirectoriesHandler} from "./handlers/write-files-and-directories.handler";
import {callInfoCommandHandler} from "./handlers/call-info-command.handler";
import {ECommandCores} from "./utilities/data-enums-interfaces.utility";
import chalk from "chalk";
import {Tools} from "./utilities/tools.utility";

async function run(): Promise<void> {
    const args = readArgumentsHandler();

    if (args.core === ECommandCores.INFO) {
        callInfoCommandHandler();
        return;
    }

    const commandData = await readCommandDataHandler(args);
    await writeFilesAndDirectoriesHandler(commandData);

    if (args.core === ECommandCores.NEW)
        await Tools.exec(`cd ${args.name.kebap}; yarn install;`);
}

(async () => {
    try {
        await run();
    } catch (e) {
        console.error(chalk.red(e));
    }
})();
