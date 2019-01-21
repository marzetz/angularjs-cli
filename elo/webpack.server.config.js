const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const compiler = webpack(require('./webpack.config'));

const server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '/dist'),
    compress: true,
    host: '0.0.0.0',
    port: '4300'
});
server.listen('4300', '0.0.0.0', () => {
    console.log('Open http://0.0.0.0:4300');
});
