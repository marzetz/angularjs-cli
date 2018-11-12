export interface ICommandFile {
    directory: string;
    name: string;
    extension?: string;
    content?: string;
    params?: {replace: RegExp, value: string}[],
    import?: {path: string, value: string}
}
