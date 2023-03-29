const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry: './src/main.ts',
    output: {
        filename: "build.js",
        path: path.resolve(__dirname, 'build')
    },
    resolve:{
        extensions:['.ts','.js']
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ]
}   