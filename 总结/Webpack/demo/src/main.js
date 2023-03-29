// import '../css/test.css'
import { sum } from "js/function.js";
// import { createApp } from 'vue'
// import { createApp } from 'vue/dist/vue.esm-browser.prod.js'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './vue/App.vue'

if(module.hot){
    // module.hot.accept("./function.js",function (){
    //     console.log("热模块更新了",arguments);
    // })
}
import('./js/lazy.js').then((res)=>{
    console.log(222,res);
})

createApp(
    // {
    //     template: "<h1>hello</h1>"
    // }
    App
).mount('#app')
/** @introduce 使用template模板编译 */
// import { createApp } from 'vue/dist/vue.esm-browser.prod.js'
// const app = createApp({
//     template:"<h1>hello world</h1>"
// })
// app.mount("#app")

console.log(sum(1, 2))
// console.log("hello wrold");