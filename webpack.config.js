const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve('./app/index.js'), // where the bundler starts the bundling process
    output: {
        // where the bundled code is saved
        path: path.resolve('dist'),
        filename: 'index_bundle.js',
    },
    externals: {
        jquery: 'jQuery',
    },
    resolve: {
        alias: {
            semantic: path.resolve(__dirname, 'semantic/src/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 1024
                }
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader',
            },
            {
                test: /\.less$/, // import css from 'foo.less';
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(ttf|eot|svg|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
        ],
    },
    devtool: 'eval-source-map',
    devServer: { compress: true },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body', // inject scripts before closing body tag
        }),
    ],
};
