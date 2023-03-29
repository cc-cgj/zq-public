import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZQRequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface ZQRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptor?: ZQRequestInterceptor<T>
  showLoading?: boolean
}
