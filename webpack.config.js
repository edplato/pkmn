const path = require('path');

module.exports = {
    entry: './app/src/index.js',
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devServer: {
        contentBase: './app/dist'
    }
};