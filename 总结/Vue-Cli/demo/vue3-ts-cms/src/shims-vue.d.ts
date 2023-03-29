/* eslint-disable */
// import('@/views/login.vue') 引入的组件通过这里声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
