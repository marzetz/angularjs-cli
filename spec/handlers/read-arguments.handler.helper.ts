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
        }
    ];
}
