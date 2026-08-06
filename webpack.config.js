/* eslint-env node */
/* eslint-disable @typescript-eslint/no-require-imports */
const webpack = require('webpack');
const path = require('path');
const compressionPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        // Eine Datei mit allen vier Karten. HACS registriert genau diese
        // automatisch als Lovelace-Resource, damit entfällt jede Handarbeit.
        'brokkoli-card': path.resolve(__dirname, 'src', 'brokkoli-bundle.ts'),
        // Leere Platzhalter unter den alten Dateinamen, damit bestehende
        // Resource-Einträge kein 404 werfen. Siehe src/stubs/.
        'brokkoli-list-card': path.resolve(__dirname, 'src', 'stubs', 'legacy-list-card.ts'),
        'brokkoli-area-card': path.resolve(__dirname, 'src', 'stubs', 'legacy-area-card.ts'),
        'brokkoli-sensor-assignment-card': path.resolve(__dirname, 'src', 'stubs', 'legacy-sensor-assignment-card.ts')
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
        // CopyWebpackPlugin für translations/ entfernt — JSON wird jetzt
        // direkt via static import in translation-utils.ts ins Bundle gebacken.
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
};