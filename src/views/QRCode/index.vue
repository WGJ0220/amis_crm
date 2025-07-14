<!--
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2025-01-14 10:36:26
 * @LastEditors: lixintao
 * @LastEditTime: 2025-05-23 14:55:11
 * @Descripttion: 
-->
<script setup lang="ts">
import KamisComp from '@/components/KamisComp/index.vue';
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
                  "tpl": "二维码管理",
                  "className": "font-bold text-xl"
                },
                {
                  "type": "tpl",
                  "tpl": "管理开户与下载二维码",
                  "className": "text-gray-600 text-sm mt-1"
                }
              ]
            },
            {
              "type": "button",
              "label": "新增二维码",
              "icon": "fa fa-plus",
              "level": "primary",
              "className": "h-9",
              "style": {
                "backgroundColor": "#2563eb",
                "color": "#ffffff",
                "border": "none"
              }
            }
          ]
        }
      },
      {
        "type": "container",
        "className": "p-4",
        "body": [
          // 数据展示区域
          {
            "type": "flex",
            "className": "mb-4",
            "items": [
              {
                "type": "container",
                "className": "w-1/4 mr-3 rounded-xl shadow-sm",
                "style": {
                  "backgroundColor": "#ffffff",
                  "borderRadius": "12px"
                },
                "body": {
                  "type": "flex",
                  "items": [
                    {
                      "type": "container",
                      "className": "w-3/4 p-4",
                      "body": [
                        {
                          "type": "tpl",
                          "tpl": "总二维码数",
                          "inline": false,
                          "className": "text-gray-500 text-sm"
                        },
                        {
                          "type": "tpl",
                          "tpl": "${totalQrcodes | number}",
                          "className": "font-bold text-2xl mt-1"
                        }
                      ]
                    },
                    {
                      "type": "tpl",
                      "tpl": "<i class='fa fa-qrcode text-2xl text-blue-500'></i>",
                      "className": "w-1/4 flex items-center justify-center"
                    }
                  ]
                }
              },
              {
                "type": "container",
                "className": "w-1/4 mr-3 rounded-xl shadow-sm",
                "style": {
                  "backgroundColor": "#ffffff",
                  "borderRadius": "12px"
                },
                "body": {
                  "type": "flex",
                  "items": [
                    {
                      "type": "container",
                      "className": "w-3/4 p-4",
                      "body": [
                        {
                          "type": "tpl",
                          "tpl": "总扫描",
                          "inline": false,
                          "className": "text-gray-500 text-sm"
                        },
                        {
                          "type": "tpl",
                          "tpl": "${totalScans | number}",
                          "className": "font-bold text-2xl mt-1"
                        }
                      ]
                    },
                    {
                      "type": "tpl",
                      "tpl": "<i class='fa fa-chart-line text-2xl text-green-500'></i>",
                      "className": "w-1/4 flex items-center justify-center"
                    }
                  ]
                }
              },
              {
                "type": "container",
                "className": "w-1/4 mr-3 rounded-xl shadow-sm",
                "style": {
                  "backgroundColor": "#ffffff",
                  "borderRadius": "12px"
                },
                "body": {
                  "type": "flex",
                  "items": [
                    {
                      "type": "container",
                      "className": "w-3/4 p-4",
                      "body": [
                        {
                          "type": "tpl",
                          "tpl": "今日扫描",
                          "inline": false,
                          "className": "text-gray-500 text-sm"
                        },
                        {
                          "type": "tpl",
                          "tpl": "${todayScans | number}",
                          "className": "font-bold text-2xl mt-1"
                        }
                      ]
                    },
                    {
                      "type": "tpl",
                      "tpl": "<i class='fa fa-calendar-day text-2xl text-yellow-500'></i>",
                      "className": "w-1/4 flex items-center justify-center"
                    }
                  ]
                }
              },
              {
                "type": "container",
                "className": "w-1/4 rounded-xl shadow-sm",
                "style": {
                  "backgroundColor": "#ffffff",
                  "borderRadius": "12px"
                },
                "body": {
                  "type": "flex",
                  "items": [
                    {
                      "type": "container",
                      "className": "w-3/4 p-4",
                      "body": [
                        {
                          "type": "tpl",
                          "tpl": "今日留资",
                          "inline": false,
                          "className": "text-gray-500 text-sm"
                        },
                        {
                          "type": "tpl",
                          "tpl": "${todayLeads | number}",
                          "className": "font-bold text-2xl mt-1"
                        }
                      ]
                    },
                    {
                      "type": "tpl",
                      "tpl": "<i class='fa fa-user-plus text-2xl text-purple-500'></i>",
                      "className": "w-1/4 flex items-center justify-center"
                    }
                  ]
                }
              }
            ]
          },
          
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
                  "items": [
                    {
                      "type": "input-text",
                      "name": "company",
                      "placeholder": "请选择期货公司",
                      "className": "mr-3 w-48 mb-0"
                    },
                    {
                      "type": "input-text",
                      "name": "qrcodeName",
                      "placeholder": "搜索二维码名称或客户经理",
                      "className": "w-48 mb-0"
                    }
                  ]
                },
                {
                  "type": "button",
                  "label": "筛选",
                  "icon": "fa fa-filter",
                  "className": "h-9",
                  "style": {
                    "backgroundColor": "#efefef",
                    "color": "#333333",
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
              "title": "二维码列表",
              "className": "font-bold"
            },
            "body": {
              "type": "crud",
              "api": "/yyzt-web/operation/ad/findAdPostion.do?page.page=1&page.size=10&type=nine",
              "syncLocation": false,
              "columnsTogglable": false,
              "columns": [
                {
                  "name": "qrcode",
                  "label": "二维码",
                  "type": "tpl",
                  "tpl": "<i class='fa fa-qrcode text-xl cursor-pointer'></i>",
                  "popOver": {
                    "body": {
                      "type": "image",
                      "src": "https://img95.699pic.com/element/40253/2702.png_860.png",
                      "width": "150",
                      "height": "150"
                    },
                    "position": "right",
                    "trigger": "hover"
                  }
                },
                {
                  "name": "info",
                  "label": "基本信息",
                  "type": "container",
                  "body": [
                    {
                      "type": "tpl",
                      "tpl": "线上推广渠道",
                      "inline": false,
                      "className": "font-bold"
                    },
                    {
                      "type": "tpl",
                      "tpl": "客户经理：张经理",
                      "inline": false,
                      "className": "text-sm mt-1"
                    },
                    {
                      "type": "tpl",
                      "tpl": "营业部：001",
                      "inline": false,
                      "className": "text-sm mt-1"
                    },
                    {
                      "type": "tpl",
                      "tpl": "云平台渠道号：cn123",
                      "inline": false,
                      "className": "text-sm mt-1"
                    }
                  ]
                },
                {
                  "name": "type",
                  "label": "类型",
                  "type": "tpl",
                  "tpl": "<span class='label label-info'>开户二维码</span>",
                  "className": "text-center"
                },
                {
                  "name": "stats",
                  "label": "扫码统计",
                  "type": "container",
                  "body": [
                    {
                      "type": "tpl",
                      "tpl": "<span class='font-bold'>总扫码：${totalScans}</span>",
                      "inline": false,
                      "className": "text-sm"
                    },
                    {
                      "type": "tpl",
                      "tpl": "今日：${todayScans}",
                      "inline": false,
                      "className": "text-sm mt-1"
                    }
                  ]
                },
                {
                  "name": "status",
                  "label": "状态",
                  "type": "mapping",
                  "map": {
                    "1": "<span class='label label-success'>启用</span>",
                    "0": "<span class='label label-danger'>禁用</span>"
                  }
                },
                {
                  "type": "operation",
                  "label": "操作",
                  "buttons": [
                    {
                      "type": "button",
                      "label": "详情",
                      "icon": "fa fa-info-circle",
                      "level": "link",
                      "className": "text-blue-500"
                    },
                    {
                      "type": "button",
                      "label": "编辑",
                      "icon": "fa fa-edit",
                      "level": "link",
                      "className": "text-green-500"
                    },
                    {
                      "type": "button",
                      "label": "禁用",
                      "icon": "fa fa-toggle-on",
                      "level": "link",
                      "className": "text-yellow-500",
                      "visibleOn": "status == 1"
                    },
                    {
                      "type": "button",
                      "label": "启用",
                      "icon": "fa fa-toggle-off",
                      "level": "link",
                      "className": "text-green-500",
                      "visibleOn": "status != 1"
                    }
                  ]
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
  <KamisComp :amisJSON="amisJSON"/>
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