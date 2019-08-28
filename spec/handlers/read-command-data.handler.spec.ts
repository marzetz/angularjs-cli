import {getCommandArguments} from "./handlers.helper";
import {
    ICommandArguments,
    ICommandData,
    ICommandFile
} from "../../src/utilities/data-enums-interfaces.utility";
import * as sinon from 'sinon';
import {readCommandDataHandler} from "../../src/handlers/read-command-data.handler";
import rewire = require("rewire");
import {Tools} from "../../src/utilities/tools.utility";
import {ProjectExistsError} from "../../src/errors/project-exists.error";

const expect = require('chai').expect;

const filesVariableMockup: ICommandFile[] = [
    {
        directory: "/testDirectory",
        name: "testName",
        extension: "testExtension",
        content: "testContent",
        params: [
            {
                replace: /testRegex/g,
                value: "test"
            }
        ]
    }
];
const util = rewire('../../src/handlers/read-command-data.handler');

describe('readCommandDataHandler', () => {
    const rootAndProjectVariants: {project: boolean, root: boolean}[] = [
        {project: true, root: true},
        {project: true, root: false},
        {project: false, root: true},
        {project: false, root: false},
    ];
    const argumentsVariants: ICommandArguments[] = getCommandArguments();

    const stubGetRootPrepare = (val: boolean) => sinon.fake.resolves(val);
    const stubGetPathAndProjectPrepare = (valProject: boolean) => sinon.fake.resolves({
        path: '/testPath',
        project: valProject
    });
    const stubGetFiles = sinon.fake.resolves(filesVariableMockup);

    afterEach(() => {
        sinon.restore();
    });

    rootAndProjectVariants.forEach((rootAndProjectVariants: {project: boolean, root: boolean}) => {
        argumentsVariants.forEach((argumentsVariant: ICommandArguments) => {
            const
                descriptionStyle = argumentsVariant.additional && argumentsVariant.additional.style
                    ? argumentsVariant.additional.style
                    : 'empty',
                descriptionDependencies = argumentsVariant.additional && argumentsVariant.additional.dependencies
                    ? argumentsVariant.additional.dependencies
                    : 'empty',
                descriptionType = argumentsVariant.type ? argumentsVariant.type : 'empty';


            const argsDescription = `core: ${argumentsVariant.core}, type: ${descriptionType}, style: ${descriptionStyle}, dependencies: ${descriptionDependencies}, root: ${rootAndProjectVariants.root}, project: ${rootAndProjectVariants.project}`;

            it(`should generate command data (${argsDescription})`, async () => {
                util.__set__({
                    getFiles: stubGetFiles,
                    getRoot: stubGetRootPrepare(rootAndProjectVariants.root),
                    getPathAndProject: stubGetPathAndProjectPrepare(rootAndProjectVariants.project)
                });
                const singleCommandData: ICommandData = await util.readCommandDataHandler(argumentsVariant);
                const singleCommandDataResult: ICommandData = createSingleCommandDataResult({
                    ...argumentsVariant, ...{
                        project: rootAndProjectVariants.project,
                        root: rootAndProjectVariants.root
                    }
                });

                expect(singleCommandData).to.be.deep.equal(singleCommandDataResult);
            });
        });
    });

    it('should throw an error caused by an attempt to generate new project inside an existing one', async () => {
        const
            newProjectArgs = argumentsVariants[0],
            fakeToolsExists = sinon.fake.resolves(true),
            fakeToolsReadFile = sinon.fake.resolves(`{"test": "testValue"}`);

        sinon.replace(Tools, 'exists', fakeToolsExists);
        sinon.replace(Tools, 'readFile', fakeToolsReadFile);

        await readCommandDataHandler(newProjectArgs).catch((err) => {
            expect(() => {
                throw err
            }).to.throw(ProjectExistsError);
        });
    });
});

function createSingleCommandDataResult(fakeResponseArgs: ICommandArguments & { project: boolean, root: boolean }): ICommandData {
    const {project, root, ...restProps} = fakeResponseArgs;
    return {
        args: restProps,
        path: '/testPath',
        project,
        root,
        files: [...filesVariableMockup],
        dependencies: !!(restProps.additional && (restProps.additional.dependencies === 'true' || restProps.additional.dependencies === true))
    }
}
