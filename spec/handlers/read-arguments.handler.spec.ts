import {generateArguments, getResults} from "./read-arguments.handler.helper";
import {readArgumentsHandler} from "../../src/handlers/read-arguments.handler";

const expect = require('chai').expect;

describe('readArgumentsHandler', () => {
    const permutations = generateArguments();
    const results = getResults();

    permutations.forEach((permutation: string[], index: number) => {
        let name = `[${index}] ${permutation.join(' ')}`;

        it(name, () => {
            process.argv = permutation;

            expect(readArgumentsHandler()).to.be.deep.equal(results[index]);
        });
    });
});
