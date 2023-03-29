import { createApp } from 'vue'
import App from './App.vue'
import route from './router/index'
import './service/request/index'

import { registerApp } from './global/index'
import zqRequest from './service'

type DataType = {
  args: any
  headers: any
  origin: string
  url: string
}

// zqRequest.request({
//   url: 'get',
//   method: 'get',
//   params: {
//     name: 'cgj',
//     height: 1.88
//   }
// })
zqRequest
  .request<DataType>({
    url: 'get',
    method: 'get',
    params: {
      name: 'cgj',
      height: 1.88
    },
    showLoading: true,
    interceptor: {
      requestInterceptor(config) {
        console.log('单个的请求拦截成功')
        return config
      },
      responseInterceptor(config) {
        console.log('单个的相应拦截成功')
        return config
      }
    }
  })
  .then((data: DataType) => {
    console.log(data)
  })
const app = createApp(App)
app.use(registerApp)
app.use(route)
app.mount('#app')
