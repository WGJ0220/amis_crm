<script setup lang="ts">
import * as KamisComp from '@/components/KamisComp/index.vue';
// 入金方式查询接口
const searchApi = {
  url: "/yyzt-web/operation/deposit/findByPages",
  method: "get",
  requestAdaptor: (api: any, context: any) => {
    // 查询参数格式化
    const data = Object.assign({}, context.filter);
    return {
      ...api,
      data
    };
  },
  adaptor: function (data: any, response: any, api: any, context: any) {
    const payload = data.data;
    // 数据格式化
    payload.content.forEach((item: any) => {
      item.inputTimeLabel = item.inputTime ? (new Date(item.inputTime)).toLocaleDateString() : "";
    });
    return {
      status: 0,
      data: {
        items: payload.content,
        total: payload.total,
      }
    };
  },
};
// 转账信息查询接口
const searchAccountApi = {
  url: "/yyzt-web/operation/deposit/findAccountInformationList",
  method: "post",
  dataType: "form-data",
  requestAdaptor: (api: any, context: any) => {
    // 查询参数格式化
    api.data.parentId = context.id;
    return {
      ...api,
    };
  },
  adaptor: function (payload: any, response: any, api: any, context: any) {
    return {
      status: 0,
      data: {
        items: payload.data,
      }
    };
  },
};
// 入金方式表单内容
const formContent = [
  {
    "type": "input-text",
    "name": "id",
    "label": "id",
    style: {
      display: 'none'
    }
  },
  {
    "type": "select",
    "name": "type",
    "label": "类型",
    required: true,
    options: [
      { label: "FPS转数快", value: 1 },
      { label: "E-Banking网银转账", value: 2 },
      { label: "ATM/柜台转账", value: 3 },
      { label: "Check支票转账", value: 4 },
    ],
  },
  {
    "type": "input-text",
    "name": "fpsId",
    "label": "FPS ID",
    visibleOn: 'this.type == 1',
    required: true,
  },
  {
    "type": "input-text",
    "name": "fillFront",
    "label": "正面填写",
    visibleOn: 'this.type == 4',
    required: true,
  },
  {
    "type": "input-text",
    "name": "fillReverse",
    "label": "反面填写",
    visibleOn: 'this.type == 4',
    required: true,
  },
];
// 入金方式表单内容（编辑时展示的部分）
const formContentForEdit = [
  {
    visibleOn: 'this.type == 2 || this.type == 3',
    type: "button",
    label: "新增账户信息",
    level: "link",
    actionType: "dialog",
    dialog: {
      title: "新增账户信息",
      id: 'verify-dialog',
      size: "md",
      showCloseButton: true,
      body: {
        type: "form",
        justify: "space-around",
        alignItems: "center",
        reload: "accountinfo-crud",
        api: {
          method: "post",
          url: "/yyzt-web/operation/deposit/addAccountInformation",
          dataType: "form-data",
          requestAdaptor: (api: any, context: any) => {
            // 查询参数格式化
            api.body.parentId = context.id;
            return {
              ...api,
            };
          },
        },
        body: [
          {
            "type": "input-text",
            "name": "bankName",
            "label": "银行名称",
            required: true,
          },
          {
            "type": "input-text",
            "name": "bankCode",
            "label": "银行编码",
            required: true,
          },
          {
            "type": "input-text",
            "name": "accountName",
            "label": "账户全称",
            required: true,
          },
          {
            "type": "input-text",
            "name": "accountAbbreviation",
            "label": "账户简称",
            required: true,
          },
          {
            "type": "input-text",
            "name": "hkdAccount",
            "label": "港币账户",
            // required: true,
          },
          {
            "type": "input-text",
            "name": "usAccount",
            "label": "美元账户",
            // required: true,
          },
          {
            "type": "input-text",
            "name": "foreignAccount",
            "label": "外币账户",
            // required: true,
          },
          {
            "type": "input-text",
            "name": "rmbAccount",
            "label": "人民币账户",
            // required: true,
          },
          {
            "type": "input-text",
            "name": "bankAddress",
            "label": "银行地址",
            required: true,
          },
          {
            "type": "input-text",
            "name": "internationalCode",
            "label": "国际汇款代码",
            required: true,
          },
        ]
      },
    }
  },
  {
    visibleOn: 'this.type == 2 || this.type == 3',
    type: "crud",
    id: "accountinfo-crud",
    name: "accountinfo-crud",
    api: searchAccountApi,
    syncLocation: false,
    columnsTogglable: false,
    showPageInfo: true,
    pageField: 'page.page',
    perPageField: 'page.size',
    footerToolbar: ["statistics", "pagination"],
    columns: [
      {
        "name": "bankName",
        "label": "银行名称",
      },
      {
        "name": "bankCode",
        "label": "银行编码",
      },
      {
        "name": "accountName",
        "label": "账户全称",
      },
      {
        "name": "accountAbbreviation",
        "label": "账户简称",
      },
      {
        "name": "hkdAccount",
        "label": "港币账户",
      },
      {
        "name": "usAccount",
        "label": "美元账户",
      },
      {
        "name": "foreignAccount",
        "label": "外币账户",
      },
      {
        "name": "rmbAccount",
        "label": "人民币账户",
      },
      {
        "name": "bankAddress",
        "label": "银行地址",
      },
      {
        "name": "internationalCode",
        "label": "国际汇款代码",
      },
      {
        type: "operation",
        label: "操作",
        buttons: [
          {
            type: "button",
            label: "编辑",
            level: "link",
            actionType: "dialog",
            dialog: {
              title: "编辑账户信息",
              id: 'verify-dialog',
              size: "md",
              showCloseButton: true,
              body: {
                type: "form",
                justify: "space-around",
                alignItems: "center",
                api: {
                  method: "post",
                  url: "/yyzt-web/operation/deposit/updateAccountInformation",
                  dataType: "form-data",
                  requestAdaptor: (api: any, context: any) => {
                    console.log('updateAccountInformation', context);
                    // 查询参数格式化
                    api.data.parentId = context.parentId;
                    api.data.id = context.id;
                    return {
                      ...api,
                    };
                  },
                },
                body: [
                  {
                    "type": "input-text",
                    "name": "bankName",
                    "label": "银行名称",
                    required: true,
                  },
                  {
                    "type": "input-text",
                    "name": "bankCode",
                    "label": "银行编码",
                    required: true,
                  },
                  {
                    "type": "input-text",
                    "name": "accountName",
                    "label": "账户全称",
                    required: true,
                  },
                  {
                    "type": "input-text",
                    "name": "accountAbbreviation",
                    "label": "账户简称",
                    required: true,
                  },
                  {
                    "type": "input-text",
                    "name": "hkdAccount",
                    "label": "港币账户",
                    // required: true,
                  },
                  {
                    "type": "input-text",
                    "name": "usAccount",
                    "label": "美元账户",
                    // required: true,
                  },
                  {
                    "type": "input-text",
                    "name": "foreignAccount",
                    "label": "外币账户",
                    // required: true,
                  },
                  {
                    "type": "input-text",
                    "name": "rmbAccount",
                    "label": "人民币账户",
                    // required: true,
                  },
                  {
                    "type": "input-text",
                    "name": "bankAddress",
                    "label": "银行地址",
                    required: true,
                  },
                  {
                    "type": "input-text",
                    "name": "internationalCode",
                    "label": "国际汇款代码",
                    required: true,
                  },
                ]
              },
            }
          },
          {
            "type": "button",
            "label": "删除",
            "level": "link",
            "className": "text-red-600 hover:text-red-800",
            "actionType": "ajax",
            "confirmText": "是否确认删除当前账户信息？",
            "api": {
              "method": "post",
              "url": "/yyzt-web/operation/deposit/delAccountInformation",
              "data": {
                "id": "${id}" // 传递当前行ID
              },
              dataType: "form-data",
            },
            "reload": "accountinfo-crud" // 操作成功后刷新表格
          }
        ],
      },
    ]
  }
];
// 新增转账方式
const addAction = {
  type: "button",
  label: "新增转账方式",
  icon: "fa fa-plus",
  level: "primary",
  className: "h-9",
  style: {
    "backgroundColor": "#2563eb",
    "color": "#ffffff",
    "border": "none"
  },
  actionType: "dialog",
  dialog: {
    title: "新增",
    id: 'verify-dialog',
    size: "md",
    showCloseButton: true,
    rules: [],
    body: {
      type: "form",
      justify: "space-around",
      alignItems: "center",
      api: {
        method: "post",
        url: "/yyzt-web/operation/deposit/insertDeposit",
        dataType: "form-data",
      },
      body: formContent,
    },
  },
};
// 编辑转账方式
const editAction = {
  type: "button",
  label: "编辑",
  level: "link",
  actionType: "dialog",
  dialog: {
    title: "编辑",
    id: 'verify-dialog',
    size: "lg",
    showCloseButton: true,
    body: {
      type: "form",
      justify: "space-around",
      alignItems: "center",
      api: {
        method: "post",
        url: "/yyzt-web/operation/deposit/updateDeposit",
        dataType: "form-data",
      },
      body: [
        ...formContent,
        ...formContentForEdit,
      ]
    },
  },
};

