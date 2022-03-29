const package = require('./package.json')
const path = require('path');
const moment = require('moment');
const Webpack = require('webpack')
const WebpackBar = require('webpackbar');
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

const BANNER = `${package.displayName} v${package.version}
${package.description}
Build at ${moment().format('YYYY-MM-DD')}
@author: ${package.author}
@link: ${package.homepage}`

module.exports = {
    mode: 'production',
    target: 'web',
    context: path.resolve(__dirname),
    entry: {
        'main': './src/js/main.js',
        'style': './src/css/style.scss'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader']
        }]
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        devtoolNamespace: '',
        filename: 'static/js/[name].min.js'
    },
    plugins: [
        new WebpackBar(),
        new ESLintPlugin({
            fix: true,
            formatter: 'visualstudio',
            lintDirtyModulesOnly: false,
        }),
        new Webpack.BannerPlugin({
            banner: BANNER,
            include: package.name
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].min.css'
        }),
        new RemoveEmptyScriptsPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "public", to: "." },
            ],
        }),
    ],
    devtool: 'nosources-source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    }
};
