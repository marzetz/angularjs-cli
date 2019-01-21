import {
    ECommandAdditionalArgumentsStyle,
    ECommandCores,
    ECommandTypes
} from "../../src/utilities/data-enums-interfaces.utility";
import {CommandTypeError} from "../../src/errors/command-type.error";

export function generateArguments() {
    const core = [ECommandCores.GENERATE];
    const type = [
        ECommandTypes.COMPONENT,
        ECommandTypes.DIRECTIVE,
        ECommandTypes.FILTER,
        ECommandTypes.CONSTANT,
        ECommandTypes.PROVIDER,
        ECommandTypes.FACTORY,
        'invalidType'
    ];
    const name = [{
        camel: 'Test',
        snake: 'test',
        kebap: 'test',
        capitalized: 'TEST'
    }];
    const path = ['/test'];
    const root = [false, true];
    const project = [false, true];
    const config = [undefined,
        {
            appNames:
                {
                    kebap: 'test-app',
                    camel: 'TestApp',
                    snake: 'test_app',
                    capitalized: 'TEST_APP'
                },
            style: ECommandAdditionalArgumentsStyle.SCSS
        }];
    const additional = [{
        'style': ECommandAdditionalArgumentsStyle.CSS,
        'skip-import': false
    }, {
        'style': ECommandAdditionalArgumentsStyle.SCSS,
        'skip-import': false
    }, {
        'style': ECommandAdditionalArgumentsStyle.LESS,
        'skip-import': false
    }, {
        'style': ECommandAdditionalArgumentsStyle.CSS,
        'skip-import': true
    }, {
        'style': ECommandAdditionalArgumentsStyle.SCSS,
        'skip-import': true
    }, {
        'style': ECommandAdditionalArgumentsStyle.LESS,
        'skip-import': true
    },];

    let arrayOfPermutations = permutations(core, type, name, path, root, project, config, additional);

    arrayOfPermutations = arrayOfPermutations.map(permutation => {
        return (new ArgumentsMockup(permutation)).getValue();
    });

    return arrayOfPermutations;
}

export function generateResult(argument:
                                   {
                                       core: ECommandCores,
                                       type: ECommandTypes,
                                       name: { camel: string, snake: string, kebap: string, capitalized: string },
                                       path: string,
                                       root: boolean,
                                       project: boolean,
                                       config?: {
                                           appNames: { camel: string, snake: string, kebap: string, capitalized: string },
                                           style: ECommandAdditionalArgumentsStyle
                                       },
                                       additional: { 'style': ECommandAdditionalArgumentsStyle, 'skip-import': boolean }
                                   }) {

    let result = {};
    switch (argument.type) {
        case ECommandTypes.COMPONENT:
            result = getResultComponent(argument);
            break;
        case ECommandTypes.DIRECTIVE:
            result = getResultDirective(argument);
            break;
        case ECommandTypes.FILTER:
            result = getResultFilter(argument);
            break;
        case ECommandTypes.CONSTANT:
            result = getResultConstant(argument);
            break;
        case ECommandTypes.SERVICE:
            result = getResultService(argument);
            break;
        case ECommandTypes.PROVIDER:
            result = getResultProvider(argument);
            break;
        case ECommandTypes.FACTORY:
            result = getResultFactory(argument);
            break;
        default:
            result = new CommandTypeError('Command structure type does not exist or is undefined.');
    }
    return result;
}

function permutations(...args: any) {
    const r: any[] = [], arg = args, max = arg.length - 1;

    function helper(arr: any[], i: number) {
        for (let j = 0, l = arg[i].length; j < l; j++) {
            const a = arr.slice(0); // clone arr
            a.push(arg[i][j]);
            if (i == max)
                r.push(a);
            else
                helper(a, i + 1);
        }
    }

    helper([], 0);
    return r;
}


class ArgumentsMockup {
    private core: ECommandCores;
    private type: ECommandTypes;
    private name: { camel: string, snake: string, kebap: string, capitalized: string };
    private path: string;
    private root: boolean;
    private project: boolean;
    private config: undefined | { appNames: { kebap: string, camel: string, snake: string, capitalized: string }, style: ECommandAdditionalArgumentsStyle };
    private additional: { "style": ECommandAdditionalArgumentsStyle, "skip-import": boolean };

