const { merge } = require("webpack-merge")
const common = require("./webpack.comm.config.js")
const path = require('path')
module.exports = merge(common, {
    mode: "development",//development（开发阶段）-打包后不压缩代码 production（上线阶段）
    devtool: "source-map", //代码映射，便于找到出错代码的文件路径，打包后会生成映射文件 build.js.map
    devServer: {
        static: {
            directory: path.join(__dirname, './assets'),
            publicPath: "/assets"
        },
        open: false,
        port: 7777,
        hot: true,//'only'
    }
})