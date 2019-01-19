export function splitArgumentsUtility(args: string[]): {main: string[], additional: string[]} {
    const
        additionalArgs: string[] = [],
        mainArgs: string[] = [];

    let additionalZone = false;
    for (let i = 0; i < args.length; i++) {
        if (additionalZone) {
            additionalArgs.push(args[i]);
            continue;
        }
        if (args[i].indexOf('-') === 0) {
            if (!additionalZone) additionalZone = true;
            additionalArgs.push(args[i]);
            continue;
        }
        mainArgs.push(args[i]);
    }

    return {main: mainArgs, additional: additionalArgs};
}
