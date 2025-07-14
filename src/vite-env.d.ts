/*
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2025-01-14 10:36:26
 * @LastEditors: lixintao
 * @LastEditTime: 2025-07-08 13:38:44
 * @Descripttion: 
 */
/// <reference types="vite/client" />
declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const componentOptions: ComponentOptions;
  export default componentOptions;
}
// 用于申明环境变量格式
interface ImportMetaEnv {
  readonly VITE_APP_ENV: string;
  readonly VITE_APP_BASEURL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
interface Window {
  readonly yyztWeb: string;
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $g: any;
  }
}
declare module '@king-fisher/crm-amis-next' {
  function amisInit(): void;
  export default amisInit;
}
export {};
