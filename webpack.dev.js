const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        compress: true,
        port: 9000,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        client: {
            progress: true,
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    optimization: {
        minimize: false
    }
});
