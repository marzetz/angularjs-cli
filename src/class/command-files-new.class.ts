import {
    ECommandAdditionalArgumentsStyle,
    ICommandArguments,
    ICommandFile
} from "../utilities/data-enums-interfaces.utility";
import {Tools} from "../utilities/tools.utility";

export class CommandFilesNewClass {
    protected args: ICommandArguments;
    protected path: string;
    protected styleExtension: ECommandAdditionalArgumentsStyle;

    constructor(args: ICommandArguments, path: string) {
        this.args = args;
        this.path = path;
        this.styleExtension = args.additional && args.additional.style
            ? args.additional.style
            : ECommandAdditionalArgumentsStyle.CSS;
    }

    public async init() {
        return [
            await this.prepareConfig(),
            await this.prepareGitignore(),
            await this.prepareAppImports(),
            await this.preparePackagejson(),
            await this.prepareVendorImports(),
            await this.prepareWebpackConfig(),
            await this.prepareWebpackServer(),
            await this.prepareIndexHtml(),
            await this.prepareStyles(),
            await this.prepareAppModule(),
            await this.prepareAppRoutes(),
            await this.prepareAssetsGitkeep(),
            await this.prepareComponentsStyles(),
            await this.prepareGlobalStyles(),
            await this.prepareComponentRootJs(),
            await this.prepareComponentRootStyle(),
            await this.prepareComponentRootHtml(),
            await this.prepareComponentHomePageJs(),
            await this.prepareComponentHomePageStyle(),
            await this.prepareComponentHomePageHtml()
        ];
    }

    private async prepareConfig(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}`),
            name: '.angularjs-cli',
            extension: 'json',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/config.content`), 'utf-8'),
            params: [
                {replace: /:kebap/g, value: this.args.name.kebap},
                {replace: /:camel/g, value: this.args.name.camel},
                {replace: /:snake/g, value: this.args.name.snake},
                {replace: /:capitalized/g, value: this.args.name.capitalized},
                {replace: /:styleExtension/g, value: this.styleExtension}
            ],
        };
    }

    private async prepareGitignore(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}`),
            name: '.gitignore',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/gitignore.content`), 'utf-8')
        };
    }

    private async prepareAppImports(): Promise<ICommandFile> {
        const _path = Tools.path.resolve(`${__dirname}/../contents/app-imports.${this.styleExtension}.content`);
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}`),
            name: 'app.imports',
            extension: 'js',
            content: await Tools.readFile(_path, 'utf-8')
        };
    }

    private async preparePackagejson(): Promise<ICommandFile> {
        const _path = Tools.path.resolve(`${__dirname}/../contents/package.${this.styleExtension}.content`);
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}`),
            name: 'package',
            extension: 'json',
            params: [
                {replace: /:kebap/g, value: this.args.name.kebap},
            ],
            content: await Tools.readFile(_path, 'utf-8')
        };
    }

    private async prepareVendorImports(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}`),
            name: 'vendor.imports',
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/vendor-imports.content`), 'utf-8')
        };
    }

    private async prepareWebpackConfig(): Promise<ICommandFile> {
        const _path = Tools.path.resolve(`${__dirname}/../contents/webpack-config.${this.styleExtension}.content`);
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}`),
            name: 'webpack.config',
            extension: 'js',
            content: await Tools.readFile(_path, 'utf-8')
        };
    }

    private async prepareWebpackServer(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}`),
            name: 'webpack.server.config',
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/webpack-server-config.content`), 'utf-8')
        };
    }

    private async prepareIndexHtml(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}/src`),
            name: 'index',
            extension: 'html',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/index.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: this.args.name.camel},
            ]
        };
    }

    private async prepareStyles(): Promise<ICommandFile> {
        const _path = Tools.path.resolve(`${__dirname}/../contents/styles.${this.styleExtension}.content`);
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}/src`),
            name: 'styles',
            content: await Tools.readFile(_path, 'utf-8'),
            extension: `${this.styleExtension}`
        };
    }

    private async prepareAppModule(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}/src/app`),
            name: 'app.module',
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/module.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: this.args.name.camel},
            ]
        };
    }

    private async prepareAppRoutes(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}/src/app`),
            name: 'app.routes',
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/routes.content`), 'utf-8')
        };
    }

    private async prepareAssetsGitkeep(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}/src/assets`),
            name: '.gitkeep',
        };

    }

    private async prepareComponentsStyles(): Promise<ICommandFile> {
        const _path = Tools.path.resolve(`${__dirname}/../contents/styles-components.${this.styleExtension}.content`);
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}/src/app/styles`),
            name: 'components',
            content: await Tools.readFile(_path, 'utf-8'),
            extension: `${this.styleExtension}`
        };
    }

    private async prepareGlobalStyles(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}/src/app/styles`),
            name: 'global',
            content: '',
            extension: `${this.styleExtension}`
        };
    }

    private async prepareComponentRootJs(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}/src/app/components/root`),
            name: 'root.component',
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-js.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: 'Root'},
                {replace: /:kebap/g, value: 'root'},
            ]
        };
    }

    private async prepareComponentRootStyle(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}/src/app/components/root`),
            name: 'root.component',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-style.content`), 'utf-8'),
            params: [
                {replace: /:kebap/g, value: 'root'}
            ],
            extension: `${this.styleExtension}`
        };
    }

    private async prepareComponentRootHtml(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}/src/app/components/root`),
            name: 'root.component',
            extension: 'html',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/root-component-html.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: 'Root'},
            ]
        };
    }

    private async prepareComponentHomePageJs(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}/src/app/components/page-home`),
            name: 'page-home.component',
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-js.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: 'PageHome'},
                {replace: /:kebap/g, value: 'page-home'},
            ]
        };
    }

    private async prepareComponentHomePageStyle(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}/src/app/components/page-home`),
            name: 'page-home.component',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-style.content`), 'utf-8'),
            params: [
                {replace: /:kebap/g, value: 'page-home'}
            ],
            extension: `${this.styleExtension}`
        };
    }

    private async prepareComponentHomePageHtml(): Promise<ICommandFile> {
        return {
            directory: Tools.path.resolve(`${this.path}/${this.args.name.kebap}/src/app/components/page-home`),
            name: 'page-home.component',
            extension: 'html',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-html.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: 'PageHome'},
            ]
        };
    }

}
