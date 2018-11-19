export class CommandTypeError extends Error {
    constructor(message: string = "TypeError") {
        super(message);
        Object.setPrototypeOf(this, CommandTypeError.prototype);
    }
}
