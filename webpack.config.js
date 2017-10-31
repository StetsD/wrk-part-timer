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
        from: path.normalize(`${__dirname}/assets/**/*`),
        to: path.normalize(`${__dirname}/app/public/`)
    }
]);

module.exports = {
    entry: path.normalize(`${__dirname}/src/index.js`),
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: '[name].bundle.js'
    },
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
                outputPath: path.normalize(`${__dirname}/app/public/`),
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
    // node: {
    //     fs: 'empty'
    // }
}
