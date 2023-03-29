const path = require('path')

// 打包生成index.html文件
const HtmlWebPackPlugin = require('html-webpack-plugin');
// 定义全局变量 ---> index.html 中使用的 <% B变量 %>
const { DefinePlugin } = require('webpack');

const { VueLoaderPlugin } = require('vue-loader/dist/index');
module.exports = {
    target:"web",
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname,"../build"),//不能使用相对路径: ./
        filename:"js/build.js",
        assetModuleFilename:"images/[name]_[hash:6][ext]"//webpack5 全局设置 url-loader
    },
    resolve:{
        //自动添加文件扩展名设置
        extensions:['.vue','.js','.jsx','.json','.tsx','.mjs','.ts'],
        //路径别名设置
        alias:{
            "@":path.resolve(__dirname,'../src'),
            "js":path.resolve(__dirname,'../src/js')
        }
    },
    // 使用webpack watch 保存自编译
    // watch:true,
    // webpack-dev-server配置
    module:{
        // 配置如何解析js以外的文件
        rules:[
            {
                test:/.vue$/,
                loader:"vue-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            title:"hello world11",
            template:"./public/index.html"//为打包的index.html文件指定模板（可选）
        }),
        new DefinePlugin({
            BASE_URL:"'./'",
        }),
        new VueLoaderPlugin()
    ]
}