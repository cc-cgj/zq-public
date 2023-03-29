const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
// 定义全局变量 ---> index.html 中使用的 <% B变量 %>
const { DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require("copy-webpack-plugin");
// 自动打包之前删除之前打包生成的文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./src/main.js",
    devtool:"source-map",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "build.js"
    },
    target:"web", // node/web
    devServer: {
        // contentBase: "./assets"
        // static:"assets",
        // static:{
        //     directory: path.join(__dirname, './assets'),
        //     publicPath:"/assets"
        // },
        hot:true
    },
    resolve:{
        extensions:['.vue','.js'],
        alias:{
            "@":path.resolve(__dirname,"./src"),
            "js":path.resolve(__dirname,"./src/js")
        }
    },
    // watch:true,
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            // {
            //     test:/\.(jpe?g|gif|png)$/i,
            //     use:{
            //         loader:"url-loader",
            //         options:{
            //             limit:10 * 1024, //(将小于10kb的图片转为base64 URL 存放在js文件中)单位为字节
            //             // outputPath:"images",//打包文件存放的文件夹
            //             name:"images/[name]_[hash:6].[ext]"//打包生成的文件路径--name文件名不包括.后缀名,hash:6 哈希取六位.文件扩展名
            //         }
            //     },
            //     type: 'javascript/auto' //webpack 5 需要
            // },

            /**
             * @desciption webpack5
             */

            {
                test:/\.(jpe?g|png|svg|gif)$/i,
                type:"asset",
                generator:{
                    filename:"images/[name]_[hash:10][ext]"//ext包括.
                },
                parser:{
                    dataUrlCondition:{
                        maxSize:10 * 1024
                    }
                } 
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            title:"Hello wolrd",
            template:"./public/index.html"
        }),
        new DefinePlugin({
            BASE_URL:"'./'"    
        }),
        new VueLoaderPlugin(),
        // new CopyWebpackPlugin({
        //     patterns:[
        //         {
        //             from: "./public",//所要复制的文件夹路径 
        //             to:"./public", //复制的文件在打包后生成的文件夹的public文件夹中
        //             globOptions:{
        //                 ignore:[
        //                     "**/index.html" //指定忽略文件夹/文件
        //                     // **/: 强调忽略复制的文件夹目录下所有为index.html的文件
        //                 ]
        //             }
        //         }
        //     ]
        // })
    ]
}