    constructor(...args: any[]) {
        this.core = args[0][0];
        this.type = args[0][1];
        this.name = args[0][2];
        this.path = args[0][3];
        this.root = args[0][4];
        this.project = args[0][5];
        this.config = args[0][6];
        this.additional = args[0][7];
    }

    public getValue() {
        const toReturn = {
            core: this.core,
            type: this.type,
            name: this.name,
            path: this.path,
            root: this.root,
            project: this.project,
            config: this.config,
            additional: this.additional
        };

        if (typeof toReturn.config === "undefined") delete toReturn.config;

        return toReturn;
    }
}

export function filesComponent() {
    return [
        {
            name: 'test.component',
            directory: null,
            extension: 'html',
            content: '<p>\n    app:camel works!\n</p>\n',
            params: [{replace: /:camel/g, value: 'Test'}]
        },
        {
            name: 'test.component',
            directory: null,
            extension: 'js',
            content:
                'const app = require(\'../../app.module\');\n(() => {\n    app.component(\'app:camel\', {\n        template: require(\'./:kebap.component.html\'),\n        controller: app:camelController,\n        bindings: {}\n    });\n\n    app:camelController.$inject = [];\n\n    function app:camelController() {\n\n        this.$onInit = () => {\n        }\n    }\n})();\n',
            params: [
                {replace: /:kebap/g, value: 'test'},
                {replace: /:camel/g, value: 'Test'}
            ],
            import: null
        },
        {
            name: 'test.component',
            directory: null,
            extension: null,
            content: 'app-:kebap {\n\n}\n',
            params: [{replace: /:kebap/g, value: 'test'}],
            import: null
        }
    ]
}

export function filesDirective() {
    return [
        {
            directory: null,
            name: 'test.directive',
            extension: 'html',
            content: '<p>\n    app:camel works!\n</p>',
            params: [
                {
                    replace: /:camel/g,
                    value: "Test"
                }
            ]
        },
        {
            directory: null,
            name: 'test.directive',
            extension: 'js',
            content:
                'const app = require(\'../../app.module\');\n(() => {\n    app.directive(\'app:camel\', app:camelDirective);\n\n    app:camelDirective.$inject = [];\n\n    function app:camelDirective() {\n        return {\n            restrict: \'AEC\',\n            template: require(\'./:kebap.directive.html\'),\n            scope: {},\n            link: link\n        }\n    }\n\n    function link(scope, element, attributes) {\n\n    }\n})();\n',
            params: [
                {
                    replace: /:kebap/g,
                    value: "test"
                },
                {
                    replace: /:camel/g,
                    value: "Test"
                }
            ],
            import: null
        }
    ]
}

export function filesFilter() {
    return [
        {
            directory: null,
            name: 'test.filter',
            extension: 'js',
            content:
                'const app = require(\'../../app.module\');\n(() => {\n    app.filter(\'app:camel\', app:camelFilter);\n\n    app:camelFilter.$inject = [];\n\n    function app:camelFilter() {\n        return (input) => {\n            return input;\n        }\n    }\n})();\n',
            params: [{replace: /:camel/g, value: 'Test'}],
            import: null
        }
    ];
}

export function filesConstant() {
    return [
        {
            directory: null,
            name: 'test.constant',
            extension: 'js',
            content:
                'const app = require(\'../../app.module\');\n(() => {\n    const app:camelConstant = {};\n\n    app.constant(\'APP_:capitalized\', app:camelConstant);\n})();\n',
            params:
                [
                    {replace: /:camel/g, value: 'Test'},
                    {replace: /:capitalized/g, value: 'TEST'}
                ],
            import: null
        }
    ];
}


export function filesService() {
    return [
        {
            directory: null,
            name: 'test.service',
            extension: 'js',
            content:
                'const app = require(\'../../app.module\');\n(() => {\n    app.service(\'app:camel\', app:camelService);\n\n    app:camelService.$inject = [];\n\n    function app:camelService() {\n        this.name = \'app:camelService\';\n    }\n})();\n',
            params: [{replace: /:camel/g, value: 'Test'}],
            import: null
        }
    ];
}

