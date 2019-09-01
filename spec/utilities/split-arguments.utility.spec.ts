import {splitArgumentsUtility} from "../../src/utilities/split-arguments.utility";
import { expect } from "chai";

describe('splitArgumentsUtility', () => {
    const newArguments = [
        'nodePath',
        'filePath',
        'new',
        'testName',
        '--style',
        'scss',
        '--dependencies',
        'false'
    ];
    const newResult = {
        main: [
            'nodePath',
            'filePath',
            'new',
            'testName'
        ],
        additional: [
            '--style',
            'scss',
            '--dependencies',
            'false'
        ]
    };
    const generateArguments = [
        'nodePath',
        'filePath',
        'generate',
        'component',
        'testName',
        '--style',
        'scss',
        '--skip-import',
        'false'
    ];
    const generateResult = {
        main: [
            'nodePath',
            'filePath',
            'generate',
            'component',
            'testName'
        ],
        additional: [
            '--style',
            'scss',
            '--skip-import',
            'false'
        ]
    };
    const infoArguments = [
        'nodePath',
        'filePath',
        'info',
    ];
    const infoResult = {
        main: [
            'nodePath',
            'filePath',
            'info',
        ],
        additional: []
    };

    it('should prepare arguments for new command', () => {
        const result = splitArgumentsUtility(newArguments);
        expect(result).to.be.deep.equal(newResult);
    });

    it('should prepare arguments for generate command', () => {
        const result = splitArgumentsUtility(generateArguments);
        expect(result).to.be.deep.equal(generateResult);
    });

    it('should prepare arguments for info command', () => {
        const result = splitArgumentsUtility(infoArguments);
        expect(result).to.be.deep.equal(infoResult);
    });
});
