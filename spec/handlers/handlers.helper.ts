import {ECommandAdditionalArgumentsStyle, ICommandArguments} from "../../src/utilities/data-enums-interfaces.utility";

export function generateRawArguments() {
    return [
        ['', '', 'new', 'test'],
        ['', '', 'new', 'test', '--style', ECommandAdditionalArgumentsStyle.CSS],
        ['', '', 'new', 'test', '--style', ECommandAdditionalArgumentsStyle.LESS],
        ['', '', 'new', 'test', '--style', ECommandAdditionalArgumentsStyle.SCSS],
        ['', '', 'new', 'test', '--dependencies', 'true'],
        ['', '', 'new', 'test', '--dependencies', 'false'],
        ['', '', 'new', 'test', '-d'],

        ['', '', 'new', 'test', '--dependencies', 'false', '--style', ECommandAdditionalArgumentsStyle.CSS],
        ['', '', 'new', 'test', '--dependencies', 'true', '--style', ECommandAdditionalArgumentsStyle.CSS],
        ['', '', 'new', 'test', '--dependencies', 'false', '--style', ECommandAdditionalArgumentsStyle.LESS],
        ['', '', 'new', 'test', '--dependencies', 'true', '--style', ECommandAdditionalArgumentsStyle.LESS],
        ['', '', 'new', 'test', '--dependencies', 'false', '--style', ECommandAdditionalArgumentsStyle.SCSS],
        ['', '', 'new', 'test', '--dependencies', 'true', '--style', ECommandAdditionalArgumentsStyle.SCSS],

        ['', '', 'generate', 'component', 'test'],
        ['', '', 'generate', 'component', 'test', '--style', ECommandAdditionalArgumentsStyle.CSS],
        ['', '', 'generate', 'component', 'test', '--style', ECommandAdditionalArgumentsStyle.LESS],
        ['', '', 'generate', 'component', 'test', '--style', ECommandAdditionalArgumentsStyle.SCSS],
        ['', '', 'generate', 'component', 'test', '--skip-import', 'true'],
        ['', '', 'generate', 'component', 'test', '--skip-import', 'false'],
        ['', '', 'generate', 'component', 'test', '-s'],

        ['', '', 'generate', 'component', 'test', '--skip-import', 'false', '--style', ECommandAdditionalArgumentsStyle.CSS],
        ['', '', 'generate', 'component', 'test', '--skip-import', 'true', '--style', ECommandAdditionalArgumentsStyle.CSS],
        ['', '', 'generate', 'component', 'test', '--skip-import', 'false', '--style', ECommandAdditionalArgumentsStyle.LESS],
        ['', '', 'generate', 'component', 'test', '--skip-import', 'true', '--style', ECommandAdditionalArgumentsStyle.LESS],
        ['', '', 'generate', 'component', 'test', '--skip-import', 'false', '--style', ECommandAdditionalArgumentsStyle.SCSS],
        ['', '', 'generate', 'component', 'test', '--skip-import', 'true', '--style', ECommandAdditionalArgumentsStyle.SCSS],

        ['', '', 'generate', 'directive', 'test'],
        ['', '', 'generate', 'directive', 'test', '--skip-import', 'true'],
        ['', '', 'generate', 'directive', 'test', '--skip-import', 'false'],

        ['', '', 'generate', 'constant', 'test'],
        ['', '', 'generate', 'constant', 'test', '--skip-import', 'true'],
        ['', '', 'generate', 'constant', 'test', '--skip-import', 'false'],

        ['', '', 'generate', 'filter', 'test'],
        ['', '', 'generate', 'filter', 'test', '--skip-import', 'true'],
        ['', '', 'generate', 'filter', 'test', '--skip-import', 'false'],

        ['', '', 'generate', 'service', 'test'],
        ['', '', 'generate', 'service', 'test', '--skip-import', 'true'],
        ['', '', 'generate', 'service', 'test', '--skip-import', 'false'],

        ['', '', 'generate', 'factory', 'test'],
        ['', '', 'generate', 'factory', 'test', '--skip-import', 'true'],
        ['', '', 'generate', 'factory', 'test', '--skip-import', 'false'],

        ['', '', 'generate', 'provider', 'test'],
        ['', '', 'generate', 'provider', 'test', '--skip-import', 'true'],
        ['', '', 'generate', 'provider', 'test', '--skip-import', 'false'],

        ['', '', 'new', 'test', '--invalid-option'],
        ['', '', 'generate', 'component', 'test', '--invalid-option'],
        ['', '', 'generate', 'directive', 'test', '--invalid-option'],
        ['', '', 'generate', 'filter', 'test', '--invalid-option'],
        ['', '', 'generate', 'constant', 'test', '--invalid-option'],
        ['', '', 'generate', 'service', 'test', '--invalid-option'],
        ['', '', 'generate', 'factory', 'test', '--invalid-option'],
        ['', '', 'generate', 'provider', 'test', '--invalid-option'],
    ];
}

