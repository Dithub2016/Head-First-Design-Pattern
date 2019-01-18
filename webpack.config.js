const path = require('path');
const glob = require('glob');

const entry = () => new Promise(resolve => {
    glob('src/*.ts', (err, files) => {
        resolve(files.reduce((result, file) => {
            const fileName = /src\/(.+)\.ts/.exec(file)[1];
            result[fileName] = `./${fileName}.ts`;
            return result;
        }, {}));
    });
});


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, 'src'),
    entry,
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
