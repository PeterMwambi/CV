const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const historyApiFallback = require('connect-history-api-fallback');
const reactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
require('dotenv').config();


module.exports = {
    entry: ['webpack-hot-middleware/client?reload=true', './public/app/client/index.js'],
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, './public/dist'),
    },
    mode: process.env.ENVIRONMENT,
    devServer: {
        static: {
            directory: path.join(__dirname, './public/dist'),
        },
        port: process.env.CLIENT_PORT,
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/dist/index.html',
            filename: 'index.html'
        }),
        new webpack.EnvironmentPlugin({
            ENVIRONMENT: 'development',
            SERVER_PORT: 8080,
            CLIENT_PORT: 9000,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new reactRefreshWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            require.resolve('react-refresh/babel')
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: 'public/app/client/src',
                        }
                    }

                ]
            }
        ]
    },
    resolve: {
        alias: {
            'containers': path.resolve(__dirname, 'public/app/client/src/containers'),
            'pages': path.resolve(__dirname, 'public/app/client/src/pages'),
            'assets': path.resolve(__dirname, 'public/app/client/src/assets'),
            'css': path.resolve(__dirname, 'public/app/client/src/css'),
            'components': path.resolve(__dirname, 'public/app/client/src/components'),
            'modules': path.resolve(__dirname, 'public/app/client/src/modules'),
        },
        extensions: ['.js', '.jsx']
    }

}