export function filesProvider() {
    return [
        {
            directory: null,
            name: 'test.provider',
            extension: 'js',
            content:
                'const app = require(\'../../app.module\');\n(() => {\n    app.provider(\'app:camel\', app:camelProvider);\n\n    app:camelProvider.$inject = [];\n\n    function app:camelProvider() {\n        this.name = \'app:camelProvider\';\n    }\n})();\n',
            params: [{replace: /:camel/g, value: 'Test'}],
            import: null
        }
    ];
}

export function filesFactory() {
    return [
        {
            directory: null,
            name: 'test.factory',
            extension: 'js',
            content:
                'const app = require(\'../../app.module\');\n(() => {\n    app.factory(\'app:camel\', app:camelFactory);\n\n    app:camelFactory.$inject = [];\n\n    function app:camelFactory() {\n        return new App:camel();\n\n        function App:camel() {\n            this.name = \'app:camelFactory\';\n        }\n    }\n})();\n',
            params: [{replace: /:camel/g, value: 'Test'}],
            import: null
        }
    ];
}

function getResultComponent(argument: any) {
    let fileExtension = argument.additional.style || ECommandAdditionalArgumentsStyle.CSS;
    if (argument.config && argument.config.style) {
        fileExtension = argument.config.style;
    }

    return filesComponent().map((file: any) => {
        if (file.extension === null) {
            file.extension = fileExtension;
        }
        if (argument.root === false && argument.project === false) {
            file.directory = `${process.cwd()}/test`;
            if (file.import === null) {
                delete file.import;
            }
        } else if (argument.root === false && argument.project === true) {
            file.directory = `${process.cwd()}/test`;
            if (file.import === null) {
                if (argument.additional['skip-import']) {
                    delete file.import;
                } else {
                    if (file.extension === 'js') {
                        file.import = {
                            path: '/test/app.imports.js',
                            value:
                                `\nrequire(\'./..${process.cwd()}/test/test.component.js\');`
                        };
                    } else {
                        file.import = {
                            path: `/test/src/app/styles/components.${fileExtension}`,
                            value: `\n@import "../../../..${process.cwd()}/test/test.component.${fileExtension}";`
                        };
                    }
                }
            }
        } else if (argument.root === true && argument.project === true) {
            file.directory = '/test/src/app/components/test';
            if (file.import === null) {
                if (argument.additional['skip-import']) {
                    delete file.import;
                } else {
                    if (file.extension === 'js') {
                        file.import = {
                            path: '/test/app.imports.js',
                            value: '\nrequire(\'./src/app/components/test/test.component.js\');'
                        }
                    } else {
                        file.import = {
                            path: `/test/src/app/styles/components.${fileExtension}`,
                            value: `\n@import "../components/test/test.component.${fileExtension}";`
                        };
                    }
                }
            }
        }

        return file;
    });
}

function getResultDirective(argument: any) {
    return filesDirective().map((file: any) => {
        if (argument.root === false && argument.project === false) {
            file.directory = `${process.cwd()}/test`;
            if (file.import === null) {
                delete file.import;
            }
        } else if (argument.root === false && argument.project === true) {
            file.directory = `${process.cwd()}/test`;
            if (file.import === null) {
                file.import = {
                    path: "/test/app.imports.js",
                    value: `\nrequire('./..${process.cwd()}/test/test.directive.js');`
                }
            }
        } else if (argument.root === true && argument.project === true) {
            file.directory = '/test/src/app/directives/test';
            if (file.import === null) {
                file.import = {
                    path: '/test/app.imports.js',
                    value: "\nrequire('./src/app/directives/test/test.directive.js');"
                }
            }
        }
        if (argument.additional['skip-import']) {
            delete file.import;
        }
        return file;
    });
}

