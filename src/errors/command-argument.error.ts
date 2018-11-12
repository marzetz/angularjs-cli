export class CommandArgumentError extends Error {
    constructor(message: string = "ArgumentError") {
        super(message);
        Object.setPrototypeOf(this, CommandArgumentError.prototype);
    }
}
