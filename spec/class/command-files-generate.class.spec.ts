import {generateArguments, generateResult} from "./command-files-generate.class.helper";
import {CommandFilesGenerateClass} from "../../src/class/command-files-generate.class";
import {ImpossibleSettingsError} from "../../src/errors/impossible-setting.error";
import {CommandTypeError} from "../../src/errors/command-type.error";

const expect = require('chai').expect;

describe('CommandFilesGenerateClass', () => {
    const argumentsPermutations = generateArguments();

    argumentsPermutations.forEach( (permutation, index) => {
        let name = `[${index}] ${permutation.core} ${permutation.type}`;
        if (permutation.project && permutation.root) {
            name = `${name} root`;
        } else if (permutation.project && !permutation.root) {
            name = `${name} inside`;
        } else if (!permutation.project && permutation.root) {
            name = `${name} impossible`;
        } else {
            name = `${name} outside`;
        }

        name = `${name} ${permutation.additional['style']}`;

        if (permutation.additional['skip-import']) {
            name = `${name} skip-import`;
        }

        it(name, async () => {
            const generatedClass = new CommandFilesGenerateClass(permutation, permutation.path, permutation.root, permutation.project);
            if (!permutation.project && permutation.root) {
                await generatedClass.init().catch((err) => {
                    expect(() => {
                        throw err;
                    }).to.throw(ImpossibleSettingsError);
                });
            } else if (permutation.type === 'invalidType') {
                await generatedClass.init().catch((err) => {
                    expect(() => {
                        throw err;
                    }).to.throw(CommandTypeError);
                });
            } else {
                expect(await generatedClass.init()).to.deep.equal(generateResult(permutation));
            }
        });
    });
});
