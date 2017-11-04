const {config} = require('./config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const {getMode, setMode} = require('./mode');
setMode(process.env.NODE_ENV);

const HtmlWebpackConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
});

const ProvidePlugin = new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    "window.jQuery": 'jquery',
    'IS_DEV': 'IS_DEV'
});

const copyWebpackPlugin = new CopyWebpackPlugin([
    {
        from: `${config.paths.assets}/**/*`,
        to: config.paths.public
    }
]);

module.exports = {
    entry: `${config.paths.src}/index.js`,
    output: {
        path: config.paths.app,
        filename: '[name].bundle.js'
    },
    // node: {
    //     __dirname: false,
    //     __filename: false
    // },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.s[ac]ss$/, use: [
                {loader: "style-loader"},
                {loader: "css-loader"},
                {loader: "sass-loader", options: {
                    includePaths: ['./node_modules/semantic-ui-sass/semantic-ui.scss']
                }}
            ]},
            {test: /\.(mp3|wav|ogg)$/, loader: 'file-loader', options: {
                name: '[name].[ext]',
                outputPath: config.paths.public,
                useRelativePath: getMode()
            }}
        ]
    },
    plugins: [
        HtmlWebpackConfig, extractSass, ProvidePlugin,
        copyWebpackPlugin
    ],
    resolve:{
        alias: {
            'IS_DEV': path.resolve(__dirname, './mode')
        }
    },
    target: 'electron'
}
