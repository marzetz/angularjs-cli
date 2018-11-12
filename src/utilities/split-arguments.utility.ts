export function splitArgumentsUtility(args: string[]): {main: string[], additional: string[]} {
    const
        additionalArgs: string[] = [],
        mainArgs: string[] = [];

    for (let i = 0; i < args.length; i++) {
        if (args[i].indexOf('-') === 0) {
            additionalArgs.push(args[i]);
            continue;
        }
        mainArgs.push(args[i]);
    }

    return {main: mainArgs, additional: additionalArgs};
}