const amisJSON = {
  "type": "page",
  "body": {
    "type": "flex",
    "direction": "column",
    "style": {
      "backgroundColor": "#f0f2f5",
      "minHeight": "100vh",
      justifyContent: 'start',
    },
    "items": [
      // 头部区域
      {
        "type": "container",
        "className": "mb-4 shadow-sm rounded",
        "style": {
          "backgroundColor": "#ffffff",
          "boxShadow": "0 2px 8px rgba(0,0,0,0.1)"
        },
        "body": {
          "type": "flex",
          "className": "p-4",
          "style": {
            "justifyContent": "space-between",
            "alignItems": "center"  
          },
          "items": [
            {
              "type": "container",
              "body": [
                {
                  "type": "tpl",
                  "inline": false,
                  "tpl": "转账方式",
                  "className": "font-bold text-xl"
                },
                {
                  "type": "tpl",
                  "tpl": "管理转账方式信息",
                  "className": "text-gray-600 text-sm mt-1"
                }
              ]
            },
            addAction
          ]
        }
      },
      {
        "type": "container",
        "className": "p-4",
        "body": [     
          // 列表展示区域
          {
            "type": "card",
            "className": "rounded shadow-sm",
            "header": {
              "title": "转账方式列表",
              "className": "font-bold"
            },
            "body": {
              "type": "crud",
              id: 'main-crud',
              name: "depositCrud",
              api: searchApi,
              "syncLocation": false,
              "columnsTogglable": false,
              "columns": [
                {
                  "name": "inputTimeLabel",
                  "label": "提交时间",
                  "type": "tpl",
                },
                {
                  "name": "type",
                  "label": "入金方式",
                  type: "mapping",
                  map: {
                    "1": "<span class='label label-info'>FPS转数快</span>",
                    "2": "<span class='label label-info'>E-Banking网银转账</span>",
                    "3": "<span class='label label-info'>ATM/柜台转账</span>",
                    "4": "<span class='label label-info'>Check支票转账</span>",
                  },
                },
                {
                  "name": "status",
                  "label": "状态",
                  type: "mapping",
                  map: {
                    "0": "<span class='label label-info'>未发布</span>",
                    "1": "<span class='label label-success'>已发布</span>",
                    "2": "<span class='label label-info'>修改待发布</span>",
                  },
                },
                {
                  "type": "operation",
                  "label": "操作",
                  "buttons": [
                    editAction,
                    {
                      "type": "button",
                      "label": "删除",
                      "level": "link",
                      "className": "text-red-600 hover:text-red-800",
                      "actionType": "ajax",
                      "confirmText": "是否确认删除当前转账方式？", // 确认提示内容
                      "api": {
                        "method": "post",
                        "url": "/yyzt-web/operation/deposit/deleteDeposit",
                        "data": {
                          "id": "${id}" // 传递当前行ID
                        },
                        dataType: "form-data",
                      },
                      "reload": "depositCrud" // 操作成功后刷新表格
                    },
                    {
                      "type": "button",
                      "label": "发布",
                      "level": "link",
                      "actionType": "ajax",
                      "confirmText": "是否确认发布当前转账方式？", // 确认提示内容
                      "api": {
                        "method": "post",
                        "url": "/yyzt-web/operation/deposit/release",
                        "data": {
                          "id": "${id}" // 传递当前行ID
                        },
                        dataType: "form-data",
                      },
                      "reload": "depositCrud" // 操作成功后刷新表格
                    }
                  ],
                }
              ],
              "footerToolbar": [
                "statistics",
                "pagination"
              ]
            }
          }
        ]
      }
    ]
  },
};
</script>

<template>
  <KamisComp.default :amisJSON="amisJSON" />
</template>
