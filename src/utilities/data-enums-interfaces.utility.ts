// ENUMS
export enum ECommandAdditionalArguments {
    STYLE = 'style',
    SKIP_IMPORT = 'skip-import',
    DEPENDENCIES = 'dependencies'
}

export enum ECommandAdditionalArgumentsAlias {
    DEPENDENCIES = 'd',
    SKIP_IMPORT = 's'
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

export const CDefaultOptions = {
    [ECommandAdditionalArguments.STYLE]: 'css',
    [ECommandAdditionalArguments.SKIP_IMPORT]: false,
    [ECommandAdditionalArguments.DEPENDENCIES]: true,
};

export enum ECommandAdditionalArgumentsStyle {
    CSS = 'css',
    LESS = 'less',
    SCSS = 'scss'
}

// INTERFACES
export interface ICommandAdditionalArguments {
    [ECommandAdditionalArguments.STYLE]?: ECommandAdditionalArgumentsStyle,
    [ECommandAdditionalArguments.DEPENDENCIES]?: boolean | string,
    [ECommandAdditionalArguments.SKIP_IMPORT]?: boolean | string
}

export interface ICommandArguments {
    [ECommandArguments.CORE]: string;
    [ECommandArguments.TYPE]: string;
    [ECommandArguments.NAME]: ICommandNames;
    [ECommandArguments.ADDITIONAL]?: ICommandAdditionalArguments;
    [ECommandArguments.CONFIG]?: ICommandConfig;
}

export interface ICommandConfig {
    appNames: {
        kebab: string;
        camel: string;
        snake: string;
        capitalized: string;
    };
    style: ECommandAdditionalArgumentsStyle;
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
    params?: { replace: RegExp, value: string }[],
    import?: { path: string, value: string }
}

export interface ICommandNames {
    lowerCamel: string,
    upperCamel: string,
    kebap: string,
    snake: string,
    allCaps: string
}
