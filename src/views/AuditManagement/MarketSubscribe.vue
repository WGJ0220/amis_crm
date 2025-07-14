<script setup lang="ts">
import * as KamisComp from '@/components/KamisComp/index.vue';
const amisJSON = {
  "type": "page",
  "body": {
    "type": "flex",
    "direction": "column",
    "style": {
      "backgroundColor": "#f0f2f5",
      "minHeight": "100vh"
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
                  "tpl": "行情订阅",
                  "className": "font-bold text-xl"
                },
                {
                  "type": "tpl",
                  "tpl": "管理行情订阅信息",
                  "className": "text-gray-600 text-sm mt-1"
                }
              ]
            }
          ]
        }
      },
      {
        "type": "container",
        "className": "p-4",
        "body": [
          // 搜索区域
          {
            "type": "container",
            "className": "mb-4 p-4 rounded shadow-sm",
            "style": {
              "backgroundColor": "#ffffff"
            },
            "body": {
              "type": "flex",
              "className": "w-full",
              "style": {
                "justifyContent": "space-between",
                "alignItems": "center"
              },
              "items": [
                {
                  "type": "flex",
                  "style": {
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "flex-wrap": "wrap"
                  },
                  "items": [
                    {
                      "type": "flex",
                      "justify": "flex-start",
                      "items": [
                        { "type": "tpl", "tpl": "客户号：", "className": "mr-1 self-center" },
                        { "type": "input-text", "name": "company", "placeholder": "请选择期货公司", "className": "mr-3 w-48 mb-0" }
                      ],
                      "className": "mr-4",
                      "style": { "alignItems": "center", "minWidth": "280px", "marginBottom": "10px" }
                    },
                    {
                      "type": "flex",
                      "justify": "flex-start",
                      "items": [
                        { "type": "tpl", "tpl": "手机号码：", "className": "mr-1 self-center" },
                        { "type": "input-text", "name": "qrcodeName", "placeholder": "请输入手机号码", "className": "w-48 mb-0" }
                      ],
                      "className": "mr-4",
                      "style": { "alignItems": "center", "minWidth": "280px", "marginBottom": "10px" }
                    },
                    {
                      "type": "flex",
                      "justify": "flex-start",
                      "items": [
                        { "type": "tpl", "tpl": "产品名称", "className": "mr-1 self-center" },
                        { "type": "input-text", "name": "productName", "placeholder": "请输入产品名称", "className": "w-48 mb-0" }
                      ],
                      "className": "mr-4",
                      "style": { "alignItems": "center", "minWidth": "280px", "marginBottom": "10px" }
                    },
                    {
                      "type": "flex",
                      "justify": "flex-start",
                      "items": [
                        { "type": "tpl", "tpl": "提交时间：", "className": "mr-1 self-center" },
                        { "type": "input-datetime-range", "name": "submitTime", "placeholder": "请选择提交时间区间", "className": "w-64 mb-0" }
                      ],
                      "className": "mr-4",
                      "style": { "alignItems": "center", "minWidth": "280px", "marginBottom": "10px" }
                    },
                    {
                      "type": "flex",
                      "justify": "flex-start",
                      "items": [
                        { "type": "tpl", "tpl": "状态：", "className": "mr-1 self-center" },
                        { "type": "select", "name": "status", "placeholder": "请选择状态", "className": "w-32 mb-0", "options": [
                          { "label": "全部", "value": "" },
                          { "label": "待审核", "value": "pending" },
                          { "label": "已通过", "value": "approved" },
                          { "label": "已拒绝", "value": "rejected" }
                        ] }
                      ],
                      "style": { "alignItems": "center", "minWidth": "280px", "marginBottom": "10px" }
                    }
                  ]
                },
                {
                  "type": "button",
                  "label": "查询",
                  "icon": "fa fa-search",
                  "className": "h-9",
                  "level": "primary",
                  "actionType": "reload",
                  "target": "depositCrud",
                  "style": {
                    "backgroundColor": "#2563eb",
                    "color": "#fff",
                    "border": "none"
                  }
                }
              ]
            }
          },
          
          // 列表展示区域
          {
            "type": "card",
            "className": "rounded shadow-sm",
            "header": {
              "title": "行情订阅列表",
              "className": "font-bold"
            },
            "body": {
              "type": "crud",
              "api": "/yyzt-web/operation/ad/findAdPostion.do?page.page=1&page.size=10&type=nine",
              "syncLocation": false,
              "columnsTogglable": false,
              "columns": [
                {
                  "name": "submitTime",
                  "label": "提交时间",
                  "type": "tpl",
                  "tpl": "${submitTime}",
                  "className": "text-center"
                },
                {
                  "name": "company",
                  "label": "客户号",
                  "type": "tpl",
                  "tpl": "${company}",
                  "className": "text-center"
                },
                {
                  "name": "qrcodeName",
                  "label": "手机号码",
                  "type": "tpl",
                  "tpl": "${qrcodeName}",
                  "className": "text-center"
                },
                {
                  "name": "productName",
                  "label": "产品名称",
                  "type": "tpl",
                  "tpl": "${productName}",
                  "className": "text-center"
                },
                {
                  "name": "term",
                  "label": "期限",
                  "type": "tpl",
                  "tpl": "${term}",
                  "className": "text-center"
                },
                {
                  "name": "amount",
                  "label": "金额",
                  "type": "tpl",
                  "tpl": "${amount}",
                  "className": "text-center"
                },
                {
                  "name": "status",
                  "label": "状态",
                  "type": "mapping",
                  "map": {
                    "1": "<span class='label label-info'>待审核</span>",
                    "2": "<span class='label label-success'>已到款</span>",
                    "3": "<span class='label label-danger'>未到款</span>"
                  },
                  "className": "text-center"
                },
                {
                  "type": "operation",
                  "label": "操作",
                  "buttons": [
                    {
                      "type": "button",
                      "label": "查看",
                      "icon": "fa fa-eye",
                      "level": "link",
                      "className": "text-blue-500",
                      "actionType": "dialog",
                      "dialog": {
                        "title": "详情信息",
                        "size": "md",
                        "showCloseButton": true,
                        "actions": [],
                        "body": {
                          "type": "form",
                          "mode": "horizontal",
                          "body": [
                            { "type": "static", "name": "submitTime", "label": "提交时间" },
                            { "type": "static", "name": "company", "label": "客户号" },
                            { "type": "static", "name": "qrcodeName", "label": "手机号" },
                            { "type": "static", "name": "productName", "label": "产品名称" },
                            { "type": "static", "name": "term", "label": "期限" },
                            { "type": "static", "name": "amount", "label": "金额" }
                          ]
                        }
                      }
                    },
                    {
                      "type": "button",
                      "label": "审核",
                      "icon": "fa fa-gavel",
                      "level": "link",
                      "className": "ml-2",
                      "actionType": "dialog",
                      "dialog": {
                        "title": "审核信息",
                        "size": "md",
                        "showCloseButton": true,
                        "actions": [],
                        "body": {
                          "type": "form",
                          "mode": "horizontal",
                          "body": [
                            { "type": "static", "name": "submitTime", "label": "提交时间" },
                            { "type": "static", "name": "company", "label": "客户号" },
                            { "type": "static", "name": "qrcodeName", "label": "手机号" },
                            { "type": "static", "name": "productName", "label": "产品名称" },
                            { "type": "static", "name": "term", "label": "期限" },
                            { "type": "static", "name": "amount", "label": "金额" },
                            {
                              "type": "button-toolbar",
                              "className": "mt-4 flex justify-end",
                              "buttons": [
                                {
                                  "type": "button",
                                  "label": "审核通过",
                                  "level": "success",
                                  "actionType": "ajax",
                                  "api": {
                                    "method": "post",
                                    "url": "/yyzt-web/operation/ad/find.do",
                                    "data": {
                                      "status": 2,
                                      "id": "${id}"
                                    }
                                  },
                                  "feedback": {
                                    "title": "操作成功",
                                    "status": "success"
                                  },
                                  "close": true,
                                  "reload": "depositCrud"
                                },
                                {
                                  "type": "button",
                                  "label": "审核驳回",
                                  "level": "danger",
                                  "actionType": "ajax",
                                  "style": {
                                    "marginLeft": "15px"
                                  },
                                  "api": {
                                    "method": "post",
                                    "url": "/yyzt-web/operation/ad/find.do",
                                    "data": {
                                      "status": 3,
                                      "id": "${id}"
                                    }
                                  },
                                  "feedback": {
                                    "title": "操作成功",
                                    "status": "success"
                                  },
                                  "close": true,
                                  "reload": "depositCrud"
                                }
                              ]
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "className": "text-center"
                }
              ],
              "bulkActions": [
                {
                  "label": "批量审核通过",
                  "actionType": "ajax",
                  "level": "success",
                  "api": {
                    "method": "post",
                    "url": "/yyzt-web/operation/ad/batchApprove.do",
                    "data": {
                      "ids": "${ids}",
                      "status": 2
                    }
                  },
                  "feedback": {
                    "title": "操作成功",
                    "status": "success"
                  },
                  "reload": "depositCrud"
                },
                {
                  "label": "批量审核拒绝",
                  "actionType": "ajax",
                  "level": "danger",
                  "api": {
                    "method": "post",
                    "url": "/yyzt-web/operation/ad/batchReject.do",
                    "data": {
                      "ids": "${ids}",
                      "status": 3
                    }
                  },
                  "feedback": {
                    "title": "操作成功",
                    "status": "success"
                  },
                  "reload": "depositCrud"
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
  "data": {
    "totalQrcodes": 125,
    "totalScans": 4826,
    "todayScans": 142,
    "todayLeads": 28
  }
};
</script>

<template>
  <KamisComp.default :amisJSON="amisJSON" />
</template>

<style>
.amis-scope .cxd-PopOverAble-popover  {
  min-width: 150px;
}
.cxd-Pagination-item {
  display: flex;
  align-items: center;
}
.cxd-Pagination-item .cxd-Pagination-prev span {
  display: flex;
  align-items: center;
}
.cxd-Pagination-item .cxd-Pagination-next span {
  display: flex;
  align-items: center;
}
</style>
