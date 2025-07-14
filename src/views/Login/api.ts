/*
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2025-05-23 15:10:57
 * @LastEditors: lixintao
 * @LastEditTime: 2025-05-26 13:31:44
 * @Descripttion: 
 */
import { createAxios } from '@/api/base.ts';
const requestObj = createAxios({
  baseURL: '',
});

/**
 * 接口调用
 * @returns
 */
export const loginRequest = (params: any) => {
  return requestObj.request({
    method: 'post',
    url: '/yyzt-web/auth/login.do',
    params,
  });
};
export const getResourceTree = (params: any) => {
  return requestObj.request({
    url: '/yyzt-web/auth/resource/getResourceTree.do',
    params,
  });
};
