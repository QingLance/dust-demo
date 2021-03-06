const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        app1: './src/app1/index.js',
        app2: './src/app2/index.js',
        home: './src/home/index.js',
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.vue'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['index'],
        }),
        new VueLoaderPlugin(),
    ]
}