import {
    ECommandAdditionalArgumentsStyle,
    ECommandCores,
    ECommandTypes
} from "../../src/utilities/data-enums-interfaces.utility";

export function generateArguments() {
    const path = ['/test'];
    const core = [ECommandCores.NEW];
    const type = [''];
    const name = [{
        camel: 'Test',
        snake: 'test',
        kebap: 'test',
        capitalized: 'TEST'
    }];
    const additional = [{
        'style': ECommandAdditionalArgumentsStyle.CSS,
        'dependencies': false
    }, {
        'style': ECommandAdditionalArgumentsStyle.SCSS,
        'dependencies': false
    }, {
        'style': ECommandAdditionalArgumentsStyle.LESS,
        'dependencies': false
    }, {
        'style': ECommandAdditionalArgumentsStyle.CSS,
        'dependencies': true
    }, {
        'style': ECommandAdditionalArgumentsStyle.SCSS,
        'dependencies': true
    }, {
        'style': ECommandAdditionalArgumentsStyle.LESS,
        'dependencies': true
    }];

    let arrayOfPermutations = permutations(path, core, type, name, additional);

    arrayOfPermutations = arrayOfPermutations.map(permutation => {
        return (new ArgumentsMockup(permutation)).getValue();
    });

    return arrayOfPermutations;
}

export function generateResult(argument:
                                   {
                                       path: string,
                                       core: ECommandCores,
                                       type: ECommandTypes,
                                       name: { camel: string, snake: string, kebap: string, capitalized: string },
                                       additional: { 'style': ECommandAdditionalArgumentsStyle, 'dependencies': boolean }
                                   }) {

    return [
        prepareConfig(argument),
        prepareGitignore(),
        prepareAppImports(argument),
        preparePackagejson(argument),
        prepareVendorImports(),
        prepareWebpackConfig(argument),
        prepareWebpackServer(),
        prepareIndexHtml(),
        prepareStyles(argument),
        prepareAppModule(),
        prepareAppRoutes(),
        prepareAssetsGitkeep(),
        prepareComponentsStyles(argument),
        prepareGlobalStyles(argument),
        prepareComponentRootJs(),
        prepareComponentRootStyle(argument),
        prepareComponentRootHtml(),
        prepareComponentHomePageJs(),
        prepareComponentHomePageStyle(argument),
        prepareComponentHomePageHtml()
    ];
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
    readonly path: string;
    readonly core: ECommandCores;
    readonly type: ECommandTypes;
    readonly name: { camel: string, snake: string, kebap: string, capitalized: string };
    readonly additional: { "style": ECommandAdditionalArgumentsStyle, "description": boolean };

    constructor(...args: any[]) {
        this.path = args[0][0];
        this.core = args[0][1];
        this.type = args[0][2];
        this.name = args[0][3];
        this.additional = args[0][4];
    }

    public getValue() {
        return {
            path: this.path,
            core: this.core,
            type: this.type,
            name: this.name,
            additional: this.additional
        };
    }
}

function prepareConfig(argument:
                           {
                               path: string,
                               core: ECommandCores,
                               type: ECommandTypes,
                               name: { camel: string, snake: string, kebap: string, capitalized: string },
                               additional: { 'style': ECommandAdditionalArgumentsStyle, 'dependencies': boolean }
                           }) {
    return {
        directory: `${process.cwd()}/test`,
        name: '.angularjs-cli',
        extension: 'json',
        content:
            '{\n    "appNames": {\n        "kebap": ":kebap",\n        "camel": ":camel",\n        "snake": ":snake",\n        "capitalized": ":capitalized"\n    },\n    "style": ":styleExtension"\n}\n',
        params: [{replace: /:kebap/g, value: 'test'},
            {replace: /:camel/g, value: 'Test'},
            {replace: /:snake/g, value: 'test'},
            {replace: /:capitalized/g, value: 'TEST'},
            {replace: /:styleExtension/g, value: argument.additional.style}]
    }
}

