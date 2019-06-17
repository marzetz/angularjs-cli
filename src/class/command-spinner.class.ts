import ora = require("ora");

class CommandSpinner {
    private spinner: any;

    constructor() {
        this.restart();
    }

    public restart() {
        this.spinner = undefined;
        this.spinner = ora();
    }

    public start(text: string) {
        this.spinner = ora(text).start();
    }

    public setText(text: string) {
        this.spinner.text = text;
    }

    public setSucceed(text: string) {
        this.spinner.succeed(text);
    }

    public setFail(text: string) {
        this.spinner.fail(text);
    }

    public getSpinner() {
        return this.spinner;
    }
}

export const spinner = new CommandSpinner();
