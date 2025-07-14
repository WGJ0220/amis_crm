/*
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2025-01-14 10:36:26
 * @LastEditors: lixintao
 * @LastEditTime: 2025-07-08 13:45:12
 * @Descripttion: 
 */
import { App, createApp } from "vue";
import { createPinia } from 'pinia';
import '@/styles/index.css';
import AppComponent from "./App.vue";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import router from "@/router";
import i18n from './i18n';
import { useTheme } from '@/stores/theme';
import amisInit from '@king-fisher/crm-amis-next';
let app: App;
async function render(dom: string = '#data_center') {
  try {
    await (amisInit as unknown as () => void)();
  } catch (e) {
    console.error(e); // 建议也report错误信息
    console.error('amis初始化失败');
  }
  app = createApp(AppComponent);
  app
    .use(createPinia())
    .use(router)
    .use(i18n);
  // 全局变量
  app.config.globalProperties.$theme = useTheme();
  app.mount(dom);
}

// qiankun 生命周期
renderWithQiankun({
  mount(props: any) {
    console.log("[qiankun] mount", props);
    render();
  },
  bootstrap() {
    console.log("[qiankun] bootstrap");
  },
  unmount(props: any) {
    console.log("[qiankun] unmount", props);
    app.unmount();
  },
  update(props: any) {
    console.log("[qiankun] update", props);
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