function getResultFilter(argument: any) {
    return filesFilter().map((file: any) => {
        if (argument.root === false && argument.project === false) {
            file.directory = `${process.cwd()}/test`;
            if (file.import === null) {
                delete file.import;
            }
        } else if (argument.root === false && argument.project === true) {
            file.directory = `${process.cwd()}/test`;
            if (file.import === null) {
                file.import = {
                    path: "/test/app.imports.js",
                    value: `\nrequire('./..${process.cwd()}/test/test.filter.js');`
                }
            }
        } else if (argument.root === true && argument.project === true) {
            file.directory = '/test/src/app/filters/test';
            if (file.import === null) {
                file.import = {
                    path: '/test/app.imports.js',
                    value: "\nrequire('./src/app/filters/test/test.filter.js');"
                }
            }
        }
        if (argument.additional['skip-import']) {
            delete file.import;
        }
        return file;
    });
}

function getResultConstant(argument: any) {
    return filesConstant().map((file: any) => {
        if (argument.root === false && argument.project === false) {
            file.directory = `${process.cwd()}/test`;
            if (file.import === null) {
                delete file.import;
            }
        } else if (argument.root === false && argument.project === true) {
            file.directory = `${process.cwd()}/test`;
            if (file.import === null) {
                file.import = {
                    path: "/test/app.imports.js",
                    value: `\nrequire('./..${process.cwd()}/test/test.constant.js');`
                }
            }
        } else if (argument.root === true && argument.project === true) {
            file.directory = '/test/src/app/constants/test';
            if (file.import === null) {
                file.import = {
                    path: '/test/app.imports.js',
                    value: "\nrequire('./src/app/constants/test/test.constant.js');"
                }
            }
        }
        if (argument.additional['skip-import']) {
            delete file.import;
        }
        return file;
    });
}

function getResultService(argument: any) {
    return filesService().map((file: any) => {
        if (argument.root === false && argument.project === false) {
            file.directory = `${process.cwd()}/test`;
            if (file.import === null) {
                delete file.import;
            }
        } else if (argument.root === false && argument.project === true) {
            file.directory = `${process.cwd()}/test`;
            if (file.import === null) {
                file.import = {
                    path: "/test/app.imports.js",
                    value: `\nrequire('./..${process.cwd()}/test/test.service.js');`
                }
            }
        } else if (argument.root === true && argument.project === true) {
            file.directory = '/test/src/app/services/test';
            if (file.import === null) {
                file.import = {
                    path: '/test/app.imports.js',
                    value: "\nrequire('./src/app/services/test/test.service.js');"
                }
            }
        }
        if (argument.additional['skip-import']) {
            delete file.import;
        }
        return file;
    });
}

function getResultProvider(argument: any) {
    return filesProvider().map((file: any) => {
        if (argument.root === false && argument.project === false) {
            file.directory = `${process.cwd()}/test`;
            if (file.import === null) {
                delete file.import;
            }
        } else if (argument.root === false && argument.project === true) {
            file.directory = `${process.cwd()}/test`;
            if (file.import === null) {
                file.import = {
                    path: "/test/app.imports.js",
                    value: `\nrequire('./..${process.cwd()}/test/test.provider.js');`
                }
            }
        } else if (argument.root === true && argument.project === true) {
            file.directory = '/test/src/app/providers/test';
            if (file.import === null) {
                file.import = {
                    path: '/test/app.imports.js',
                    value: "\nrequire('./src/app/providers/test/test.provider.js');"
                }
            }
        }
        if (argument.additional['skip-import']) {
            delete file.import;
        }
        return file;
    });
}

function getResultFactory(argument: any) {
    return filesFactory().map((file: any) => {
        if (argument.root === false && argument.project === false) {
            file.directory = `${process.cwd()}/test`;
            if (file.import === null) {
                delete file.import;
            }
        } else if (argument.root === false && argument.project === true) {
            file.directory = `${process.cwd()}/test`;
            if (file.import === null) {
                file.import = {
                    path: "/test/app.imports.js",
                    value: `\nrequire('./..${process.cwd()}/test/test.factory.js');`
                }
            }
        } else if (argument.root === true && argument.project === true) {
            file.directory = '/test/src/app/factories/test';
            if (file.import === null) {
                file.import = {
                    path: '/test/app.imports.js',
                    value: "\nrequire('./src/app/factories/test/test.factory.js');"
                }
            }
        }
        if (argument.additional['skip-import']) {
            delete file.import;
        }
        return file;
    });
}
