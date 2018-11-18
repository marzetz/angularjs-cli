import {Tools} from "./tools.utility";
import {
    ECommandAdditionalArguments,
    ECommandCores, ECommandTypes,
    ICommandArguments,
    ICommandFile
} from "./data-enums-interfaces.utility";

export async function prepareFilesDataUtility(args: ICommandArguments, path: string, root: boolean, project: boolean): Promise<ICommandFile[]> {
    let files: ICommandFile[] = [];
    switch (args.core) {
        case ECommandCores.NEW:
            files = await prepareFilesNew(args, path, root);
            break;
        case ECommandCores.GENERATE:
            files = await prepareFilesGenerate(args, path, root, project);
            break;
    }
    return files;
}

async function prepareFilesNew(args: ICommandArguments, path: string, root: boolean): Promise<ICommandFile[]> {

    /**
     * @TODO: Refactor additional options to be stored as object, not array of objects;
     */
    let styleExtension: string = 'css';
    args.additional.forEach(async property => {
        if (property.key === ECommandAdditionalArguments.STYLE) styleExtension = property.value as string;
    });

    const config: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}`),
        name: '.angularjs-cli',
        extension: 'json',
        content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/config.content`), 'utf-8'),
        params: [
            {replace: /:kebap/g, value: args.name.kebap},
            {replace: /:camel/g, value: args.name.camel},
            {replace: /:snake/g, value: args.name.snake},
            {replace: /:capitalized/g, value: args.name.capitalized},
            {replace: /:styleExtension/g, value: styleExtension}
        ],
    };

    const gitignore: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}`),
        name: '.gitignore',
        content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/gitignore.content`), 'utf-8'),
    };

    const appImports: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}`),
        name: 'app.imports',
        extension: 'js',
    };

    const packagejson: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}`),
        name: 'package',
        extension: 'json',
        params: [
            {replace: /:kebap/g, value: args.name.kebap},
        ]
    };

    const vendorImports: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}`),
        name: 'vendor.imports',
        extension: 'js',
        content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/vendor-imports.content`), 'utf-8')
    };

    const webpackConfig: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}`),
        name: 'webpack.config',
        extension: 'js'
    };

    const webpackServer: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}`),
        name: 'webpack.server.config',
        extension: 'js',
        content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/webpack-server-config.content`), 'utf-8')
    };

    const indexHtml: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}/src`),
        name: 'index',
        extension: 'html',
        content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/index.content`), 'utf-8'),
        params: [
            {replace: /:camel/g, value: args.name.camel},
        ]
    };

    const styles: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}/src`),
        name: 'styles',
    };

    const appModule: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}/src/app`),
        name: 'app.module',
        extension: 'js',
        content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/module.content`), 'utf-8'),
        params: [
            {replace: /:camel/g, value: args.name.camel},
        ]
    };

    const appRoutes: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}/src/app`),
        name: 'app.routes',
        extension: 'js',
        content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/routes.content`), 'utf-8')
    };

    const assetsGitkeep: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}/src/assets`),
        name: '.gitkeep',
    };

    const componentsStyles: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}/src/app/styles`),
        name: 'components',
    };

    const globalStyles: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}/src/app/styles`),
        name: 'global',
        content: ''
    };

    const componentRootJs: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}/src/app/components/root`),
        name: 'root.component',
        extension: 'js',
        content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-js.content`), 'utf-8'),
        params: [
            {replace: /:camel/g, value: 'Root'},
            {replace: /:kebap/g, value: 'root'},
        ]
    };

    const componentRootStyle: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}/src/app/components/root`),
        name: 'root.component',
        content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-style.content`), 'utf-8'),
        params: [
            {replace: /:kebap/g, value: 'root'}
        ]
    };

    const componentRootHtml: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}/src/app/components/root`),
        name: 'root.component',
        extension: 'html',
        content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/root-component-html.content`), 'utf-8'),
        params: [
            {replace: /:camel/g, value: 'Root'},
        ]
    };

    const componentPageHomeJs: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}/src/app/components/page-home`),
        name: 'page-home.component',
        extension: 'js',
        content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-js.content`), 'utf-8'),
        params: [
            {replace: /:camel/g, value: 'PageHome'},
            {replace: /:kebap/g, value: 'page-home'},
        ]
    };

    const componentPageHomeStyle: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}/src/app/components/page-home`),
        name: 'page-home.component',
        content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-style.content`), 'utf-8'),
        params: [
            {replace: /:kebap/g, value: 'page-home'}
        ]
    };

    const componentPageHomeHtml: ICommandFile = {
        directory: Tools.path.resolve(`${path}/${args.name.kebap}/src/app/components/page-home`),
        name: 'page-home.component',
        extension: 'html',
        content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-html.content`), 'utf-8'),
        params: [
            {replace: /:camel/g, value: 'PageHome'},
        ]
    };

    const
        pathContentAppImports = Tools.path.resolve(`${__dirname}/../contents/app-imports.${styleExtension}.content`),
        pathContentPackagejson = Tools.path.resolve(`${__dirname}/../contents/package.${styleExtension}.content`),
        pathContentWebpackConfig = Tools.path.resolve(`${__dirname}/../contents/webpack-config.${styleExtension}.content`),
        pathContentStyles = Tools.path.resolve(`${__dirname}/../contents/styles.${styleExtension}.content`),
        pathContentComponentsStyles = Tools.path.resolve(`${__dirname}/../contents/styles-components.${styleExtension}.content`);

    appImports.content = await Tools.readFile(pathContentAppImports, 'utf-8');
    packagejson.content = await Tools.readFile(pathContentPackagejson, 'utf-8');
    webpackConfig.content = await Tools.readFile(pathContentWebpackConfig, 'utf-8');
    styles.extension = `${styleExtension}`;
    styles.content = await Tools.readFile(pathContentStyles, 'utf-8');
    componentsStyles.extension = `${styleExtension}`;
    componentsStyles.content = await Tools.readFile(pathContentComponentsStyles, 'utf-8');
    globalStyles.extension = `${styleExtension}`;
    componentRootStyle.extension = `${styleExtension}`;
    componentPageHomeStyle.extension = `${styleExtension}`;

    return [config, gitignore, appImports, packagejson, vendorImports, webpackConfig, webpackServer, indexHtml, styles, appModule, appRoutes, assetsGitkeep, componentsStyles, globalStyles, componentRootJs, componentRootStyle, componentRootHtml, componentPageHomeJs, componentPageHomeStyle, componentPageHomeHtml];
}

