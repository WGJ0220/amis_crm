<script setup lang="ts">
import KamisComp from '@/components/KamisComp/index.vue';
import { usePageInfo } from '@/stores/index';
const pageInfo = usePageInfo();
const { type: storePageType, pageData } = pageInfo;
console.log("pageData:", pageData);
const amisJSON = {
  "type": "page",
  "data": {
    "selectId": 1,
    "storePageType": storePageType,
    "pageData": pageData
  },
  "body": [
    // 头部
    {
      "type": "flex",
      "direction": "row",
      "justify": "space-between",
      "style": {
        "width": "100%",
        "backgroundImage": "linear-gradient(90deg, #667be6 0%, #8664b2 100%)",
        "padding": "24px 32px 20px 32px",
        "alignItems": "center"
      },
      "items": [
        {
          "type": "flex",
          "direction": "row",
          "style": {
            "alignItems": "center"
          },
          "items": [
            {
              "type": "container",
              "style": {
                "width": "40px",
                "height": "40px",
                "background": "#8595ea",
                "borderRadius": "8px",
                "display": "flex",
                "alignItems": "center",
                "justifyContent": "center"
              },
              "body": [
                {
                  "type": "icon",
                  "icon": "qrcode",
                  "style": {
                    "fontSize": "20px",
                    "color": "#fff"
                  }
                },
              ]
            },
            {
              "type": "flex",
              "direction": "column",
              "style": {
                "marginLeft": "12px"
              },
              "items": [
                {
                  "type": "tpl",
                  "tpl": "${storePageType === 'add' ? '新增二维码' : '编辑二维码'}",
                  "style": {
                    "fontWeight": "bold",
                    "fontSize": "22px",
                    "color": "#fff"
                  }
                },
                {
                  "type": "tpl",
                  "tpl": "${storePageType === 'add' ? '创建专属推广二维码' : '编辑专属推广二维码'}",
                  "style": {
                    "fontSize": "16px",
                    "color": "#fff"
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "button",
          "icon": "fas fa-times",
          "level": "link",
          "style": {
            "color": "#fff",
            "fontSize": "24px"
          },
          "onEvent": {
            "click": {
              "actions": [
                { "actionType": "goBack" }
              ]
            }
          }
        }
      ]
    },
    // 内容区域
    {
      "type": "container",
      "style": { "background": "#fffdfd", "padding": "0 32px 100px 32px", "overflow": "auto" },
      "body": [
        // 卡片标题
        {
          "type": "flex",
          "direction": "row",
          "alignItems": "center",
          "justify": "flex-start",
          "style": { "marginTop": "32px" },
          "items": [
            { "type": "icon", "icon": "fab fa-buffer", "style": { "color": "#2c68ea", "fontSize": "16px", "height": "16px", "width": "16px" } },
            { "type": "tpl", "tpl": "选择二维码类型", "style": { "fontSize": "16px", "color": "#333", "fontWeight": "bold", "marginLeft": "8px" } }
          ]
        },
        // 卡片
        {
          "type": "flex",
          "direction": "row",
          "gap": "20px",
          "justify": "flex-start",
          "style": { "margin": "10px 0 32px 0" },
          "items": [
            {
              "type": "card",
              "className": "${selectId == 1 ? 'selected-card' : 'unselected-card'}",
              "style": {
                "width": "30%",
                "borderRadius": "12px",
                "border": "2px solid",
                "borderColor": "${selectId == 1 ? '#7faefa' : '#dcdcdc'}",
                "background": "${selectId == 1 ? '#eff6ff' : '#fafafa'}",
                "cursor": "pointer"
              },
              "onEvent": { "click": { "actions": [{ "actionType": "setValue", "componentId": "selectId", "args": { "value": 1 } }] } },
              "body": [
                {
                  "type": "flex",
                  "direction": "row",
                  "alignItems": "center",
                  "justify": "flex-start",
                  "gap": "16px",
                  "items": [
                    {
                      "type": "icon",
                      "icon": "user-plus",
                      "style": {
                        "background": "#10b982",
                        "borderRadius": "8px",
                        "padding": "10px 7.5px",
                        "color": "#fff",
                        "fontSize": "22px"
                      }
                    },
                    {
                      "type": "flex",
                      "direction": "column",
                      "style": {
                        "marginLeft": "12px"
                      },
                      "items": [
                        {
                          "type": "tpl",
                          "tpl": "开户二维码",
                          "style": { "fontWeight": "bold", "fontSize": "16px", "color": "#222" }
                        },
                        {
                          "type": "tpl",
                          "tpl": "客户开户留资专用。",
                          "style": { "fontSize": "14px", "color": "#9da4b0" }
                        }
                      ]
                    },
                  ]
                },
                {
                  "type": "flex",
                  "direction": "column",
                  "justify": "flex-start",
                  "gap": "2px",
                  "style": { "marginTop": "8px" },
                  "items": [
                    {
                      "type": "flex",
                      "direction": "row",
                      "justify": "flex-start",
                      "alignItems": "center",
                      "items": [
                        { "type": "icon", "icon": "check-circle", "style": { "fontSize": "12px", "color": "#9da4b0", "marginRight": "4px" } },
                        { "type": "tpl", "tpl": "包含客户经理信息", "style": { "fontSize": "12px", "color": "#9da4b0" } }
                      ]
                    },
                    {
                      "type": "flex",
                      "direction": "row",
                      "justify": "flex-start",
                      "alignItems": "center",
                      "items": [
                        { "type": "icon", "icon": "check-circle", "style": { "fontSize": "12px", "color": "#9da4b0", "marginRight": "4px" } },
                        { "type": "tpl", "tpl": "营业部号绑定", "style": { "fontSize": "12px", "color": "#9da4b0" } }
                      ]
                    },
                    {
                      "type": "flex",
                      "direction": "row",
                      "justify": "flex-start",
                      "alignItems": "center",
                      "items": [
                        { "type": "icon", "icon": "check-circle", "style": { "fontSize": "12px", "color": "#9da4b0", "marginRight": "4px" } },
                        { "type": "tpl", "tpl": "云平台渠道追踪", "style": { "fontSize": "12px", "color": "#9da4b0" } }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        // 表单区
        {
          "type": "form",
          "wrapWithPanel": false,
          "data": { "selectId": 1 },
          "controls": [
            // 基础信息卡片
            {
              "type": "container",
              "style": { "background": "#f9fafc", "borderRadius": "16px", "marginBottom": "30px", "padding": "24px" },
              "body": [
                {
                  "type": "flex",
                  "direction": "row",
                  "alignItems": "center",
                  "justify": "flex-start",
                  "items": [
                    { "type": "icon", "icon": "info-circle", "style": { "color": "#2c68ea", "fontSize": "16px", "height": "16px", "width": "16px" } },
                    { "type": "tpl", "tpl": "基础信息", "style": { "fontSize": "16px", "color": "#333", "fontWeight": "bold", "marginLeft": "4px" } }
                  ]
                },
                {
                  "type": "flex",
                  "direction": "row",
                  "justify": "space-between",
                  "style": {
                    "marginTop": "10px"
                  },
                  "items": [
                    {
                      "type": "container",
                      "style": {
                        "width": "45%"
                      },
                      "body": [
                        {
                          "type": "flex",
                          "direction": "row",
                          "justify": "flex-start",
                          "alignItems": "center",
                          "items": [
                            { "type": "icon", "icon": "tag", "style": { "color": "#333", "fontSize": "14px" } },
                            { "type": "tpl", "tpl": "渠道名称", "style": { "fontSize": "14px", "color": "#333", "marginLeft": "4px" } }
                          ]
                        },
                        { "type": "input-text", "style": {
                          "marginTop": "6px"
                        },
                        "name": "qrcodeName", "placeholder": "如：线上推广渠道", "required": true, "value": "${pageData.qrcodeName}" }
                      ]
                    },
                    {
                      "type": "container",
                      "style": {
                        "width": "45%"
                      },
                      "body": [
                        {
                          "type": "flex",
                          "direction": "row",
                          "alignItems": "center",
                          "justify": "flex-start",
                          "items": [
                            { "type": "icon", "icon": "user", "style": { "color": "#333", "fontSize": "14px" } },
                            { "type": "tpl", "tpl": "客户经理", "style": { "fontSize": "14px", "color": "#333", "marginLeft": "4px" } }
                          ]
                        },
                        { "type": "input-text", "style": {
                          "marginTop": "6px"
                        },
                        "name": "customerManager", "placeholder": "请输入客户经理", "required": true, "value": "${pageData.customerManager}" }
                      ]
                    }
                  ]
                }
              ]
            },
            // 开户专用信息卡片（selectId==1时显示）
            {
              "type": "container",
              "visibleOn": "selectId == 1",
              "style": { "background": "#eff6ff", "borderRadius": "16px", "marginBottom": "30px", "padding": "24px", "transition": "all 0.3s" },
              "body": [
                {
                  "type": "flex",
                  "direction": "row",
                  "alignItems": "center",
                  "justify": "flex-start",
                  "items": [
                    { "type": "icon", "icon": "building", "style": { "color": "#2c68ea", "fontSize": "16px", "height": "16px", "width": "16px" } },
                    { "type": "tpl", "tpl": "开户专用信息", "style": { "fontSize": "16px", "color": "#333", "fontWeight": "bold", "marginLeft": "4px" } }
                  ]
                },
                {
                  "type": "flex",
                  "direction": "row",
                  "justify": "space-between",
                  "style": {
                    "marginTop": "10px"
                  },
                  "items": [
                    {
                      "type": "container",
                      "style": {
                        "width": "45%"
                      },
                      "body": [
                        {
                          "type": "flex",
                          "direction": "row",
                          "alignItems": "center",
                          "justify": "flex-start",
                          "items": [
                            { "type": "icon", "icon": "slack", "style": { "color": "#333", "fontSize": "14px" } },
                            { "type": "tpl", "tpl": "营业部号", "style": { "fontSize": "14px", "color": "#333", "marginLeft": "4px"} }
                          ]
                        },
                        { "type": "input-text", "style": {
                          "marginTop": "6px"
                        }, "name": "businessDepartment", "placeholder": "如：001", "required": true, "value": "${pageData.businessDepartment}" }
                      ]
                    },
                    {
                      "type": "container",
                      "style": {
                        "width": "45%"
                      },
                      "body": [
                        {
                          "type": "flex",
                          "direction": "row",
                          "alignItems": "center",
                          "justify": "flex-start",
                          "items": [
                            { "type": "icon", "icon": "cloud", "style": { "color": "#333", "fontSize": "14px" } },
                            { "type": "tpl", "tpl": "云平台渠道", "style": { "fontSize": "14px", "color": "#333", "marginLeft": "4px" } }
                          ]
                        },
                        { "type": "input-text", "style": {
                          "marginTop": "6px"
                        }, "name": "channelCode", "placeholder": "如：ONLINE_001", "required": true, "value": "${pageData.channelCode}" }
                      ]
                    }
                  ]
                }
              ]
            },
            // 高级设置卡片
            {
              "type": "container",
              "style": { "background": "#f9fafc", "borderRadius": "16px", "marginBottom": "30px", "padding": "24px" },
              "body": [
                {
                  "type": "flex",
                  "direction": "row",
                  "alignItems": "center",
                  "justify": "flex-start",
                  "items": [
                    { "type": "icon", "icon": "cog", "style": { "color": "#2c68ea", "fontSize": "16px" } },
                    { "type": "tpl", "tpl": "高级设置", "style": { "fontSize": "16px", "color": "#333", "fontWeight": "bold", "marginLeft": "4px" } }
                  ]
                },
                {
                  "type": "flex",
                  "direction": "row",
                  "justify": "space-between",
                  "style": {
                    "marginTop": "10px"
                  },
                  "items": [
                    {
                      "type": "container",
                      "style": {
                        "width": "45%"
                      },
                      "body": [
                        {
                          "type": "flex",
                          "direction": "row",
                          "justify": "flex-start",
                          "alignItems": "center",
                          "items": [
                            { "type": "icon", "icon": "calendar-alt", "style": { "color": "#333", "fontSize": "14px" } },
                            { "type": "tpl", "tpl": "有效期", "style": { "fontSize": "14px", "color": "#333", "marginLeft": "4px" } }
                          ]
                        },
                        {
                          "type": "select",
                          "name": "validityPeriod",
                          "style": {
                            "marginTop": "6px"
                          },
                          "placeholder": "请选择有效期",
                          "options": [
                            { "label": "永久有效", "value": -1 },
                            { "label": "30天", "value": 30 },
                            { "label": "90天", "value": 90 },
                            { "label": "180天", "value": 180 },
                            { "label": "1年", "value": 365 }
                          ],
                          "value": "${pageData.validityPeriod}"
                        }
                      ]
                    },
                    {
                      "type": "container",
                      "style": {
                        "width": "45%"
                      },
                      "body": [
                        {
                          "type": "flex",
                          "direction": "row",
                          "alignItems": "center",
                          "justify": "flex-start",
                          "items": [
                            { "type": "icon", "icon": "qrcode", "style": { "color": "#333", "fontSize": "14px" } },
                            { "type": "tpl", "tpl": "扫码限制", "style": { "fontSize": "14px", "color": "#333", "marginLeft": "4px" } }
                          ]
                        },
                        {
                          "type": "select",
                          "name": "scanLimit",
                          "style": {
                            "marginTop": "6px"
                          },
                          "placeholder": "请选择扫码限制",
                          "options": [
                            { "label": "无限制", "value": -1 },
                            { "label": "100次", "value": 100 },
                            { "label": "500次", "value": 500 },
                            { "label": "1000次", "value": 1000 }
                          ],
                          "value": "${pageData.scanLimit}"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    // 底部按钮区
    {
      "type": "container",
      "style": {
        "position": "fixed",
        "bottom": 0,
        "left": '200px',
        "right": 0,
        "background": "#fffdfd",
        "borderTop": "1px solid #e5e5e5",
        "padding": "16px 32px",
        "zIndex": 10
      },
      "body": {
        "type": "flex",
        "direction": "row",
        "justify": "space-between",
        "alignItems": "center",
        "items": [
          {
            "type": "flex",
            "direction": "row",
            "alignItems": "center",
            "gap": "8px",
            "items": [
              { "type": "icon", "icon": "info-circle", "style": { "color": "#a8acb4", "fontSize": "14px" , "height": "14px", "width": "14px"} },
              { "type": "tpl", "tpl": "创建后可在列表中查看和管理二维码", "style": { "fontSize": "14px", "color": "#a8acb4", "marginLeft": "8px"} }
            ]
          },
          {
            "type": "flex",
            "direction": "row",
            "gap": "16px",
            "items": [
              {
                "type": "button",
                "icon": "fas fa-times",
                "label": "取消",
                "level": "default",
                "onEvent": { "click": { "actions": [{ "actionType": "goBack" }] } }
              },
              {
                "type": "button",
                "icon": "fas fa-magic",
                "label": "创建二维码",
                "level": "primary",
                "style": {
                  "backgroundImage": "linear-gradient(90deg, #2c67eb 0%, #9a44ea 100%)",
                  "color": "#fff",
                  "border": "none",
                  "marginLeft": "10px"
                },
                "actionType": "submit"
              }
            ]
          }
        ]
      }
    }
  ]
};
</script>

<template>
  <KamisComp :amisJSON="amisJSON"/>
</template>

<style scoped>
.selected-card {
  box-shadow: 0 2px 8px rgba(44,103,235,0.08);
}
.unselected-card {
  box-shadow: none;
}
</style> 