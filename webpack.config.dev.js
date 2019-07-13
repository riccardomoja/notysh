var merge = require('webpack-merge');
var common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'development',
    optimization: {
        usedExports: true
    },
    // devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
         hot:false
    },
    plugins:[
        // new webpack.HotModuleReplacementPlugin() ,
    ],

});
