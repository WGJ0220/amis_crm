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
import { useRouter } from 'vue-router';
import { usePageInfo }  from '@/stores/index';
const router = useRouter();
const pageInfo = usePageInfo();
const adaptor = `
  return {
    "status": payload.code,
    "msg": payload.msg || response.statusText,
    "data": payload.data || {}
  };
`;
const amisJSON = {
  "type": "page",
  "body": {
    "type": "flex",
    "direction": "column",
    "justify": "flex-start",
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
              },
              "onClick": () =>{
                pageInfo.type = 'add';
                router.push('/qrcode/add');
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
            "type": "service",
            "id": "qrcode-statistics-service",
            "api": {
              "method": "get",
              "url": "/v1/qrcode/statistics",
              "data": {
                "appId": "${appId || ''}"
              }
            },
            "body": {
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
                            "tpl": "${qrcodeNum || '--'}",
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
                            "tpl": "${totalScanCount || '--'}",
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
                            "tpl": "${todayScanCount || '--'}",
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
                            "tpl": "${todayInfoLeftCount || '--'}",
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
                      "name": "appId",
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
                  },
                  "actionType": "reload",
                  "target": "qrcode-statistics-service, qrcode-list-service"
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
              "id": "qrcode-list-service",
              "api": "/v1/qrcode/list",
              "syncLocation": false,
              "columnsTogglable": false,
              "columns": [
                {
                  "name": "qrcodeImageUrl",
                  "label": "二维码",
                  "type": "tpl",
                  "tpl": "<i class='fa fa-qrcode text-xl cursor-pointer'></i>",
                  "popOver": {
                    "body": {
                      "type": "image",
                      "src": "${qrcodeImageUrl}",
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
                      "tpl": "${qrcodeName}",
                      "inline": false,
                      "className": "font-bold"
                    },
                    {
                      "type": "tpl",
                      "tpl": "客户经理：${customerManager}",
                      "inline": false,
                      "className": "text-sm mt-1"
                    },
                    {
                      "type": "tpl",
                      "tpl": "营业部：${businessDepartment}",
                      "inline": false,
                      "className": "text-sm mt-1"
                    },
                    {
                      "type": "tpl",
                      "tpl": "云平台渠道号：${channelCode}",
                      "inline": false,
                      "className": "text-sm mt-1"
                    }
                  ]
                },
                {
                  "name": "qrcodeType",
                  "label": "类型",
                  "type": "mapping",
                  "map": {
                    "1": "<span class='label label-success'>开户二维码</span>",
                    "2": "<span class='label label-info'>下载二维码</span>"
                  }
                },
                {
                  "name": "stats",
                  "label": "扫码统计",
                  "type": "container",
                  "body": [
                    {
                      "type": "tpl",
                      "tpl": "<span class='font-bold'>总扫码：${totalScansCount}</span>",
                      "inline": false,
                      "className": "text-sm"
                    },
                    {
                      "type": "tpl",
                      "tpl": "今日：${todayScanCount}",
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
                      "className": "text-blue-500",
                      "onClick": () =>{
                        pageInfo.type = 'detail';
                        router.push('/qrcode/detail');
                      }
                    },
                    {
                      "type": "button",
                      "label": "编辑",
                      "icon": "fa fa-edit",
                      "level": "link",
                      "className": "text-green-500",
                      "onClick": (event: any, props: any) =>{
                        pageInfo.type = 'edit';
                        console.log("event:", event, props);
                        pageInfo.pageData = props.row.data;
                        router.push('/qrcode/add');
                      }
                    },
                    {
                      "type": "button",
                      "label": "禁用",
                      "icon": "fa fa-toggle-off",
                      "level": "link",
                      "className": "text-yellow-500",
                      "visibleOn": "status == 1",
                      "onEvent": {
                        "click": {
                          "actions": [
                            {
                              "actionType": "ajax",
                              "args": {
                                "api": {
                                  "method": "post",
                                  "url": "/v1/qrcode/changeStatus",
                                  "data": {
                                    "id": "${id}",
                                    "appId": "${appId || ''}",
                                    "status": 0
                                  },
                                  "adaptor": adaptor
                                }
                              },
                              "messages": {
                                "success": "禁用成功",
                              }
                            },
                            {
                              "actionType": "reload",
                              "componentId": "qrcode-list-service"
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "button",
                      "label": "启用",
                      "icon": "fa fa-toggle-on",
                      "level": "link",
                      "className": "text-green-500",
                      "visibleOn": "status != 1",
                      "onEvent": {
                        "click": {
                          "actions": [
                            {
                              "actionType": "ajax",
                              "args": {
                                "api": {
                                  "method": "post",
                                  "url": "/v1/qrcode/changeStatus",
                                  "data": {
                                    "id": "${id}",
                                    "appId": "${appId || ''}",
                                    "status": 1
                                  },
                                  "adaptor": adaptor
                                },
                                "messages": {
                                  "success": "启用成功",
                                }
                              }
                            },
                            {
                              "actionType": "reload",
                              "componentId": "qrcode-list-service"
                            }
                          ]
                        }
                      }
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