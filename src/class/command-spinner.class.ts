import ora = require("ora");

export enum SpinnerColor {
    BLACK = 'black',
    RED = 'red',
    GREEN = 'green',
    YELLOW = 'yellow',
    BLUE = 'blue',
    MAGENTA = 'magenta',
    CYAN = 'cyan',
    WHITE = 'white',
    GRAY = 'gray',
}

class CommandSpinner {
    private spinner: any;

    constructor() {
    }

    public start(text: string) {
        this.spinner = ora(text).start();
    }

    public setText(text: string) {
        this.spinner.text = text;
    }

    public setSucceed(text: string) {
        this.spinner.succeed(text);
        this.spinner = undefined;
    }

    public setFail(text: string) {
        this.spinner.fail(text);
        this.spinner = undefined;
    }
}

export const spinner = new CommandSpinner();
