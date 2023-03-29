declare module "lodash" {
  export function join(arr: any[]): void;
}

// 声明函数、变量、类

declare function foo(): void;
declare const cgjName: string;
declare const cgjHeight: number;
declare const cgjAge: number;

declare class Person {
  cgjName;
  cgjHeight;
  cgjAge;
  name: string;
}

// 声明文件

declare module "*.jpg";
declare module "*.svg";
declare module "*.png";
declare module "*.jpeg";

// import('@/views/login.vue') 导出的组件通过这里进行声明
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 命明空间

declare namespace $ {
  export function ajax(settings: any): any;
}
