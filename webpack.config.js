const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: path.normalize(`${__dirname}/src/index.js`),
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        HtmlWebpackConfig
    ]
}
