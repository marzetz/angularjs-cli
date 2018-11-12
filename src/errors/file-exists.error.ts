export class FileExistsError extends Error {
    constructor(message: string = "FileExists") {
        super(message);
        Object.setPrototypeOf(this, FileExistsError.prototype);
    }
}
