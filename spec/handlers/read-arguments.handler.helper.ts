export function generateArguments() {
    return [
        ['', '', 'new', 'test'],
        ['', '', 'new', 'test', '--style', 'css'],
        ['', '', 'new', 'test', '--style', 'less'],
        ['', '', 'new', 'test', '--style', 'scss'],
        ['', '', 'new', 'test', '--dependencies', 'true'],
        ['', '', 'new', 'test', '--dependencies', 'false'],

        ['', '', 'new', 'test', '--dependencies', 'false', '--style', 'css'],
        ['', '', 'new', 'test', '--dependencies', 'true', '--style', 'css'],
        ['', '', 'new', 'test', '--dependencies', 'false', '--style', 'less'],
        ['', '', 'new', 'test', '--dependencies', 'true', '--style', 'less'],
        ['', '', 'new', 'test', '--dependencies', 'false', '--style', 'scss'],
        ['', '', 'new', 'test', '--dependencies', 'true', '--style', 'scss'],

        ['', '', 'generate', 'component', 'test'],
        ['', '', 'generate', 'component', 'test', '--style', 'css'],
        ['', '', 'generate', 'component', 'test', '--style', 'less'],
        ['', '', 'generate', 'component', 'test', '--style', 'scss'],
        ['', '', 'generate', 'component', 'test', '--skip-import', 'true'],
        ['', '', 'generate', 'component', 'test', '--skip-import', 'false'],

        ['', '', 'generate', 'component', 'test', '--skip-import', 'false', '--style', 'css'],
        ['', '', 'generate', 'component', 'test', '--skip-import', 'true', '--style', 'css'],
        ['', '', 'generate', 'component', 'test', '--skip-import', 'false', '--style', 'less'],
        ['', '', 'generate', 'component', 'test', '--skip-import', 'true', '--style', 'less'],
        ['', '', 'generate', 'component', 'test', '--skip-import', 'false', '--style', 'scss'],
        ['', '', 'generate', 'component', 'test', '--skip-import', 'true', '--style', 'scss'],

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

export function getResults() {
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
            additional: {style: 'css', dependencies: true}
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
            additional: {style: 'css', dependencies: true}
        }, {
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
            additional: {style: 'less', dependencies: true}
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
            additional: {style: 'scss', dependencies: true}
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
            additional: {style: 'css', dependencies: 'true'}
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
            additional: {style: 'css', dependencies: 'false'}
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
            additional: {style: 'css', dependencies: 'false'}
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
            additional: {style: 'css', dependencies: 'true'}
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
            additional: {style: 'less', dependencies: 'false'}
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
            additional: {style: 'less', dependencies: 'true'}
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
            additional: {style: 'scss', dependencies: 'false'}
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
            additional: {style: 'scss', dependencies: 'true'}
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
            additional: {style: 'css', 'skip-import': false}
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
            additional: {style: 'css', 'skip-import': false}
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
            additional: {style: 'less', 'skip-import': false}
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
            additional: {style: 'scss', 'skip-import': false}
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
            additional: {style: 'css', 'skip-import': 'true'}
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
            additional: {style: 'css', 'skip-import': 'false'}
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
            additional: {style: 'css', 'skip-import': 'false'}
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
            additional: {style: 'css', 'skip-import': 'true'}
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
            additional: {style: 'less', 'skip-import': 'false'}
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
            additional: {style: 'less', 'skip-import': 'true'}
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
            additional: {style: 'scss', 'skip-import': 'false'}
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
            additional: {style: 'scss', 'skip-import': 'true'}
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
            additional: {style: 'css', 'skip-import': false}
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
            additional: {style: 'css', 'skip-import': 'true'}
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
            additional: {style: 'css', 'skip-import': 'false'}
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
            additional: {style: 'css', 'skip-import': false}
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
            additional: {style: 'css', 'skip-import': 'true'}
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
            additional: {style: 'css', 'skip-import': 'false'}
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
            additional: {style: 'css', 'skip-import': false}
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
            additional: {style: 'css', 'skip-import': 'true'}
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
            additional: {style: 'css', 'skip-import': 'false'}
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
            additional: {style: 'css', 'skip-import': false}
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
            additional: {style: 'css', 'skip-import': 'true'}
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
            additional: {style: 'css', 'skip-import': 'false'}
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
            additional: {style: 'css', 'skip-import': false}
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
            additional: {style: 'css', 'skip-import': 'true'}
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
            additional: {style: 'css', 'skip-import': 'false'}
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
            additional: {style: 'css', 'skip-import': false}
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
            additional: {style: 'css', 'skip-import': 'true'}
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
            additional: {style: 'css', 'skip-import': 'false'}
        }
    ];
}
