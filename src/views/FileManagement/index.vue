<script setup lang="ts">
import * as KamisComp from '@/components/KamisComp/index.vue';
// 文件列表查询接口
const searchApi = {
  url: "/yyzt-web/oauth-web/file/list",
  method: "get",
  adaptor: function (data: any) {
    return {
      status: 0,
      data: data.data
    };
  },
};

// 文件上传表单配置
const formContent = [
  {
    "name": "pathSwitch",
    "type": "switch",
    "option": "自定义路径"
  },
  {
    visibleOn: 'this.pathSwitch',
    "type": "input-text",
    "name": "fileName",
    "label": "文件名称",
    required: true,
  },
  {
    visibleOn: 'this.pathSwitch',
    "type": "input-text",
    "name": "filePath",
    "label": "文件路径",
    required: true,
  },
  {
    visibleOn: '!this.pathSwitch',
    type: "input-file",
    name: "file",
    label: "选择文件",
    "asBlob": true,
    required: true,
  },
];



// 新增文件按钮动作
const addAction = {
  type: "button",
  label: "上传文件",
  icon: "fa fa-upload",
  level: "primary",
  className: "h-9",
  style: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none"
  },
  actionType: "dialog",
  dialog: {
    title: "上传新文件",
    size: "md",
    showCloseButton: true,
    body: {
      type: "form",
      api: {
        method: "post",
        url: "/yyzt-web/oauth-web/file/add",
        dataType: "form-data",
        requestAdaptor: (api: any, context: any) => {
          console.log('requestAdaptor', context);
          if (!context.fileName) {
            context.fileName = context.file.name;
          }
          return api;
        },
      },
      body: formContent
    }
  }
};

const amisJSON = {
  type: "page",
  body: {
    type: "flex",
    direction: "column",
    style: {
      backgroundColor: "#f0f2f5",
      justifyContent: 'start',
      minHeight: "100vh"
    },
    items: [
      // 头部区域
      {
        type: "container",
        className: "mb-4 shadow-sm rounded",
        style: {
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        },
        body: {
          type: "flex",
          className: "p-4",
          style: {
            justifyContent: "space-between",
            alignItems: "center"  
          },
          items: [
            {
              type: "container",
              body: [
                {
                  type: "tpl",
                  tpl: "文件管理",
                  className: "font-bold text-xl"
                },
                {
                  type: "tpl",
                  tpl: "管理系统上传的文件资源",
                  className: "text-gray-600 text-sm mt-1"
                }
              ]
            },
            addAction
          ]
        }
      },
      // 列表区域
      {
        type: "container",
        className: "p-4",
        body: {
          type: "card",
          className: "rounded shadow-sm",
          header: {
            title: "文件列表",
            className: "font-bold"
          },
          body: {
            type: "crud",
            name: "table-crud",
            api: searchApi,
            syncLocation: false,
            columnsTogglable: false,
            columns: [
              {
                name: "fileName",
                label: "文件名",
                type: "text",
              },
              {
                name: "filePath",
                label: "文件地址",
                type: "tpl",
              },
              {
                type: "operation",
                label: "操作",
                buttons: [
                  {
                    "type": "button",
                    "label": "删除",
                    "level": "link",
                    "className": "text-red-600 hover:text-red-800",
                    "actionType": "ajax",
                    "confirmText": "是否确认删除当前文件？",
                    "api": {
                      "method": "post",
                      "url": "/yyzt-web/oauth-web/file/delete",
                      "data": {
                        "fileName": "${fileName}" // 传递当前行ID
                      },
                      dataType: "form-data",
                    },
                    "reload": "table-crud" // 操作成功后刷新表格
                  }
                ],
              },
            ],
            footerToolbar: ["statistics", "pagination"]
          }
        }
      }
    ]
  }
};
</script>

<template>
  <KamisComp.default :amisJSON="amisJSON" />
</template>