async function prepareFilesGenerate(args: ICommandArguments, path: string, root: boolean, project: boolean): Promise<ICommandFile[]> {
    let files: ICommandFile[] = [],
        directory = `${process.cwd()}/${args.name.kebap}`;

    // @TODO: Change additional arguments from array to object;
    // @TODO: User can't generate structure inside a project with style's extension other than declared when project was created;
    let styleExtension: string = 'css';
    args.additional.forEach(async property => {
        if (property.key === ECommandAdditionalArguments.STYLE) styleExtension = property.value as string;
    });

    if (args.config) styleExtension = args.config.style;

    switch (args.type) {
        case ECommandTypes.COMPONENT:
            if (root) directory = `${path}/src/app/components/${args.name.kebap}`;
            files = await getComponentFiles(directory, path, project);
            break;
        case ECommandTypes.DIRECTIVE:
            if (root) directory = `${path}/src/app/directives/${args.name.kebap}`;
            files = await getDirectiveFiles(directory, path, project);
            break;
        case ECommandTypes.FILTER:
            if (root) directory = `${path}/src/app/filters/${args.name.kebap}`;
            files = await getFilterFiles(directory, path, project);
            break;
        case ECommandTypes.CONSTANT:
            if (root) directory = `${path}/src/app/constants/${args.name.kebap}`;
            files = await getConstantFiles(directory, path, project);
            break;
        case ECommandTypes.SERVICE:
            if (root) directory = `${path}/src/app/services/${args.name.kebap}`;
            files = await getServiceFiles(directory, path, project);
            break;
        case ECommandTypes.PROVIDER:
            if (root) directory = `${path}/src/app/providers/${args.name.kebap}`;
            files = await getProviderFiles(directory, path, project);
            break;
        case ECommandTypes.FACTORY:
            if (root) directory = `${path}/src/app/factories/${args.name.kebap}`;
            files = await getFactoryFiles(directory, path, project);
            break;
    }

    return files;

    async function getComponentFiles(directory: string, path: string, project: boolean): Promise<ICommandFile[]> {
        const componentHtml: ICommandFile = {
            directory: directory,
            name: `${args.name.kebap}.component`,
            extension: 'html',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-html.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: args.name.camel}
            ]
        };

        const componentJs: ICommandFile = {
            directory: directory,
            name: `${args.name.kebap}.component`,
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-js.content`), 'utf-8'),
            params: [
                {replace: /:kebap/g, value: args.name.kebap},
                {replace: /:camel/g, value: args.name.camel}
            ]
        };

        const componentStyle: ICommandFile = {
            directory: directory,
            name: `${args.name.kebap}.component`,
            extension: styleExtension,
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-style.content`), 'utf-8'),
            params: [
                {replace: /:kebap/g, value: args.name.kebap}
            ]
        };

        // @TODO: Implement 'skip-import' additional option;
        if (project) {
            const
                relativePathJs = Tools.path.relative(path, `${directory}/${args.name.kebap}.component.js`),
                relativePathStyle = Tools.path.relative(`${path}/src/app/styles`, `${directory}/${args.name.kebap}.component.${styleExtension}`);

            componentJs.import = {
                path: Tools.path.resolve(`${path}/app.imports.js`),
                value: `\nrequire('${relativePathJs}');`,

            };
            componentStyle.import = {
                path: Tools.path.resolve(`${path}/src/app/styles/components.${styleExtension}`),
                value: `\n@import "${relativePathStyle}";`
            };
        }

        return [componentHtml, componentJs, componentStyle];
    }

    async function getDirectiveFiles(directory: string, path: string, project: boolean): Promise<ICommandFile[]> {
        const directiveHtml: ICommandFile = {
            directory: directory,
            name: `${args.name.kebap}.directive`,
            extension: 'html',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/directive-html.content`), 'utf-8'),
            params: [
                {replace: /:kebap/g, value: args.name.kebap}
            ]
        };

        const directiveJs: ICommandFile = {
            directory: directory,
            name: `${args.name.kebap}.directive`,
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/directive-js.content`), 'utf-8'),
            params: [
                {replace: /:kebap/g, value: args.name.kebap},
                {replace: /:camel/g, value: args.name.camel}
            ]
        };

        // @TODO: Implement 'skip-import' additional option;
        if (project) {
            const relativePathJs = Tools.path.relative(path, `${directory}/${args.name.kebap}.directive.js`);
            directiveJs.import = {
                path: Tools.path.resolve(`${path}/app.imports.js`),
                value: `\nrequire('${relativePathJs}');`
            }
        }

        return [directiveHtml, directiveJs]
    }

    async function getFilterFiles(directory: string, path: string, project: boolean): Promise<ICommandFile[]> {
        const filterJs: ICommandFile = {
            directory: directory,
            name: `${args.name.kebap}.filter`,
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/filter-js.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: args.name.camel}
            ]
        };

        // @TODO: Implement 'skip-import' additional option;
        if (project) {
            const relativePathJs = Tools.path.relative(path, `${directory}/${args.name.kebap}.filter.js`);
            filterJs.import = {
                path: Tools.path.resolve(`${path}/app.imports.js`),
                value: `\nrequire('${relativePathJs}');`
            }
        }

        return [filterJs];
    }

    async function getConstantFiles(directory: string, path: string, project: boolean): Promise<ICommandFile[]> {
        const constantJs: ICommandFile = {
            directory: directory,
            name: `${args.name.kebap}.constant`,
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/constant-js.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: args.name.camel},
                {replace: /:capitalized/g, value: args.name.capitalized},
            ]
        };

        // @TODO: Implement 'skip-import' additional option;
        if (project) {
            const relativePathJs = Tools.path.relative(path, `${directory}/${args.name.kebap}.constant.js`);
            constantJs.import = {
                path: Tools.path.resolve(`${path}/app.imports.js`),
                value: `\nrequire('${relativePathJs}');`
            }
        }

        return [constantJs];
    }

    async function getServiceFiles(directory: string, path: string, project: boolean): Promise<ICommandFile[]> {
        const serviceJs: ICommandFile = {
            directory: directory,
            name: `${args.name.kebap}.service`,
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/service-js.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: args.name.camel}
            ]
        };

        // @TODO: Implement 'skip-import' additional option;
        if (project) {
            const relativePathJs = Tools.path.relative(path, `${directory}/${args.name.kebap}.service.js`);
            serviceJs.import = {
                path: Tools.path.resolve(`${path}/app.imports.js`),
                value: `\nrequire('${relativePathJs}');`
            }
        }

        return [serviceJs];
    }

    async function getProviderFiles(directory: string, path: string, project: boolean): Promise<ICommandFile[]> {
        const providerJs: ICommandFile = {
            directory: directory,
            name: `${args.name.kebap}.provider`,
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/provider-js.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: args.name.camel}
            ]
        };

        // @TODO: Implement 'skip-import' additional option;
        if (project) {
            const relativePathJs = Tools.path.relative(path, `${directory}/${args.name.kebap}.provider.js`);
            providerJs.import = {
                path: Tools.path.resolve(`${path}/app.imports.js`),
                value: `\nrequire('${relativePathJs}');`
            }
        }

        return [providerJs];
    }

    async function getFactoryFiles(directory: string, path: string, project: boolean): Promise<ICommandFile[]> {
        const factoryJs: ICommandFile = {
            directory: directory,
            name: `${args.name.kebap}.factory`,
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/factory-js.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: args.name.camel}
            ]
        };

        // @TODO: Implement 'skip-import' additional option;
        if (project) {
            const relativePathJs = Tools.path.relative(path, `${directory}/${args.name.kebap}.factory.js`);
            factoryJs.import = {
                path: Tools.path.resolve(`${path}/app.imports.js`),
                value: `\nrequire('${relativePathJs}');`
            }
        }

        return [factoryJs];
    }
}
