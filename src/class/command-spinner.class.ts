import ora = require("ora");

class CommandSpinner {
    private spinner: any;

    constructor() {
        if (!this.spinner)
            this.spinner = ora().start();
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
}

export const spinner = new CommandSpinner();