function prepareGitignore() {
    return {
        directory: `${process.cwd()}/test`,
        name: '.gitignore',
        content:
            '# See http://help.github.com/ignore-files/ for more about ignoring files.\n\n# compiled output\n/dist\n/tmp\n/out-tsc\n\n# dependencies\n/node_modules\n\n# IDEs and editors\n/.idea\n.project\n.classpath\n.c9/\n*.launch\n.settings/\n*.sublime-workspace\n\n# IDE - VSCode\n.vscode/*\n!.vscode/settings.json\n!.vscode/tasks.json\n!.vscode/launch.json\n!.vscode/extensions.json\n\n# misc\n/.sass-cache\n/connect.lock\n/coverage\n/libpeerconnection.log\nnpm-debug.log\nyarn-error.log\ntestem.log\n/typings\n\n# System Files\n.DS_Store\nThumbs.db\n'
    };
}

function prepareAppImports(argument:
                               {
                                   path: string,
                                   core: ECommandCores,
                                   type: ECommandTypes,
                                   name: { camel: string, snake: string, kebap: string, capitalized: string },
                                   additional: { 'style': ECommandAdditionalArgumentsStyle, 'dependencies': boolean }
                               }) {
    return {
        directory: `${process.cwd()}/test`,
        name: 'app.imports',
        extension: 'js',
        content:
            `\'use strict\';\nrequire(\'./src/styles.${argument.additional.style}\');\n\nrequire(\'./src/app/app.module\');\nrequire(\'./src/app/app.routes\');\n\nrequire(\'./src/app/components/root/root.component\');\nrequire(\'./src/app/components/page-home/page-home.component\');\n`
    }
}

function preparePackagejson(argument:
                                {
                                    path: string,
                                    core: ECommandCores,
                                    type: ECommandTypes,
                                    name: { camel: string, snake: string, kebap: string, capitalized: string },
                                    additional: { 'style': ECommandAdditionalArgumentsStyle, 'dependencies': boolean }
                                }) {
    if (argument.additional.style === ECommandAdditionalArgumentsStyle.LESS) {
        return {
            directory: `${process.cwd()}/test`,
            name: 'package',
            extension: 'json',
            params: [{replace: /:kebap/g, value: 'test'}],
            content:
                '{\n  "name": ":kebap",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT",\n  "dependencies": {\n    "@uirouter/angularjs": "^1.0.20",\n    "angular": "^1.7.5"\n  },\n  "devDependencies": {\n    "@babel/core": "^7.1.2",\n    "@babel/preset-env": "^7.1.0",\n    "@babel/preset-stage-0": "^7.0.0",\n    "babel-loader": "^8.0.4",\n    "copy-webpack-plugin": "^4.5.2",\n    "css-loader": "^1.0.0",\n    "less": "^3.8.1",\n    "less-loader": "^4.1.0",\n    "raw-loader": "^0.5.1",\n    "style-loader": "^0.23.0",\n    "webpack": "^4.20.2",\n    "webpack-cli": "^3.1.2",\n    "webpack-dev-server": "^3.1.9"\n  },\n  "scripts": {\n    "start": "node ./webpack.server.config.js"\n  }\n}\n'
        }
    } else if (argument.additional.style === ECommandAdditionalArgumentsStyle.SCSS) {
        return {
            directory: `${process.cwd()}/test`,
            name: 'package',
            extension: 'json',
            params: [{replace: /:kebap/g, value: 'test'}],
            content:
                '{\n  "name": ":kebap",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT",\n  "dependencies": {\n    "@uirouter/angularjs": "^1.0.20",\n    "angular": "^1.7.5"\n  },\n  "devDependencies": {\n    "@babel/core": "^7.1.2",\n    "@babel/preset-env": "^7.1.0",\n    "@babel/preset-stage-0": "^7.0.0",\n    "babel-loader": "^8.0.4",\n    "copy-webpack-plugin": "^4.5.2",\n    "css-loader": "^1.0.0",\n    "node-sass": "^4.9.3",\n    "raw-loader": "^0.5.1",\n    "sass-loader": "^7.1.0",\n    "style-loader": "^0.23.0",\n    "webpack": "^4.20.2",\n    "webpack-cli": "^3.1.2",\n    "webpack-dev-server": "^3.1.9"\n  },\n  "scripts": {\n    "start": "node ./webpack.server.config.js"\n  }\n}\n'
        }
    }

    return {
        directory: `${process.cwd()}/test`,
        name: 'package',
        extension: 'json',
        params: [{replace: /:kebap/g, value: 'test'}],
        content:
            '{\n  "name": ":kebap",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT",\n  "dependencies": {\n    "@uirouter/angularjs": "^1.0.20",\n    "angular": "^1.7.5"\n  },\n  "devDependencies": {\n    "@babel/core": "^7.1.2",\n    "@babel/preset-env": "^7.1.0",\n    "@babel/preset-stage-0": "^7.0.0",\n    "babel-loader": "^8.0.4",\n    "copy-webpack-plugin": "^4.5.2",\n    "css-loader": "^1.0.0",\n    "node-sass": "^4.9.3",\n    "raw-loader": "^0.5.1",\n    "style-loader": "^0.23.0",\n    "webpack": "^4.20.2",\n    "webpack-cli": "^3.1.2",\n    "webpack-dev-server": "^3.1.9"\n  },\n  "scripts": {\n    "start": "node ./webpack.server.config.js"\n  }\n}\n'
    }
}

