export class ProjectExistsError extends Error {
    constructor(message: string = "ProjectExists") {
        super(message);
        Object.setPrototypeOf(this, ProjectExistsError.prototype);
    }
}
