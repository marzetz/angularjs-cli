import * as sinon from 'sinon';
import {Tools} from "../../src/utilities/tools.utility";
import {writeFilesAndDirectoriesHandler} from "../../src/handlers/write-files-and-directories.handler";
import {
    ECommandAdditionalArgumentsStyle,
    ICommandData,
    ICommandFile
} from "../../src/utilities/data-enums-interfaces.utility";
import {expect} from 'chai';
import {FileExistsError} from "../../src/errors/file-exists.error";

describe('writeFilesAndDirectoriesHandler', () => {
    const scenariosPermutations = [
        {createMainDirectory: false, writeNewFile: false, appendImports: false}, // Throws an error;
        {createMainDirectory: false, writeNewFile: true, appendImports: false},
        {createMainDirectory: false, writeNewFile: true, appendImports: true},
        {createMainDirectory: true, writeNewFile: true, appendImports: false},
        {createMainDirectory: true, writeNewFile: true, appendImports: true},
    ];

    afterEach(() => {
        sinon.restore();
    });

    scenariosPermutations.forEach((permutation: { createMainDirectory: boolean, writeNewFile: boolean, appendImports: boolean }) => {
        it(createTestDescription(permutation), async () => {
            let copiedArguments = getArgumentsValue();
            const
                existsFake = sinon.stub(),
                mkdirFake = sinon.stub(),
                writeFileFake = sinon.stub(),
                appendFileFake = sinon.stub();

            // createMainDirectory permutations;
            existsFake.onCall(0).resolves(!permutation.createMainDirectory);
            sinon.replace(Tools, 'exists', existsFake);
            sinon.replace(Tools, 'mkdir', mkdirFake);

            // writeFile is true in every permutation except the one that throws an error;
            existsFake.onCall(1).resolves(!permutation.writeNewFile);
            sinon.replace(Tools, 'writeFile', writeFileFake);

            // appendImports
            if (permutation.appendImports) {
                copiedArguments.files = copiedArguments.files.map((file: ICommandFile) => {
                    file.import = {path: '/importFilePath', value: 'importFileValue'};
                    return file;
                });
            }
            sinon.replace(Tools, 'appendFile', appendFileFake);

            if (!permutation.writeNewFile) {
                return await writeFilesAndDirectoriesHandler(copiedArguments).catch((err) => {
                    expect(() => {
                        throw err;
                    }).to.throw(FileExistsError);
                });
            }

            await writeFilesAndDirectoriesHandler(copiedArguments);

            if (permutation.createMainDirectory) {
                expect(mkdirFake.called).to.be.true;
            } else {
                expect(mkdirFake.called).to.be.false;
            }

            expect(writeFileFake.called).to.be.true;

            if (permutation.appendImports) {
                expect(appendFileFake.called).to.be.true;
            } else {
                expect(appendFileFake.called).to.be.false;
            }
        });
    });
});

function getArgumentsValue(): ICommandData {
    return {
        args: {
            core: "new",
            type: "",
            name: {
                lowerCamel: "test",
                upperCamel: "Test",
                snake: "test",
                kebap: "test",
                allCaps: "TEST"
            },
            additional: {
                style: ECommandAdditionalArgumentsStyle.CSS,
                dependencies: true
            }
        },
        path: "/testDirectory",
        files: [
            {
                directory: "/testDirectory",
                name: "testName",
                extension: "testExtension",
                content: "testContent",
                params: [
                    {
                        replace: /:testRegex/g,
                        value: "test"
                    }
                ]
            }
        ],
        dependencies: true,
        project: true,
        root: true
    }
}

function createTestDescription(permutation: { createMainDirectory: boolean, writeNewFile: boolean, appendImports: boolean }): string {
    let description = `should create main directory`;

    if (!permutation.createMainDirectory) description = `shouldn't create main directory`;
    if (!permutation.writeNewFile) {
        description = `should throw the FileExistsError`;
        return description;
    } else {
        description = `${description}, write new file`;
    }

    if (!permutation.appendImports) {
        description = `${description}, then shouldn't append import`
    } else {
        description = `${description}, then append import`
    }

    return description;
}