function prepareVendorImports() {
    return {
        directory: `${process.cwd()}/test`,
        name: 'vendor.imports',
        extension: 'js',
        content:
            '\'use strict\';\nrequire(\'angular\');\nrequire(\'@uirouter/angularjs\');\n'
    }
}

function prepareWebpackConfig(argument:
                                  {
                                      path: string,
                                      core: ECommandCores,
                                      type: ECommandTypes,
                                      name: { camel: string, snake: string, kebap: string, capitalized: string },
                                      additional: { 'style': ECommandAdditionalArgumentsStyle, 'dependencies': boolean }
                                  }) {

    if (argument.additional.style === ECommandAdditionalArgumentsStyle.SCSS) {
        return {
            directory: `${process.cwd()}/test`,
            name: 'webpack.config',
            extension: 'js',
            content:
                'const webpack = require(\'webpack\');\nconst path = require(\'path\');\nconst Copy = require(\'copy-webpack-plugin\');\n\nconst config = [\n    {\n        name: \'App bundle\',\n        mode: \'production\',\n        performance: {hints: false},\n        context: path.resolve(__dirname, \'\'),\n        entry: [\'./app.imports.js\'],\n        output: {\n            path: path.resolve(__dirname, \'dist\'),\n            filename: \'app.bundle.js\'\n        },\n        module: {\n            rules: [\n                {\n                    test: /\\.js$/,\n                    use: {\n                        loader: \'babel-loader\',\n                        options:\n                            {\n                                presets: [\n                                    \'@babel/preset-env\'\n                                ],\n                                compact: true\n                            }\n                    },\n                    exclude: [/node_modules/g]\n                },\n                {\n                    test: /\\.html/,\n                    loader: \'raw-loader\',\n                    exclude: [/node_modules/g]\n                },\n                {\n                    test: /\\.scss/,\n                    use: [\n                        {\n                            loader: "style-loader"\n                        },\n                        {\n                            loader: "css-loader"\n                        },\n                        {\n                            loader: "sass-loader"\n                        }\n                    ]\n                }\n            ]\n        },\n        plugins: [\n            new Copy([\n                {from: \'./src/assets\', to: \'./assets\'},\n                {from: \'./src/index.html\', to: \'./\'},\n            ])\n        ]\n    },\n    {\n        name: \'Vendor bundle\',\n        mode: \'production\',\n        performance: {hints: false},\n        context: path.resolve(__dirname, \'\'),\n        entry: [\'./vendor.imports.js\'],\n        output: {\n            path: path.resolve(__dirname, \'dist\'),\n            filename: \'vendor.bundle.js\'\n        },\n        module: {\n            rules: [\n                {\n                    test: /\\.js$/,\n                    use: {\n                        loader: \'babel-loader\',\n                        options:\n                            {\n                                presets: [],\n                                compact: true\n                            }\n                    }\n                }\n            ]\n        },\n    }\n];\n\nmodule.exports = config;\n'
        }
    } else if (argument.additional.style === ECommandAdditionalArgumentsStyle.LESS) {
        return {
            directory: `${process.cwd()}/test`,
            name: 'webpack.config',
            extension: 'js',
            content:
                'const webpack = require(\'webpack\');\nconst path = require(\'path\');\nconst Copy = require(\'copy-webpack-plugin\');\n\nconst config = [\n    {\n        name: \'App bundle\',\n        mode: \'production\',\n        performance: {hints: false},\n        context: path.resolve(__dirname, \'\'),\n        entry: [\'./app.imports.js\'],\n        output: {\n            path: path.resolve(__dirname, \'dist\'),\n            filename: \'app.bundle.js\'\n        },\n        module: {\n            rules: [\n                {\n                    test: /\\.js$/,\n                    use: {\n                        loader: \'babel-loader\',\n                        options:\n                            {\n                                presets: [\n                                    \'@babel/preset-env\'\n                                ],\n                                compact: true\n                            }\n                    },\n                    exclude: [/node_modules/g]\n                },\n                {\n                    test: /\\.html/,\n                    loader: \'raw-loader\',\n                    exclude: [/node_modules/g]\n                },\n                {\n                    test: /\\.less/,\n                    use: [\n                        {\n                            loader: "style-loader"\n                        },\n                        {\n                            loader: "css-loader"\n                        },\n                        {\n                            loader: "less-loader"\n                        }\n                    ]\n                }\n            ]\n        },\n        plugins: [\n            new Copy([\n                {from: \'./src/assets\', to: \'./assets\'},\n                {from: \'./src/index.html\', to: \'./\'},\n            ])\n        ]\n    },\n    {\n        name: \'Vendor bundle\',\n        mode: \'production\',\n        performance: {hints: false},\n        context: path.resolve(__dirname, \'\'),\n        entry: [\'./vendor.imports.js\'],\n        output: {\n            path: path.resolve(__dirname, \'dist\'),\n            filename: \'vendor.bundle.js\'\n        },\n        module: {\n            rules: [\n                {\n                    test: /\\.js$/,\n                    use: {\n                        loader: \'babel-loader\',\n                        options:\n                            {\n                                presets: [],\n                                compact: true\n                            }\n                    }\n                }\n            ]\n        },\n    }\n];\n\nmodule.exports = config;\n'
        }
    }
    return {
        directory: `${process.cwd()}/test`,
        name: 'webpack.config',
        extension: 'js',
        content:
            'const webpack = require(\'webpack\');\nconst path = require(\'path\');\nconst Copy = require(\'copy-webpack-plugin\');\n\nconst config = [\n    {\n        name: \'App bundle\',\n        mode: \'production\',\n        performance: {hints: false},\n        context: path.resolve(__dirname, \'\'),\n        entry: [\'./app.imports.js\'],\n        output: {\n            path: path.resolve(__dirname, \'dist\'),\n            filename: \'app.bundle.js\'\n        },\n        module: {\n            rules: [\n                {\n                    test: /\\.js$/,\n                    use: {\n                        loader: \'babel-loader\',\n                        options:\n                            {\n                                presets: [\n                                    \'@babel/preset-env\'\n                                ],\n                                compact: true\n                            }\n                    },\n                    exclude: [/node_modules/g]\n                },\n                {\n                    test: /\\.html/,\n                    loader: \'raw-loader\',\n                    exclude: [/node_modules/g]\n                },\n                {\n                    test: /\\.css/,\n                    use: [\n                        {\n                            loader: "style-loader"\n                        },\n                        {\n                            loader: "css-loader"\n                        }\n                    ]\n                }\n            ]\n        },\n        plugins: [\n            new Copy([\n                {from: \'./src/assets\', to: \'./assets\'},\n                {from: \'./src/index.html\', to: \'./\'},\n            ])\n        ]\n    },\n    {\n        name: \'Vendor bundle\',\n        mode: \'production\',\n        performance: {hints: false},\n        context: path.resolve(__dirname, \'\'),\n        entry: [\'./vendor.imports.js\'],\n        output: {\n            path: path.resolve(__dirname, \'dist\'),\n            filename: \'vendor.bundle.js\'\n        },\n        module: {\n            rules: [\n                {\n                    test: /\\.js$/,\n                    use: {\n                        loader: \'babel-loader\',\n                        options:\n                            {\n                                presets: [],\n                                compact: true\n                            }\n                    }\n                }\n            ]\n        },\n    }\n];\n\nmodule.exports = config;\n'
    }
}

