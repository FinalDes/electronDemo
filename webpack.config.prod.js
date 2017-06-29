var path = require('path');

var webPack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');

module.exports = webpackMerge(commonConfig,{
    plugins:[
        new webPack.optimize.UglifyJsPlugin()
    ]
})