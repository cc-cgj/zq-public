const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist')
    },
    mode:'development',
    resolve:{
        extensions:['.ts','.js']
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ]
}