function prepareWebpackServer() {
    return {
        directory: `${process.cwd()}/test`,
        name: 'webpack.server.config',
        extension: 'js',
        content:
            'const path = require(\'path\');\nconst WebpackDevServer = require(\'webpack-dev-server\');\nconst webpack = require(\'webpack\');\nconst compiler = webpack(require(\'./webpack.config\'));\n\nconst server = new WebpackDevServer(compiler, {\n    contentBase: path.resolve(__dirname, \'/dist\'),\n    compress: true,\n    host: \'0.0.0.0\',\n    port: \'4300\'\n});\nserver.listen(\'4300\', \'0.0.0.0\', () => {\n    console.log(\'Open http://0.0.0.0:4300\');\n});\n'
    }
}

function prepareIndexHtml() {
    return {
        directory: `${process.cwd()}/test/src`,
        name: 'index',
        extension: 'html',
        content:
            '<!DOCTYPE html>\n<html data-ng-app=":camel" lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>:camel</title>\n</head>\n<body>\n    <app-root></app-root>\n    <script src="vendor.bundle.js" type="application/javascript"></script>\n    <script src="app.bundle.js" type="application/javascript"></script>\n</body>\n</html>\n',
        params: [{replace: /:camel/g, value: 'Test'}]
    }
}

function prepareStyles(argument:
                           {
                               path: string,
                               core: ECommandCores,
                               type: ECommandTypes,
                               name: { camel: string, snake: string, kebap: string, capitalized: string },
                               additional: { 'style': ECommandAdditionalArgumentsStyle, 'dependencies': boolean }
                           }) {
    if (argument.additional.style === ECommandAdditionalArgumentsStyle.SCSS) {
        return {
            directory: `${process.cwd()}/test/src`,
            name: 'styles',
            content:
                `@import "app/styles/global";\n@import "app/styles/components";\n`,
            extension: argument.additional.style
        }
    }

    return {
        directory: `${process.cwd()}/test/src`,
        name: 'styles',
        content:
            `@import "app/styles/global.${argument.additional.style}";\n@import "app/styles/components.${argument.additional.style}";\n`,
        extension: argument.additional.style
    }
}

