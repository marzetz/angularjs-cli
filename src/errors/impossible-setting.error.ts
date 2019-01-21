export class ImpossibleSettingsError extends Error {
    constructor(message: string = "ImpossibleSettings") {
        super(message);
        Object.setPrototypeOf(this, ImpossibleSettingsError.prototype);
    }
}
