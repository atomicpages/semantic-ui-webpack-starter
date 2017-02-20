const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js', // where the bundler starts the bundling process
    output: { // where the bundled code is saved
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        alias: {
            semantic: path.resolve(__dirname, 'semantic/src/'),
            jquery: path.resolve(__dirname, 'node_modules/jquery/src/jquery')
        }
    },
    module: {
        loaders: [
            {
                test: /\.(png|gif)$/,
                loader: 'url-loader?limit=1024&name=[name]-[hash:8].[ext]!image-webpack-loader'
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader'
            },
            {
                test: /\.less$/, // import css from 'foo.less';
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    devtool: 'eval-source-map',
    devServer: { compress: true },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            filename: 'index.html',
            inject: 'body' // inject scripts before closing body tag
        }),
        new webpack.ProvidePlugin({
           $: 'jquery',
           jQuery: 'jquery',
           'window.jQuery': 'jquery'
       })
    ]
};
