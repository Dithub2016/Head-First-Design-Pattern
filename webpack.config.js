const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, 'src'),
    entry: {
        Duck: './Duck.ts',
        Character: './Character.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
