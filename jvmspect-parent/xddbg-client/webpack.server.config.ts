const nodeExternals = require('webpack-node-externals');
const path = require('path');
import { Configuration } from "webpack";

const config: Configuration = {
    target: 'node',
    externals: [nodeExternals()],
    entry: path.resolve(__dirname, '..', 'server/server.tsx'),
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/dist/server/',
        filename: 'server.js',
        library: 'app',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            components: path.resolve(__dirname, '..', 'src/components')
        }
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(ttf|eot|otf|svg|png)$/,
                loader: 'file-loader?emitFile=false'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader?emitFile=false'
            }
        ]
    }
};

export default config;