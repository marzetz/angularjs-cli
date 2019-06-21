import ora = require("ora");

class CommandSpinner {
    readonly spinner: any;

    constructor() {
        this.spinner = ora();
    }

    public start(text: string) {
        this.getSpinner().start(text);
    }

    public setText(text: string) {
        this.getSpinner().text = text;
    }

    public setSucceed(text: string) {
        this.getSpinner().succeed(text);
    }

    public setFail(text: string) {
        this.getSpinner().fail(text);
    }

    public getSpinner() {
        return this.spinner;
    }
}

export const spinner = new CommandSpinner();
