import {generateRawArguments, getCommandArguments} from "./handlers.helper";
import {readArgumentsHandler} from "../../src/handlers/read-arguments.handler";
import {CommandArgumentError} from "../../src/errors/command-argument.error";

const expect = require('chai').expect;

describe('readArgumentsHandler', () => {
    const permutations = generateRawArguments();
    const results = getCommandArguments();

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
