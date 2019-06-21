import figlet = require("figlet");
import chalk from "chalk";
import {Tools} from "../utilities/tools.utility";

export async function callInfoCommandHandler() {
    const packageJson = await Tools.readFile(Tools.path.resolve(`${__dirname}/../../package.json`), 'utf-8'),
        decoded = JSON.parse(packageJson);

    console.log(
        chalk.red(
            figlet.textSync('AngularJS CLI')
        )
    );
    console.log(
        chalk.yellow(
            `AngularJS CLI: ${decoded.version}`
        ), '\n'
    );

    console.log('Available commands: \n');

    console.log(
        chalk.blue('new'),
        `- generates new project; \n` +
        `usage: go to the directory where you want to initiate new project, type ${chalk.green('ajs new YourProjectName')} and hit enter;\n` +
        `options: \n` +
        `   * ${chalk.green('--style scss/less/css')} - defines your style extension, default: css;\n` +
        `   * ${chalk.green('--dependencies true/false')} - defines if AngularJS CLI should install dependencies for your new project, default: true;\n`
    );

    console.log(
        chalk.blue('generate'),
        'alias',
        chalk.blue('g'),
        `- generates files schema in your AngularJS project; \n` +
        `usage: go to your project\'s root directory (or any directory you want), type ${chalk.green('ajs generate schema-type YourSchemaName')} and hit enter;\n` +
        `schema-type: you can generate component, directive, filter, constant, service, factory or provider;\n` +
        `options: \n` +
        `   * ${chalk.green('--style scss/less/css')} - defines your schema\'s style extension, if you are inside your project created with AngularJS CLI you can\'t create schema with different style extension than defined while creating new project;\n` +
        `   * ${chalk.green('--skip-import')} - if this flag has been added to your command your new schema won\'t be imported to the main file (and not compiled by webpack), this flag works only if schema was generated inside project created with AngularJS CLI;\n`
    );
}
