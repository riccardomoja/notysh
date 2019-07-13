var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require( 'path' );
var packagejson = require("./package.json");


const filename = packagejson.alias?packagejson.alias:packagejson.name;

module.exports = {
    entry: {
        main:['./src/app/index.ts'],
    },
    resolve:{
        extensions:['.ts']
    },
    output: {
        filename: filename + '.js',
        chunkFilename:'starter.[contenthash].chunk.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target:"node",
    module:{
        rules:[
            {
                test: /\.ts?$/,
                use: [
                    { loader:'ts-loader' },
                    { loader: "ifdef-loader", options: {
                        ERROR:false,
                        } }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
    ]
};
