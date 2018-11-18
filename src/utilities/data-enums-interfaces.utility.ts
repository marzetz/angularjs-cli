// ENUMS
export enum ECommandAdditionalArguments {
    STYLE = 'style',
    SKIP_IMPORT = 'skip-import',
    DEPENDENCIES = 'dependencies'
}

export enum ECommandArguments {
    CORE = 'core',
    TYPE = 'type',
    NAME = 'name',
    ADDITIONAL = 'additional',
    CONFIG = 'config',
}

export enum ECommandCores {
    INFO = 'info',
    NEW = 'new',
    GENERATE = 'generate',
}

export enum ECommandTypes {
    COMPONENT = 'component',
    DIRECTIVE = 'directive',
    FILTER = 'filter',
    CONSTANT = 'constant',
    SERVICE = 'service',
    PROVIDER = 'provider',
    FACTORY = 'factory',
}

// CONSTANTS
export const CAdditionalKeys = {
    [ECommandCores.NEW]: [
        ECommandAdditionalArguments.STYLE,
        ECommandAdditionalArguments.DEPENDENCIES,
    ],
    [ECommandCores.GENERATE]: [
        ECommandAdditionalArguments.SKIP_IMPORT,
    ]
};

export const CAdditionalStyle = [
    'css',
    'scss',
    'less'
];

export const CDefaultOptions = {
    [ECommandAdditionalArguments.STYLE]: 'css',
    [ECommandAdditionalArguments.SKIP_IMPORT]: false,
    [ECommandAdditionalArguments.DEPENDENCIES]: false,
};

// INTERFACES
export interface ICommandAdditionalArgument {
    key: ECommandAdditionalArguments,
    value: string | boolean
}

export type ICommandAdditionalArguments = ICommandAdditionalArgument[];

export interface ICommandArguments {
    [ECommandArguments.CORE]: string;
    [ECommandArguments.TYPE]: string;
    [ECommandArguments.NAME]: ICommandNames;
    [ECommandArguments.ADDITIONAL]: ICommandAdditionalArguments;
    [ECommandArguments.CONFIG]?: ICommandConfig;
}

export interface ICommandConfig {
    appNames: {
        kebab: string;
        camel: string;
        snake: string;
        capitalized: string;
    };
    style: string;
}

export interface ICommandData {
    args: ICommandArguments,
    path: string,
    project: boolean,
    root: boolean,
    files: ICommandFile[],
    dependencies: boolean
}

export interface ICommandFile {
    directory: string;
    name: string;
    extension?: string;
    content?: string;
    params?: {replace: RegExp, value: string}[],
    import?: {path: string, value: string}
}

export interface ICommandNames {
    camel: string,
    kebap: string,
    snake: string,
    capitalized: string
}
