import {
    ECommandAdditionalArguments,
    ECommandAdditionalArgumentsStyle,
    ECommandTypes,
    ICommandArguments, ICommandFile
} from "../utilities/data-enums-interfaces.utility";
import {Tools} from "../utilities/tools.utility";
import {CommandTypeError} from "../errors/command-type.error";

export class CommandFilesGenerateClass {
    protected args: ICommandArguments;
    protected path: string;
    protected root: boolean;
    protected project: boolean;
    protected styleExtension: ECommandAdditionalArgumentsStyle;
    protected directory: string;
    protected skipImport: boolean = false;

    constructor(args: ICommandArguments, path: string, root: boolean, project: boolean) {
        this.args = args;
        this.path = path;
        this.root = root;
        this.project = project;
        this.styleExtension = args.additional && args.additional.style
            ? args.additional.style
            : ECommandAdditionalArgumentsStyle.CSS;

        /**
         * Override declared style extension;
         */
        if (args.config) this.styleExtension = args.config.style;

        this.directory = `${process.cwd()}/${args.name.kebap}`;

        if (args.additional && typeof args.additional[ECommandAdditionalArguments.SKIP_IMPORT] === 'boolean') {
            this.skipImport = args.additional[ECommandAdditionalArguments.SKIP_IMPORT] as boolean;
        }
    }

    public async init(): Promise<ICommandFile[]> {
        switch (this.args.type) {
            case ECommandTypes.COMPONENT:
                return await this.filesComponent();
            case ECommandTypes.DIRECTIVE:
                return await this.filesDirective();
            case ECommandTypes.FILTER:
                return await this.filesFilter();
            case ECommandTypes.CONSTANT:
                return await this.filesCostant();
            case ECommandTypes.SERVICE:
                return await this.filesService();
            case ECommandTypes.PROVIDER:
                return await this.filesProvider();
            case ECommandTypes.FACTORY:
                return await this.filesFactory();
            default:
                throw new CommandTypeError('Command structure type does not exist or is undefined.');
        }
    }

