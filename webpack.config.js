const webpack = require('webpack');
const path = require('path');
const compressionPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        'flower-card': path.resolve(__dirname, 'src', 'flower-card.ts'),
        'flower-list-card': path.resolve(__dirname, 'src', 'flower-list-card.ts')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname),
    },
    optimization: {
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new compressionPlugin({
            test: /\.js(\?.*)?$/i,
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
};