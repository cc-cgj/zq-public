import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { ZQRequestInterceptor, ZQRequestConfig } from './type'
import 'element-plus/es/components/loading/style/css'
import { ElLoading } from 'element-plus'
// import {  } from 'element-plus/es/components/loading/src/types'
// ElLoading.service()
const DEFAULT_SHOW_LOADING = true
class ZQRequest {
  instance: AxiosInstance
  interceptor?: ZQRequestInterceptor
  loadding: any
  showLoading = true
  constructor(config: ZQRequestConfig) {
    this.instance = axios.create(config)
    this.interceptor = config.interceptor
    /**
     * @description: 实例化的拦截
     */
    // this.instance.interceptors.request.use(
    //   this.interceptor?.requestInterceptor,
    //   this.interceptor?.requestInterceptorCatch
    // )
    // this.instance.interceptors.response.use(
    //   this.interceptor?.responseInterceptor,
    //   this.interceptor?.responseInterceptorCatch
    // )

    /**
     * @description: 全局拦截
     */
    this.instance.interceptors.request.use((config) => {
      if (this.showLoading) {
        this.loadding = ElLoading.service({
          text: '加载中...'
        })
      }
      console.log('全局请求拦截成功')
      return config
    })
    this.instance.interceptors.response.use((config) => {
      console.log('全局响应拦截成功')
      return config.data
    })
  }
  request<T>(config: ZQRequestConfig<T>): Promise<T> {
    /**
     * @description: 单个请求的拦截
     */
    // if (config.interceptor?.requestInterceptor) {
    //   config = config.interceptor.requestInterceptor(config)
    // }
    return new Promise((resolve, reject) => {
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          /**
           * @description: 单个请求对数据的处理
           */
          if (config.interceptor?.responseInterceptor) {
            res = config.interceptor.responseInterceptor(res)
          }

          console.log(res)
          resolve(res)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
        .finally(() => {
          this.showLoading = DEFAULT_SHOW_LOADING
          this.loadding?.close()
        })
    })
  }
}

export default ZQRequest
