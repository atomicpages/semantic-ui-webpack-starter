const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: [
        './app/index.js',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
    ], // where the bundler starts the bundling process
    output: { // where the bundled code is saved
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            semantic: path.resolve(__dirname, 'semantic/dist/'),
            semantic_source: path.resolve(__dirname, 'semantic/src/'),
            jquery: path.resolve(__dirname, 'node_modules/jquery/src/jquery')
        }
    },
    module: {
        loaders: [
            {
                test: /\.less$/, // import css from 'foo.less';
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff2?|png|gif|jpe?g|tiff?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            }
        ]
    },
    devtool: 'eval-source-map',
    devServer: {
        compress: true,
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new DashboardPlugin(),
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
