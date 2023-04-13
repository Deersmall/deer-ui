var webpack = require('webpack');

var config = {

    entry: "./app/index.js",

    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: __dirname + '/dist', // `dist` is the destination
        filename: 'bundle.js',
    },
};

module.exports = config;
