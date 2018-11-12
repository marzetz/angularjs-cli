export class CommandReadError extends Error {
    constructor(message: string = "ReadError") {
        super(message);
        Object.setPrototypeOf(this, CommandReadError.prototype);
    }
}
