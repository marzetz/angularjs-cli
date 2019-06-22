import {generateArguments, getResults} from "./read-arguments.handler.helper";
import {readArgumentsHandler} from "../../src/handlers/read-arguments.handler";
import {CommandArgumentError} from "../../src/errors/command-argument.error";

const expect = require('chai').expect;

describe('readArgumentsHandler', () => {
    const permutations = generateArguments();
    const results = getResults();

    permutations.forEach((permutation: string[], index: number) => {
        let name = `[${index}] ${permutation.join(' ').replace(/--/g, '')}`;

        it(name, () => {
            process.argv = permutation;

            if (process.argv.indexOf('--invalid-option') > -1) {
                try {
                    readArgumentsHandler();
                } catch (e) {
                    expect(() => {throw e}).to.throw(CommandArgumentError);
                }
            } else {
                expect(readArgumentsHandler()).to.be.deep.equal(results[index]);
            }
        });
    });
});
