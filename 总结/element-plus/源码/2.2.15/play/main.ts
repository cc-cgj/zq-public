import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@element-plus/theme-chalk/src/dark/css-vars.scss'
;(async () => {
  const apps = import.meta.glob('./src/*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./src/${name}.vue`]
  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = (await file()).default
  const app = createApp(App)
  app.use(ElementPlus)
  app.mount('#play')
})()