function prepareAppModule() {
    return {
        directory: `${process.cwd()}/test/src/app`,
        name: 'app.module',
        extension: 'js',
        content:
            '(() => {\n    module.exports = angular.module(\':camel\', [\'ui.router\']);\n})();\n',
        params: [{replace: /:camel/g, value: 'Test'}]
    };
}

function prepareAppRoutes() {
    return {
        directory: `${process.cwd()}/test/src/app`,
        name: 'app.routes',
        extension: 'js',
        content:
            'const app = require(\'./app.module\');\n(() => {\n    app.config(routerConfig);\n    routerConfig.$inject = [\'$stateProvider\', \'$urlRouterProvider\'];\n\n    function routerConfig($stateProvider, $urlRouterProvider) {\n        $urlRouterProvider.otherwise(\'/\');\n        $stateProvider\n            .state(\'home\', {\n                url: \'/\',\n                component: \'appPageHome\',\n                resolve: {\n                    sampleData: function() {\n                        this.$inject = [];\n\n                        return \'sampleValue\';\n                    }\n                }\n            })\n    }\n})();\n'
    };
}

function prepareAssetsGitkeep() {
    return {
        directory: `${process.cwd()}/test/src/assets`,
        name: '.gitkeep'
    };
}

function prepareComponentsStyles(argument:
                                     {
                                         path: string,
                                         core: ECommandCores,
                                         type: ECommandTypes,
                                         name: { camel: string, snake: string, kebap: string, capitalized: string },
                                         additional: { 'style': ECommandAdditionalArgumentsStyle, 'dependencies': boolean }
                                     }) {
    if (argument.additional.style === ECommandAdditionalArgumentsStyle.SCSS) {
        return {
            directory: `${process.cwd()}/test/src/app/styles`,
            name: 'components',
            content:
                `@import "../components/root/root.component";\n@import "../components/page-home/page-home.component";\n`,
            extension: argument.additional.style
        };
    }

    return {
        directory: `${process.cwd()}/test/src/app/styles`,
        name: 'components',
        content:
            `@import "../components/root/root.component.${argument.additional.style}";\n@import "../components/page-home/page-home.component.${argument.additional.style}";\n`,
        extension: argument.additional.style
    };
}

