const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
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
            {test: /\.scss|.sass$/, use: [
                {loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}
            ]}
        ]
    },
    plugins: [
        HtmlWebpackConfig, extractSass
    ]
}