    private async filesComponent(): Promise<ICommandFile[]> {
        if (this.root) this.directory = `${this.path}/src/app/components/${this.args.name.kebap}`;

        const componentHtml: ICommandFile = {
            directory: this.directory,
            name: `${this.args.name.kebap}.component`,
            extension: 'html',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-html.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: this.args.name.camel}
            ]
        };

        const componentJs: ICommandFile = {
            directory: this.directory,
            name: `${this.args.name.kebap}.component`,
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-js.content`), 'utf-8'),
            params: [
                {replace: /:kebap/g, value: this.args.name.kebap},
                {replace: /:camel/g, value: this.args.name.camel}
            ]
        };

        const componentStyle: ICommandFile = {
            directory: this.directory,
            name: `${this.args.name.kebap}.component`,
            extension: this.styleExtension,
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/component-style.content`), 'utf-8'),
            params: [
                {replace: /:kebap/g, value: this.args.name.kebap}
            ]
        };

        if (this.project && !this.skipImport) {

            const
                relativePathJs = Tools.path.relative(this.path, `${this.directory}/${this.args.name.kebap}.component.js`),
                relativePathStyle = Tools.path.relative(`${this.path}/src/app/styles`, `${this.directory}/${this.args.name.kebap}.component.${this.styleExtension}`);

            componentJs.import = {
                path: Tools.path.resolve(`${this.path}/app.imports.js`),
                value: `\nrequire('./${relativePathJs}');`,

            };
            componentStyle.import = {
                path: Tools.path.resolve(`${this.path}/src/app/styles/components.${this.styleExtension}`),
                value: `\n@import "${relativePathStyle}";`
            };
        }

        return [componentHtml, componentJs, componentStyle];
    }

    private async filesDirective(): Promise<ICommandFile[]> {
        if (this.root) this.directory = `${this.path}/src/app/directives/${this.args.name.kebap}`;

        const directiveHtml: ICommandFile = {
            directory: this.directory,
            name: `${this.args.name.kebap}.directive`,
            extension: 'html',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/directive-html.content`), 'utf-8'),
            params: [
                {replace: /:kebap/g, value: this.args.name.kebap}
            ]
        };

        const directiveJs: ICommandFile = {
            directory: this.directory,
            name: `${this.args.name.kebap}.directive`,
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/directive-js.content`), 'utf-8'),
            params: [
                {replace: /:kebap/g, value: this.args.name.kebap},
                {replace: /:camel/g, value: this.args.name.camel}
            ]
        };

        if (this.project && !this.skipImport) {

            const relativePathJs = Tools.path.relative(this.path, `${this.directory}/${this.args.name.kebap}.directive.js`);
            directiveJs.import = {
                path: Tools.path.resolve(`${this.path}/app.imports.js`),
                value: `\nrequire('./${relativePathJs}');`
            }
        }

        return [directiveHtml, directiveJs]
    }

    private async filesFilter(): Promise<ICommandFile[]> {
        if (this.root) this.directory = `${this.path}/src/app/filters/${this.args.name.kebap}`;

        const filterJs: ICommandFile = {
            directory: this.directory,
            name: `${this.args.name.kebap}.filter`,
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/filter-js.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: this.args.name.camel}
            ]
        };

        if (this.project && !this.skipImport) {

            const relativePathJs = Tools.path.relative(this.path, `${this.directory}/${this.args.name.kebap}.filter.js`);
            filterJs.import = {
                path: Tools.path.resolve(`${this.path}/app.imports.js`),
                value: `\nrequire('./${relativePathJs}');`
            }
        }

        return [filterJs];
    }

    private async filesCostant(): Promise<ICommandFile[]> {
        if (this.root) this.directory = `${this.path}/src/app/constants/${this.args.name.kebap}`;

        const constantJs: ICommandFile = {
            directory: this.directory,
            name: `${this.args.name.kebap}.constant`,
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/constant-js.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: this.args.name.camel},
                {replace: /:capitalized/g, value: this.args.name.capitalized},
            ]
        };

        if (this.project && !this.skipImport) {

            const relativePathJs = Tools.path.relative(this.path, `${this.directory}/${this.args.name.kebap}.constant.js`);
            constantJs.import = {
                path: Tools.path.resolve(`${this.path}/app.imports.js`),
                value: `\nrequire('./${relativePathJs}');`
            }
        }

        return [constantJs];
    }

    private async filesService(): Promise<ICommandFile[]> {
        if (this.root) this.directory = `${this.path}/src/app/services/${this.args.name.kebap}`;

        const serviceJs: ICommandFile = {
            directory: this.directory,
            name: `${this.args.name.kebap}.service`,
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/service-js.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: this.args.name.camel}
            ]
        };

        if (this.project && !this.skipImport) {

            const relativePathJs = Tools.path.relative(this.path, `${this.directory}/${this.args.name.kebap}.service.js`);
            serviceJs.import = {
                path: Tools.path.resolve(`${this.path}/app.imports.js`),
                value: `\nrequire('./${relativePathJs}');`
            }
        }

        return [serviceJs];
    }

    private async filesProvider(): Promise<ICommandFile[]> {
        if (this.root) this.directory = `${this.path}/src/app/providers/${this.args.name.kebap}`;

        const providerJs: ICommandFile = {
            directory: this.directory,
            name: `${this.args.name.kebap}.provider`,
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/provider-js.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: this.args.name.camel}
            ]
        };

        if (this.project && !this.skipImport) {

            const relativePathJs = Tools.path.relative(this.path, `${this.directory}/${this.args.name.kebap}.provider.js`);
            providerJs.import = {
                path: Tools.path.resolve(`${this.path}/app.imports.js`),
                value: `\nrequire('./${relativePathJs}');`
            }
        }

        return [providerJs];
    }

    private async filesFactory(): Promise<ICommandFile[]> {
        if (this.root) this.directory = `${this.path}/src/app/factories/${this.args.name.kebap}`;

        const factoryJs: ICommandFile = {
            directory: this.directory,
            name: `${this.args.name.kebap}.factory`,
            extension: 'js',
            content: await Tools.readFile(Tools.path.resolve(`${__dirname}/../contents/factory-js.content`), 'utf-8'),
            params: [
                {replace: /:camel/g, value: this.args.name.camel}
            ]
        };

        if (this.project && !this.skipImport) {

            const relativePathJs = Tools.path.relative(this.path, `${this.directory}/${this.args.name.kebap}.factory.js`);
            factoryJs.import = {
                path: Tools.path.resolve(`${this.path}/app.imports.js`),
                value: `\nrequire('./${relativePathJs}');`
            }
        }

        return [factoryJs];
    }
}