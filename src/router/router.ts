/*
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2023-10-30 10:38:08
 * @LastEditors: lixintao
 * @LastEditTime: 2025-07-11 15:08:25
 * @Descripttion: 路由
 */
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
import template from '@/views/template.vue';
import HomeView from '@/views/Home/index.vue';
import LoginView from '@/views/Login/index.vue';
let baseurl = '';
if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  baseurl = '/microApp/data_center';
}
const routerList = [] as any;
const authorizeList = routerList.map((item: string) => {
  return {
    name: item,
    authorize: true,
  };
});

/**
 * 原始总路由列表
 * 默认 authorize 无权访问
 */
const oriRoutes = [
  {
    path: `/template`,
    name: 'template',
    component: template,
    meta: {
      authorize: true,
      title: 'template',
      dev: true,
    },
  },
  {
    path: `/login`,
    name: 'login',
    component: LoginView,
    meta: {
      authorize: true,
      title: 'login',
      dev: true,
    },
  },
  {
    path: `${baseurl}/home`,
    name: 'home',
    component: HomeView,
    meta: {
      authorize: true,
      title: 'home',
    },
  },
  {
    path: `${baseurl}/adconf`,
    name: 'adconf',
    component: HomeView,
    meta: {
      authorize: true,
      title: 'adconf',
    },
  },
  {
    path: `${baseurl}/qrcode`,
    name: 'qrcode',
    component: () => import('@/views/QRCode/index.vue'),
    meta: {
      authorize: true,
      title: 'qrcode',
    },
  },
  {
    path: `${baseurl}/qrcode/add`,
    name: 'qrcode-add',
    component: () => import('@/views/QRCode/Add.vue'),
    meta: {
      authorize: true,
      title: '新增二维码',
    },
  },
  {
    path: `${baseurl}/qrcode/detail`,
    name: 'qrcode-detail',
    component: () => import('@/views/QRCode/Detail.vue'),
    meta: {
      authorize: true,
      title: '二维码详情',
    },
  },
  {
    path: `${baseurl}/audit_deposit`,
    name: 'DepositReview',
    component: () => import('@/views/AuditManagement/DepositReview.vue'),
    meta: {
      authorize: true,
      title: '入金审核',
    },
  },
  {
    path: `${baseurl}/audit_fund`,
    name: 'FundSubscribe',
    component: () => import('@/views/AuditManagement/FundSubscribe.vue'),
    meta: {
      authorize: true,
      title: '基金认购',
    },
  },
  {
    path: `${baseurl}/audit_market`,
    name: 'MarketSubscribe',
    component: () => import('@/views/AuditManagement/MarketSubscribe.vue'),
    meta: {
      authorize: true,
      title: '行情订阅',
    },
  },
  {
    path: `${baseurl}/audit_transfer`,
    name: 'TransferMethod',
    component: () => import('@/views/AuditManagement/TransferMethod.vue'),
    meta: {
      authorize: true,
      title: '转账方式',
    },
  },
  {
    path: `${baseurl}/file_manage`,
    name: 'file_manage',
    component: () => import('@/views/FileManagement/index.vue'),
    meta: {
      authorize: true,
    },
  },
];
/**
 * 授权routes列表
 */
const routes = () =>
  oriRoutes.map(item => {
    const index = authorizeList.findIndex(
      (authorItem: any) => authorItem.name === item.name
    );
    if (index > -1) {
      item.meta.authorize = authorizeList[index].authorize;
    }
    return item;
  });

export default routes;
