import {sum} from './js/math'
import _ from 'lodash-es'
import './css/index.css'
import './css/title.less'
import './css/title.scss'
import ts from './ts/index'
import App from './vue/App.vue'
import { createApp } from 'vue'
console.log('Hello Wolrd')
console.log(sum(20,30));
console.log(_.join(['a','b'],'c'));
console.log(ts(30,30));
createApp(App).mount("#app")