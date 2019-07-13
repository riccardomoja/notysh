var merge = require('webpack-merge');
var common = require('./webpack.config.js');
var packagejson = require("./package.json");

const filename = packagejson.alias?packagejson.alias:packagejson.name;
function DtsBundlePlugin(){}
DtsBundlePlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', function(){
        var dts = require('dts-bundle');
        dts.bundle({
            name: 'stocaps',
            main: 'dist/**/*.d.ts',
            out: './'+filename+'.d.ts',
            removeSource: true,
            outputAsModuleFolder: true // to use npm in-package typings
        });


    });
};

module.exports = merge(common, {
    mode: 'production',
    plugins:[
        new DtsBundlePlugin()
    ]

});
