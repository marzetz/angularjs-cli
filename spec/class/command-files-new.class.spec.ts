import {generateArguments, generateResult} from "./command-files-new.class.helper";
import {CommandFilesNewClass} from "../../src/class/command-files-new.class";

const expect = require('chai').expect;

describe('CommandFilesNewClass', () => {
    const argumentsPermutations = generateArguments();

    argumentsPermutations.forEach( (permutation, index) => {
        let name = `[${index}] ${permutation.core}`;
        name = `${name} ${permutation.additional['style']}`;

        if (permutation.additional['dependencies']) name = `${name} dependencies`;

        it(name, async () => {
            const newClass = new CommandFilesNewClass(permutation, process.cwd());

            expect(await newClass.init()).to.deep.equal(generateResult(permutation));
        });
    });
});