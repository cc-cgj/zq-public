const path = require('path')
const { merge } = require("webpack-merge")
const common = require("./webpack.comm.config.js")
// 自动打包之前删除之前打包生成的文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 将对应(文件夹下所有文件)/文件复制到打包后的文件夹中，一般在生产阶段使用
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = merge(common, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "../assets"),
                    to: path.resolve(__dirname, '../build/assets'),//放到output文件夹下
                    globOptions: {
                        ignore: [
                            "**/index.html"
                        ]
                    }
                }
            ]
        })
    ]
})