export function getCommandArguments(): ICommandArguments[] {
    return [
        {
            core: 'new',
            type: '',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, dependencies: true},
        },
        {
            core: 'new',
            type: '',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, dependencies: true},
        },
        {
            core: 'new',
            type: '',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.LESS, dependencies: true},
        },
        {
            core: 'new',
            type: '',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.SCSS, dependencies: true},
        },
        {
            core: 'new',
            type: '',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, dependencies: 'true'}
        },
        {
            core: 'new',
            type: '',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, dependencies: 'false'}
        },
        {
            core: 'new',
            type: '',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, dependencies: 'false'}
        },
        {
            core: 'new',
            type: '',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, dependencies: 'false'}
        },
        {
            core: 'new',
            type: '',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, dependencies: 'true'}
        },
        {
            core: 'new',
            type: '',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.LESS, dependencies: 'false'}
        },
        {
            core: 'new',
            type: '',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.LESS, dependencies: 'true'}
        },
        {
            core: 'new',
            type: '',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.SCSS, dependencies: 'false'}
        },
        {
            core: 'new',
            type: '',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.SCSS, dependencies: 'true'}
        },
        {
            core: 'generate',
            type: 'component',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': false}
        },
        {
            core: 'generate',
            type: 'component',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': false}
        },
        {
            core: 'generate',
            type: 'component',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.LESS, 'skip-import': false}
        },
        {
            core: 'generate',
            type: 'component',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.SCSS, 'skip-import': false}
        },
        {
            core: 'generate',
            type: 'component',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'true'}
        },
        {
            core: 'generate',
            type: 'component',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'false'}
        },
        {
            core: 'generate',
            type: 'component',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'true'}
        },
        {
            core: 'generate',
            type: 'component',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'false'}
        },
        {
            core: 'generate',
            type: 'component',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'true'}
        },
        {
            core: 'generate',
            type: 'component',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.LESS, 'skip-import': 'false'}
        },
        {
            core: 'generate',
            type: 'component',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.LESS, 'skip-import': 'true'}
        },
        {
            core: 'generate',
            type: 'component',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.SCSS, 'skip-import': 'false'}
        },
        {
            core: 'generate',
            type: 'component',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.SCSS, 'skip-import': 'true'}
        },
        {
            core: 'generate',
            type: 'directive',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': false}
        },
        {
            core: 'generate',
            type: 'directive',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'true'}
        },
        {
            core: 'generate',
            type: 'directive',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'false'}
        },
        {
            core: 'generate',
            type: 'constant',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': false}
        },
        {
            core: 'generate',
            type: 'constant',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'true'}
        },
        {
            core: 'generate',
            type: 'constant',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'false'}
        },
        {
            core: 'generate',
            type: 'filter',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': false}
        },
        {
            core: 'generate',
            type: 'filter',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'true'}
        },
        {
            core: 'generate',
            type: 'filter',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'false'}
        },
        {
            core: 'generate',
            type: 'service',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': false}
        },
        {
            core: 'generate',
            type: 'service',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'true'}
        },
        {
            core: 'generate',
            type: 'service',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'false'}
        },
        {
            core: 'generate',
            type: 'factory',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': false}
        },
        {
            core: 'generate',
            type: 'factory',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'true'}
        },
        {
            core: 'generate',
            type: 'factory',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'false'}
        },
        {
            core: 'generate',
            type: 'provider',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': false}
        },
        {
            core: 'generate',
            type: 'provider',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'true'}
        },
        {
            core: 'generate',
            type: 'provider',
            name:
                {
                    lowerCamel: 'test',
                    upperCamel: 'Test',
                    snake: 'test',
                    kebap: 'test',
                    allCaps: 'TEST'
                },
            additional: {style: ECommandAdditionalArgumentsStyle.CSS, 'skip-import': 'false'}
        }
    ];
}