function prepareGlobalStyles(argument:
                                 {
                                     path: string,
                                     core: ECommandCores,
                                     type: ECommandTypes,
                                     name: { camel: string, snake: string, kebap: string, capitalized: string },
                                     additional: { 'style': ECommandAdditionalArgumentsStyle, 'dependencies': boolean }
                                 }) {
    return {
        directory: `${process.cwd()}/test/src/app/styles`,
        name: 'global',
        content: '',
        extension: argument.additional.style
    };
}

function prepareComponentRootJs() {
    return {
        directory:
            `${process.cwd()}/test/src/app/components/root`,
        name: 'root.component',
        extension: 'js',
        content:
            'const app = require(\'../../app.module\');\n(() => {\n    app.component(\'app:camel\', {\n        template: require(\'./:kebap.component.html\'),\n        controller: app:camelController,\n        bindings: {}\n    });\n\n    app:camelController.$inject = [];\n\n    function app:camelController() {\n\n        this.$onInit = () => {\n        }\n    }\n})();\n',
        params: [
            {replace: /:camel/g, value: 'Root'},
            {replace: /:kebap/g, value: 'root'}
        ]
    };
}

function prepareComponentRootStyle(argument:
                                       {
                                           path: string,
                                           core: ECommandCores,
                                           type: ECommandTypes,
                                           name: { camel: string, snake: string, kebap: string, capitalized: string },
                                           additional: { 'style': ECommandAdditionalArgumentsStyle, 'dependencies': boolean }
                                       }) {
    return {
        directory:
            `${process.cwd()}/test/src/app/components/root`,
        name: 'root.component',
        content: 'app-:kebap {\n\n}\n',
        params: [{replace: /:kebap/g, value: 'root'}],
        extension: argument.additional.style
    };
}

function prepareComponentRootHtml() {
    return {
        directory:
            `${process.cwd()}/test/src/app/components/root`,
        name: 'root.component',
        extension: 'html',
        content: '<ui-view></ui-view>\n',
        params: [{replace: /:camel/g, value: 'Root'}]
    };
}

function prepareComponentHomePageJs() {
    return {
        directory:
            `${process.cwd()}/test/src/app/components/page-home`,
        name: 'page-home.component',
        extension: 'js',
        content:
            'const app = require(\'../../app.module\');\n(() => {\n    app.component(\'app:camel\', {\n        template: require(\'./:kebap.component.html\'),\n        controller: app:camelController,\n        bindings: {}\n    });\n\n    app:camelController.$inject = [];\n\n    function app:camelController() {\n\n        this.$onInit = () => {\n        }\n    }\n})();\n',
        params: [
            {replace: /:camel/g, value: 'PageHome'},
            {replace: /:kebap/g, value: 'page-home'}
        ]
    };
}

function prepareComponentHomePageStyle(argument:
                                           {
                                               path: string,
                                               core: ECommandCores,
                                               type: ECommandTypes,
                                               name: { camel: string, snake: string, kebap: string, capitalized: string },
                                               additional: { 'style': ECommandAdditionalArgumentsStyle, 'dependencies': boolean }
                                           }) {
    return {
        directory:
            `${process.cwd()}/test/src/app/components/page-home`,
        name: 'page-home.component',
        content: 'app-:kebap {\n\n}\n',
        params: [{replace: /:kebap/g, value: 'page-home'}],
        extension: argument.additional.style
    };
}

function prepareComponentHomePageHtml() {
    return {
        directory:
            `${process.cwd()}/test/src/app/components/page-home`,
        name: 'page-home.component',
        extension: 'html',
        content: '<p>\n    app:camel works!\n</p>\n',
        params: [{replace: /:camel/g, value: 'PageHome'}]
    };
}
