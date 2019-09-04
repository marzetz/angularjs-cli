#!/usr/bin/env node

import {readArgumentsHandler} from "./handlers/read-arguments.handler";
import {readCommandDataHandler} from "./handlers/read-command-data.handler";
import {writeFilesAndDirectoriesHandler} from "./handlers/write-files-and-directories.handler";
import {callInfoCommandHandler} from "./handlers/call-info-command.handler";
import {ECommandCores} from "./utilities/data-enums-interfaces.utility";
import chalk from "chalk";
import {Tools} from "./utilities/tools.utility";
import {spinner} from "./class/command-spinner.class";
import {logger} from "./utilities/logger.utility";

async function run(): Promise<void> {
    const args = readArgumentsHandler();

    if (args.core === ECommandCores.INFO) {
        await callInfoCommandHandler();
        return;
    }

    spinner.start('Reading command...');
    const commandData = await readCommandDataHandler(args);

    spinner.setText('Writing files and directories...');
    await writeFilesAndDirectoriesHandler(commandData);

    if (args.core === ECommandCores.NEW && commandData.dependencies) {
        spinner.setText('Installing dependencies...');
        await Tools.exec(`cd ${args.name.kebap}; npm install;`);
    }
}

(async () => {
    try {
        await run();
        spinner.setSucceed('Success!');
    } catch (e) {
        spinner.setFail('Failure!');
        logger.error(chalk.red(e));
    }
    process.exit();
})();
