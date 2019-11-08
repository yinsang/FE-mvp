const webpack = require('webpack')
module.exports = {

    // entry: './path/to/my/entry/file.js',
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            },
                'postcss-loader', 'less-loader']
        }]
    },
};