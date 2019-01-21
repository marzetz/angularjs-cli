const webpack = require('webpack');
const path = require('path');
const Copy = require('copy-webpack-plugin');

const config = [
    {
        name: 'App bundle',
        mode: 'production',
        performance: {hints: false},
        context: path.resolve(__dirname, ''),
        entry: ['./app.imports.js'],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'app.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options:
                            {
                                presets: [
                                    '@babel/preset-env'
                                ],
                                compact: true
                            }
                    },
                    exclude: [/node_modules/g]
                },
                {
                    test: /\.html/,
                    loader: 'raw-loader',
                    exclude: [/node_modules/g]
                },
                {
                    test: /\.scss/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                }
            ]
        },
        plugins: [
            new Copy([
                {from: './src/assets', to: './assets'},
                {from: './src/index.html', to: './'},
            ])
        ]
    },
    {
        name: 'Vendor bundle',
        mode: 'production',
        performance: {hints: false},
        context: path.resolve(__dirname, ''),
        entry: ['./vendor.imports.js'],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'vendor.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options:
                            {
                                presets: [],
                                compact: true
                            }
                    }
                }
            ]
        },
    }
];

module.exports = config;
