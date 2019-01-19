import {CommandFilesGenerateClass} from "../../src/class/command-files-generate.class";
import {argumentMockups, resultMockup} from "./command-files-generate.mockup";

const expect = require('chai').expect;

describe('CommandFilesGenerateClass', () => {
    let componentOutsideClass: CommandFilesGenerateClass,
        componentInsideClass: CommandFilesGenerateClass,
        componentRootClass: CommandFilesGenerateClass,

        directiveOutsideClass: CommandFilesGenerateClass,
        directiveInsideClass: CommandFilesGenerateClass,
        directiveRootClass: CommandFilesGenerateClass,

        filterOutsideClass: CommandFilesGenerateClass,
        filterInsideClass: CommandFilesGenerateClass,
        filterRootClass: CommandFilesGenerateClass,

        constantOutsideClass: CommandFilesGenerateClass,
        constantInsideClass: CommandFilesGenerateClass,
        constantRootClass: CommandFilesGenerateClass,

        serviceOutsideClass: CommandFilesGenerateClass,
        serviceInsideClass: CommandFilesGenerateClass,
        serviceRootClass: CommandFilesGenerateClass,

        providerOutsideClass: CommandFilesGenerateClass,
        providerInsideClass: CommandFilesGenerateClass,
        providerRootClass: CommandFilesGenerateClass,

        factoryOutsideClass: CommandFilesGenerateClass,
        factoryInsideClass: CommandFilesGenerateClass,
        factoryRootClass: CommandFilesGenerateClass,

        invalidTypeClass: CommandFilesGenerateClass;

    beforeEach(() => {
        /**
         * Create classes for components;
         */
        componentOutsideClass = new CommandFilesGenerateClass(
            argumentMockups.componentOutside.args,
            argumentMockups.componentOutside.path,
            argumentMockups.componentOutside.root,
            argumentMockups.componentOutside.project
        );
        componentInsideClass = new CommandFilesGenerateClass(
            argumentMockups.componentInside.args,
            argumentMockups.componentInside.path,
            argumentMockups.componentInside.root,
            argumentMockups.componentInside.project
        );
        componentRootClass = new CommandFilesGenerateClass(
            argumentMockups.componentRoot.args,
            argumentMockups.componentRoot.path,
            argumentMockups.componentRoot.root,
            argumentMockups.componentRoot.project
        );

        /**
         * Create classes for directive;
         */
        directiveOutsideClass = new CommandFilesGenerateClass(
            argumentMockups.directiveOutside.args,
            argumentMockups.directiveOutside.path,
            argumentMockups.directiveOutside.root,
            argumentMockups.directiveOutside.project
        );
        directiveInsideClass = new CommandFilesGenerateClass(
            argumentMockups.directiveInside.args,
            argumentMockups.directiveInside.path,
            argumentMockups.directiveInside.root,
            argumentMockups.directiveInside.project
        );
        directiveRootClass = new CommandFilesGenerateClass(
            argumentMockups.directiveRoot.args,
            argumentMockups.directiveRoot.path,
            argumentMockups.directiveRoot.root,
            argumentMockups.directiveRoot.project
        );

        /**
         * Create classes for filter;
         */
        filterOutsideClass = new CommandFilesGenerateClass(
            argumentMockups.filterOutside.args,
            argumentMockups.filterOutside.path,
            argumentMockups.filterOutside.root,
            argumentMockups.filterOutside.project
        );
        filterInsideClass = new CommandFilesGenerateClass(
            argumentMockups.filterInside.args,
            argumentMockups.filterInside.path,
            argumentMockups.filterInside.root,
            argumentMockups.filterInside.project
        );
        filterRootClass = new CommandFilesGenerateClass(
            argumentMockups.filterRoot.args,
            argumentMockups.filterRoot.path,
            argumentMockups.filterRoot.root,
            argumentMockups.filterRoot.project
        );

        /**
         * Create classes for constant;
         */
        constantOutsideClass = new CommandFilesGenerateClass(
            argumentMockups.constantOutside.args,
            argumentMockups.constantOutside.path,
            argumentMockups.constantOutside.root,
            argumentMockups.constantOutside.project
        );
        constantInsideClass = new CommandFilesGenerateClass(
            argumentMockups.constantInside.args,
            argumentMockups.constantInside.path,
            argumentMockups.constantInside.root,
            argumentMockups.constantInside.project
        );
        constantRootClass = new CommandFilesGenerateClass(
            argumentMockups.constantRoot.args,
            argumentMockups.constantRoot.path,
            argumentMockups.constantRoot.root,
            argumentMockups.constantRoot.project
        );

        /**
         * Create classes for service;
         */
        serviceOutsideClass = new CommandFilesGenerateClass(
            argumentMockups.serviceOutside.args,
            argumentMockups.serviceOutside.path,
            argumentMockups.serviceOutside.root,
            argumentMockups.serviceOutside.project
        );
        serviceInsideClass = new CommandFilesGenerateClass(
            argumentMockups.serviceInside.args,
            argumentMockups.serviceInside.path,
            argumentMockups.serviceInside.root,
            argumentMockups.serviceInside.project
        );
        serviceRootClass = new CommandFilesGenerateClass(
            argumentMockups.serviceRoot.args,
            argumentMockups.serviceRoot.path,
            argumentMockups.serviceRoot.root,
            argumentMockups.serviceRoot.project
        );

        /**
         * Create classes for provider;
         */
        providerOutsideClass = new CommandFilesGenerateClass(
            argumentMockups.providerOutside.args,
            argumentMockups.providerOutside.path,
            argumentMockups.providerOutside.root,
            argumentMockups.providerOutside.project
        );
        providerInsideClass = new CommandFilesGenerateClass(
            argumentMockups.providerInside.args,
            argumentMockups.providerInside.path,
            argumentMockups.providerInside.root,
            argumentMockups.providerInside.project
        );
        providerRootClass = new CommandFilesGenerateClass(
            argumentMockups.providerRoot.args,
            argumentMockups.providerRoot.path,
            argumentMockups.providerRoot.root,
            argumentMockups.providerRoot.project
        );

        /**
         * Create classes for factory;
         */
        factoryOutsideClass = new CommandFilesGenerateClass(
            argumentMockups.factoryOutside.args,
            argumentMockups.factoryOutside.path,
            argumentMockups.factoryOutside.root,
            argumentMockups.factoryOutside.project
        );
        factoryInsideClass = new CommandFilesGenerateClass(
            argumentMockups.factoryInside.args,
            argumentMockups.factoryInside.path,
            argumentMockups.factoryInside.root,
            argumentMockups.factoryInside.project
        );
        factoryRootClass = new CommandFilesGenerateClass(
            argumentMockups.factoryRoot.args,
            argumentMockups.factoryRoot.path,
            argumentMockups.factoryRoot.root,
            argumentMockups.factoryRoot.project
        );

        /**
         * Create class for invalid type;
         */
        invalidTypeClass = new CommandFilesGenerateClass(
            argumentMockups.invalidType.args,
            argumentMockups.invalidType.path,
            argumentMockups.invalidType.root,
            argumentMockups.invalidType.project
        );
    });

    describe('CommandFilesGenerateClass create class', () => {
        it('should create [component outside]', () => {
            expect(componentOutsideClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
        it('should create [component inside]', () => {
            expect(componentInsideClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
        it('should create [component root]', () => {
            expect(componentRootClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });

        it('should create [directive outside]', () => {
            expect(directiveOutsideClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
        it('should create [directive inside]', () => {
            expect(directiveInsideClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
        it('should create [directive root]', () => {
            expect(directiveRootClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });

        it('should create [filter outside]', () => {
            expect(filterOutsideClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
        it('should create [filter inside]', () => {
            expect(filterInsideClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
        it('should create [filter root]', () => {
            expect(filterRootClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });

        it('should create [constant outside]', () => {
            expect(constantOutsideClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
        it('should create [constant inside]', () => {
            expect(constantInsideClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
        it('should create [constant root]', () => {
            expect(constantRootClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });

        it('should create [service outside]', () => {
            expect(serviceOutsideClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
        it('should create [service inside]', () => {
            expect(serviceInsideClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
        it('should create [service root]', () => {
            expect(serviceRootClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });

        it('should create [provider outside]', () => {
            expect(providerOutsideClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
        it('should create [provider inside]', () => {
            expect(providerInsideClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
        it('should create [provider root]', () => {
            expect(providerRootClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });

        it('should create [factory outside]', () => {
            expect(factoryOutsideClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
        it('should create [factory inside]', () => {
            expect(factoryInsideClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
        it('should create [factory root]', () => {
            expect(factoryRootClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });

        it('should create [invalit type]', () => {
            expect(factoryRootClass).to.be.an.instanceOf(CommandFilesGenerateClass);
        });
    });

    describe('CommandFilesGenerateClass call init function', () => {
        it('should call init function [component outside]', async () => {
            expect(await componentOutsideClass.init()).deep.equal(resultMockup.componentOutside);
        });
        it('should call init function [component inside]', async () => {
            expect(await componentInsideClass.init()).deep.equal(resultMockup.componentInside);
        });
        it('should call init function [component root]', async () => {
            expect(await componentRootClass.init()).deep.equal(resultMockup.componentRoot);
        });

        it('should call init function [directive outside]', async () => {
            expect(await directiveOutsideClass.init()).deep.equal(resultMockup.directiveOutside);
        });
        it('should call init function [directive inside]', async () => {
            expect(await directiveInsideClass.init()).deep.equal(resultMockup.directiveInside);
        });
        it('should call init function [directive root]', async () => {
            expect(await directiveRootClass.init()).deep.equal(resultMockup.directiveRoot);
        });

        it('should call init function [filter outside]', async () => {
            expect(await filterOutsideClass.init()).deep.equal(resultMockup.filterOutside);
        });
        it('should call init function [filter inside]', async () => {
            expect(await filterInsideClass.init()).deep.equal(resultMockup.filterInside);
        });
        it('should call init function [filter root]', async () => {
            expect(await filterRootClass.init()).deep.equal(resultMockup.filterRoot);
        });

        it('should call init function [constant outside]', async () => {
            expect(await constantOutsideClass.init()).deep.equal(resultMockup.constantOutside);
        });
        it('should call init function [constant inside]', async () => {
            expect(await constantInsideClass.init()).deep.equal(resultMockup.constantInside);
        });
        it('should call init function [constant root]', async () => {
            expect(await constantRootClass.init()).deep.equal(resultMockup.constantRoot);
        });

        it('should call init function [service outside]', async () => {
            expect(await serviceOutsideClass.init()).deep.equal(resultMockup.serviceOutside);
        });
        it('should call init function [service inside]', async () => {
            expect(await serviceInsideClass.init()).deep.equal(resultMockup.serviceInside);
        });
        it('should call init function [service root]', async () => {
            expect(await serviceRootClass.init()).deep.equal(resultMockup.serviceRoot);
        });

        it('should call init function [provider outside]', async () => {
            expect(await providerOutsideClass.init()).deep.equal(resultMockup.providerOutside);
        });
        it('should call init function [provider inside]', async () => {
            expect(await providerInsideClass.init()).deep.equal(resultMockup.providerInside);
        });
        it('should call init function [provider root]', async () => {
            expect(await providerRootClass.init()).deep.equal(resultMockup.providerRoot);
        });

        it('should call init function [factory outside]', async () => {
            expect(await factoryOutsideClass.init()).deep.equal(resultMockup.factoryOutside);
        });
        it('should call init function [factory inside]', async () => {
            expect(await factoryInsideClass.init()).deep.equal(resultMockup.factoryInside);
        });
        it('should call init function [factory root]', async () => {
            expect(await factoryRootClass.init()).deep.equal(resultMockup.factoryRoot);
        });
    });
});
