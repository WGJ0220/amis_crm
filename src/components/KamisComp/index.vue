<!--
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2025-01-14 10:36:26
 * @LastEditors: lixintao
 * @LastEditTime: 2025-07-11 15:51:46
 * @Descripttion: 
-->
<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { amisRequire } from '@king-fisher/crm-amis-next';
const amis = amisRequire('amis/embed');
const props = defineProps({
  amisJSON: {
    type: [Object, String],
    default: () => ({}),
  }
});
const amisEnv = {
  // dialog挂载配置
  getModalContainer: () => document.body,
  // 请求拦截处理
  // fetcher: (api: any) => {
  //   console.log(api);
    
  //   // 分页组件入参会自动补充，这里需要调整
  //   const queryString = new URLSearchParams(api.query).toString();
  //   let url = api.url.split('?')[0];
  //   if (api.method === 'get') {
  //     url += `?${queryString}`;
  //   }
  //   // 处理formdata
  //   if (api.dataType?.indexOf('form-data') >= 0) {
  //     const formData = new FormData();
  //     Object.keys(api.body).forEach(key => {
  //       formData.set(key, api.body[key]);
  //     });
  //     api.body = formData;
  //   }
  //   // 补充公共配置
  //   return fetch(url, {
  //     ...api,
  //     headers: {
  //       ...api.config?.headers,
  //       token: localStorage.token,
  //     }
  //   }).then(response => response.json()).then((res: any) => {
  //     // 登录失效
  //     if (res.flag === 4000) {
  //       window.location.href = '#/login';
  //     }
  //     // 返回数据格式化
  //     return {
  //       data: {
  //         ...res,
  //         status: res.flag,
  //       },
  //     };
  //   }).catch((e: any) => {
  //     console.warn('fetch error: ', e);
  //   });
  // }
};
onMounted(() => {
  // 将dialog挂载到body上，需要为全局添加样式
  document.body.classList.add('amis-scope');
  amis.embed('#amisRoot', props.amisJSON, {}, amisEnv);
});
watch(
  () => props.amisJSON,
  () => amis.embed('#amisRoot', props.amisJSON, {}, amisEnv),
);
</script>

<template>
  <div id="amisRoot"></div>
</template>
