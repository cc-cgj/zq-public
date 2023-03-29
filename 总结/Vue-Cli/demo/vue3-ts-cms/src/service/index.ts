import ZQRequest from './request'

const zqRequest = new ZQRequest({
  baseURL: 'http://httpbin.org/',
  timeout: 1000,
  interceptor: {
    requestInterceptor(config) {
      console.log('请求拦截成功')
      return config
    },
    requestInterceptorCatch(err) {
      console.log('请求拦截失败', err)
    },
    responseInterceptor(config) {
      console.log('响应拦截成功')
      return config
    },
    responseInterceptorCatch(err) {
      console.log('响应拦截失败', err)
    }
  }
})

export default zqRequest
