const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    "window.jQuery": 'jquery'
});

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
            ]}
        ]
    },
    plugins: [
        HtmlWebpackConfig, extractSass, ProvidePlugin
    ]
}
