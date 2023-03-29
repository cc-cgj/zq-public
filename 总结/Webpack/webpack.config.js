const path = require('path')

// 自动打包之前删除之前打包生成的文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 打包生成index.html文件
const HtmlWebPackPlugin = require('html-webpack-plugin');
// 定义全局变量 ---> index.html 中使用的 <% B变量 %>
const { DefinePlugin } = require('webpack');
// 将对应(文件夹下所有文件)/文件复制到打包后的文件夹中，一般在生产阶段使用
const CopyWebpackPlugin = require("copy-webpack-plugin");
// vue加载器使用的插件
const { VueLoaderPlugin } = require('vue-loader/dist/index');
module.exports = {
    mode:"development",//development（开发阶段）-打包后不压缩代码 production（上线阶段）
    devtool:"source-map", //代码映射，便于找到出错代码的文件路径，打包后会生成映射文件 build.js.map
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname,"./build"),//不能使用相对路径: ./
        filename:"js/build.js",
        assetModuleFilename:"images/[name]_[hash:6][ext]"//webpack5 全局设置 url-loader
    },
    // 使用webpack watch 保存自编译
    watch:true,
    // webpack-dev-server配置
    devServer:{
        /** 
         * @introduce 将对应(文件夹下所有文件)/文件复制到打包后的文件夹中（本地服务器） 
         * @detail 开发阶段可代替copy-webpack-plugin插件
         * */
        // 旧版 contentBase:"" //所要复制的本地文件夹路径
        static:"",//所要复制的本地文件夹路径
        open:true,
        port:7777,
        hot:true,//'only'
        host:"0.0.0.0",
        proxy:{
            // "/api":"http://localhost:88888",//axios.get('/api/mock')请求的地址为axios.get('http://localhost:88888/api/mock')    
            /** or */
            "/api":{
                target:"http://localhost:88888",
                pathRewrite:{
                    "^/api":""
                },
                secure:false,//默认情况下为true，表示将不接受在 HTTPS 上运行且证书无效的后端服务器，如果需要设为false
                changeOrigin:true//默认情况下，代理时会保留主机头的来源(即请求头的来源为http:localhost:7777)，可以将 changeOrigin 设置为 true 以覆盖此行为
            }
        }
    },
    resolve:{
        //自动添加文件扩展名设置
        enxtensions:['.vue','.js','.jsx','.json','.tsx','.mjs','.ts'],
        //路径别名设置
        alias:{
            "@":path.resolve(__dirname,'./src'),
            "js":path.resolve(__dirname,'./src/js')
        }
    },
    module:{
        // 配置如何解析js以外的文件
        rules:[
            {
                test:/\.css$/,//正则表达式
                // 1.loader的语法糖
                // loader:"css-loader"
                // 2.完整写法
                // use:[
                //     {loader:"css-loader",options:{}}
                // ]
                use:[ 
                    "style-loader",
                    "css-loader",
                    //执行顺序为从后往前
                    /**
                     * index.css->.title{ color:red; }
                     * 最后浏览器解析为
                     * <head><style> .title:{ color:red; } </style></head>
                     */
                    // 使用postcss增加浏览器前缀，可通过postcss.config.js配置或参考下例
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    require('autoprefixer')
                                ]
                            }
                        }
                    }

                ]
            },
            {
                test:/\.less$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test:/\.(jpe?g|png|svg|gif)$/i,
                use:{
                    loader:"file-loader",
                    options:{
                        outputPath:"images",//打包文件存放的文件夹
                        name:"images/[name]_[hash:6].[ext]"//打包生成的文件路径--name文件名不包括.后缀名，hash:6 哈希取六位.文件扩展名
                    }
                }
            },
            {
                test:/\.(jpe?g|png|svg|gif)$/i,
                use:{
                    loader:"url-loader",
                    options:{
                        limit:100 * 1024, //(将小于100kb的图片转为base64 URL 存放在js文件中)单位为字节
                        outputPath:"images",//打包文件存放的文件夹
                        name:"images/[name]_[hash:6].[ext]"//打包生成的文件路径--name文件名不包括.后缀名,hash:6 哈希取六位.文件扩展名
                    },
                    type: 'javascript/auto' //webpack 5 需要
                }
            },
            // 使用字体图标
            {
                test:/\.(eot|ttf|woff2?)$/i,
                use:{
                    loader:"file-loader",
                    options:{
                        name:"font/[name]_[hash:6].[ext]"//打包生成的文件路径--name文件名不包括.后缀名，hash:6 哈希取六位.文件扩展名
                    }
                }
            },
            // babel-loader
             {
                test:/\.js$/i,
                use:{
                    loader:"babel-loader",
                    options:{
                        // plugins:[
                        //     "@babel/plugin-transform-arrow-funtions",
                        //     "@babel/plugin-transform-block-scoping"
                        // ]
                        presets:[
                            "@babel-preset-env"
                        ]
                    }
                }
            },
            {
                test:/.vue$/,
                loader:"vue-loader"
            },
            /**
             * @desciption webpack5
             */
            // file-loader
            {
                test:/\.(jpe?g|png|svg|gif)$/i,
                type:"asset/resource"
            },
            // url-loader
            {
                test:/\.(jpe?g|png|svg|gif)$/i,
                type:"asset",
                generator:{
                    filename:"images/[name]_[hash:6][ext]"//ext包括.
                },
                parser:{
                    dataUrlCondition:{
                        maxSize:100 * 1024
                    }
                } 
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            title:"hello world",
            template:"./public/index.hteml"//为打包的index.html文件指定模板（可选）
        }),
        new DefinePlugin({
            BASE_URL:"'./'"
        }),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin({
            patterns:[
                {
                    to:"./",
                    from:"public",
                    globOptions:{
                        ignore:[
                            "**/index.html"
                        ]
                    }
                }
            ]
        })
    ]
}