module.exports = {
  plugins: [
    // babel-plugin-import
    // [
    //   'import',
    //   {
    //     libraryName: 'element-plus',
    //     libraryDirectory: 'es/components',
    //     // camel2DashComponentName: false, //将引入的组件名转化为"-"连接的文件名
    //     customName(name, file) {
    //       const filename = file.opts.filename
    //       return filename.replace(/el-/, '')
    //     },
    //     customStyleName(name) {
    //       return `element-plus/theme-chalk/${name}.css`
    //     }
    //   }
    // ]
  ],
  presets: ['@vue/cli-plugin-babel/preset']
}
