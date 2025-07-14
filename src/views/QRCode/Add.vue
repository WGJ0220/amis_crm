<script setup lang="ts">
import KamisComp from '@/components/KamisComp/index.vue';
const amisJSON = {
  "type": "page",
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
          "items": [
            {
              "type": "icon",
              "icon": "fa fa-qrcode",
              "style": {
                "fontSize": "40px",
                "color": "#fff",
                "marginRight": "20px"
              }
            },
            {
              "type": "flex",
              "direction": "column",
              "items": [
                {
                  "type": "tpl",
                  "tpl": "开户二维码",
                  "style": {
                    "fontWeight": "bold",
                    "fontSize": "24px",
                    "color": "#fff"
                  }
                },
                {
                  "type": "tpl",
                  "tpl": "创建客户开户专用二维码",
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
          "icon": "fa fa-times",
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
        // 选择卡片
        {
          "type": "flex",
          "direction": "row",
          "gap": "20px",
          "style": { "margin": "32px 0 32px 0" },
          "items": [
            {
              "type": "card",
              "className": "${selectId == 1 ? 'selected-card' : 'unselected-card'}",
              "style": {
                "flex": 1,
                "borderRadius": "16px",
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
                  "gap": "16px",
                  "items": [
                    {
                      "type": "icon",
                      "icon": "fa fa-user-plus",
                      "style": {
                        "background": "#10b982",
                        "borderRadius": "50%",
                        "padding": "10px",
                        "color": "#fff",
                        "fontSize": "28px"
                      }
                    },
                    {
                      "type": "flex",
                      "direction": "column",
                      "items": [
                        {
                          "type": "tpl",
                          "tpl": "开户二维码",
                          "style": { "fontWeight": "bold", "fontSize": "18px", "color": "#222" }
                        },
                        {
                          "type": "tpl",
                          "tpl": "客户开户留资专用。",
                          "style": { "fontSize": "16px", "color": "#222" }
                        },
                        {
                          "type": "flex",
                          "direction": "column",
                          "gap": "2px",
                          "style": { "marginTop": "8px" },
                          "items": [
                            {
                              "type": "flex",
                              "direction": "row",
                              "items": [
                                { "type": "icon", "icon": "fa fa-check-circle", "style": { "fontSize": "12px", "color": "#222", "marginRight": "4px" } },
                                { "type": "tpl", "tpl": "包含客户经理信息", "style": { "fontSize": "12px", "color": "#222" } }
                              ]
                            },
                            {
                              "type": "flex",
                              "direction": "row",
                              "items": [
                                { "type": "icon", "icon": "fa fa-check-circle", "style": { "fontSize": "12px", "color": "#222", "marginRight": "4px" } },
                                { "type": "tpl", "tpl": "营业部号绑定", "style": { "fontSize": "12px", "color": "#222" } }
                              ]
                            },
                            {
                              "type": "flex",
                              "direction": "row",
                              "items": [
                                { "type": "icon", "icon": "fa fa-check-circle", "style": { "fontSize": "12px", "color": "#222", "marginRight": "4px" } },
                                { "type": "tpl", "tpl": "云平台渠道追踪", "style": { "fontSize": "12px", "color": "#222" } }
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
            {
              "type": "card",
              "className": "${selectId == 2 ? 'selected-card' : 'unselected-card'}",
              "style": {
                "flex": 1,
                "borderRadius": "16px",
                "border": "2px solid",
                "borderColor": "${selectId == 2 ? '#7faefa' : '#dcdcdc'}",
                "background": "${selectId == 2 ? '#eff6ff' : '#fafafa'}",
                "cursor": "pointer"
              },
              "onEvent": { "click": { "actions": [{ "actionType": "setValue", "componentId": "selectId", "args": { "value": 2 } }] } },
              "body": [
                {
                  "type": "flex",
                  "direction": "row",
                  "alignItems": "center",
                  "gap": "16px",
                  "items": [
                    {
                      "type": "icon",
                      "icon": "fa fa-user-plus",
                      "style": {
                        "background": "#10b982",
                        "borderRadius": "50%",
                        "padding": "10px",
                        "color": "#fff",
                        "fontSize": "28px"
                      }
                    },
                    {
                      "type": "flex",
                      "direction": "column",
                      "items": [
                        {
                          "type": "tpl",
                          "tpl": "客户开户二维码",
                          "style": { "fontWeight": "bold", "fontSize": "18px", "color": "#222" }
                        },
                        {
                          "type": "tpl",
                          "tpl": "客户开户留资专用。",
                          "style": { "fontSize": "16px", "color": "#222" }
                        },
                        {
                          "type": "flex",
                          "direction": "column",
                          "gap": "2px",
                          "style": { "marginTop": "8px" },
                          "items": [
                            {
                              "type": "flex",
                              "direction": "row",
                              "items": [
                                { "type": "icon", "icon": "fa fa-check-circle", "style": { "fontSize": "12px", "color": "#222", "marginRight": "4px" } },
                                { "type": "tpl", "tpl": "包含经理信息", "style": { "fontSize": "12px", "color": "#222" } }
                              ]
                            },
                            {
                              "type": "flex",
                              "direction": "row",
                              "items": [
                                { "type": "icon", "icon": "fa fa-check-circle", "style": { "fontSize": "12px", "color": "#222", "marginRight": "4px" } },
                                { "type": "tpl", "tpl": "营业部号不绑定", "style": { "fontSize": "12px", "color": "#222" } }
                              ]
                            },
                            {
                              "type": "flex",
                              "direction": "row",
                              "items": [
                                { "type": "icon", "icon": "fa fa-check-circle", "style": { "fontSize": "12px", "color": "#222", "marginRight": "4px" } },
                                { "type": "tpl", "tpl": "云平台渠道不追踪", "style": { "fontSize": "12px", "color": "#222" } }
                              ]
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
                  "gap": "8px",
                  "items": [
                    { "type": "icon", "icon": "fa fa-info-circle", "style": { "color": "#2c68ea", "fontSize": "16px" } },
                    { "type": "tpl", "tpl": "基础信息", "style": { "fontSize": "16px", "color": "#333", "fontWeight": "bold" } }
                  ]
                },
                {
                  "type": "flex",
                  "direction": "row",
                  "gap": "20px",
                  "items": [
                    {
                      "type": "container",
                      "body": [
                        {
                          "type": "flex",
                          "direction": "row",
                          "alignItems": "center",
                          "gap": "4px",
                          "items": [
                            { "type": "icon", "icon": "fa fa-tag", "style": { "color": "#333", "fontSize": "14px" } },
                            { "type": "tpl", "tpl": "渠道名称", "style": { "fontSize": "14px", "color": "#333" } }
                          ]
                        },
                        { "type": "input-text", "name": "channelName", "placeholder": "如：线上推广渠道", "required": true }
                      ]
                    },
                    {
                      "type": "container",
                      "body": [
                        {
                          "type": "flex",
                          "direction": "row",
                          "alignItems": "center",
                          "gap": "4px",
                          "items": [
                            { "type": "icon", "icon": "fa fa-user", "style": { "color": "#333", "fontSize": "14px" } },
                            { "type": "tpl", "tpl": "客户经理", "style": { "fontSize": "14px", "color": "#333" } }
                          ]
                        },
                        {
                          "type": "select",
                          "name": "managerId",
                          "placeholder": "请选择客户经理",
                          "required": true,
                          "source": "/api/v1/users/list",
                          "labelField": "username",
                          "valueField": "userid"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            // 开户专用信息卡片（selectId==1时显示）
            {
              "type": "container",
              "visibleOn": "this.selectId == 1",
              "style": { "background": "#eff6ff", "borderRadius": "16px", "marginBottom": "30px", "padding": "24px", "transition": "all 0.3s" },
              "body": [
                {
                  "type": "flex",
                  "direction": "row",
                  "alignItems": "center",
                  "gap": "8px",
                  "items": [
                    { "type": "icon", "icon": "fa fa-info-circle", "style": { "color": "#2c68ea", "fontSize": "16px" } },
                    { "type": "tpl", "tpl": "开户专用信息", "style": { "fontSize": "16px", "color": "#333", "fontWeight": "bold" } }
                  ]
                },
                {
                  "type": "flex",
                  "direction": "row",
                  "gap": "20px",
                  "items": [
                    {
                      "type": "container",
                      "body": [
                        {
                          "type": "flex",
                          "direction": "row",
                          "alignItems": "center",
                          "gap": "4px",
                          "items": [
                            { "type": "icon", "icon": "fa fa-building", "style": { "color": "#333", "fontSize": "14px" } },
                            { "type": "tpl", "tpl": "营业部号", "style": { "fontSize": "14px", "color": "#333" } }
                          ]
                        },
                        { "type": "input-text", "name": "branchNo", "placeholder": "如：001", "required": true }
                      ]
                    },
                    {
                      "type": "container",
                      "body": [
                        {
                          "type": "flex",
                          "direction": "row",
                          "alignItems": "center",
                          "gap": "4px",
                          "items": [
                            { "type": "icon", "icon": "fa fa-cloud", "style": { "color": "#333", "fontSize": "14px" } },
                            { "type": "tpl", "tpl": "云平台渠道", "style": { "fontSize": "14px", "color": "#333" } }
                          ]
                        },
                        { "type": "input-text", "name": "cloudChannel", "placeholder": "如：ONLINE_001", "required": true }
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
                  "gap": "8px",
                  "items": [
                    { "type": "icon", "icon": "fa fa-cog", "style": { "color": "#2c68ea", "fontSize": "16px" } },
                    { "type": "tpl", "tpl": "高级设置", "style": { "fontSize": "16px", "color": "#333", "fontWeight": "bold" } }
                  ]
                },
                {
                  "type": "flex",
                  "direction": "row",
                  "gap": "20px",
                  "items": [
                    {
                      "type": "container",
                      "body": [
                        {
                          "type": "flex",
                          "direction": "row",
                          "alignItems": "center",
                          "gap": "4px",
                          "items": [
                            { "type": "icon", "icon": "fa fa-calendar", "style": { "color": "#333", "fontSize": "14px" } },
                            { "type": "tpl", "tpl": "有效期", "style": { "fontSize": "14px", "color": "#333" } }
                          ]
                        },
                        {
                          "type": "select",
                          "name": "validity",
                          "placeholder": "请选择有效期",
                          "options": [
                            { "label": "永久有效", "value": 1 },
                            { "label": "30天", "value": 2 },
                            { "label": "60天", "value": 3 },
                            { "label": "90天", "value": 4 },
                            { "label": "180天", "value": 5 },
                            { "label": "365天", "value": 6 }
                          ],
                          "value": 1
                        }
                      ]
                    },
                    {
                      "type": "container",
                      "body": [
                        {
                          "type": "flex",
                          "direction": "row",
                          "alignItems": "center",
                          "gap": "4px",
                          "items": [
                            { "type": "icon", "icon": "fa fa-qrcode", "style": { "color": "#333", "fontSize": "14px" } },
                            { "type": "tpl", "tpl": "扫码限制", "style": { "fontSize": "14px", "color": "#333" } }
                          ]
                        },
                        {
                          "type": "select",
                          "name": "scanLimit",
                          "placeholder": "请选择扫码限制",
                          "options": [
                            { "label": "无限制", "value": 1 },
                            { "label": "登录资金账号", "value": 2 },
                            { "label": "登录行情账号", "value": 3 }
                          ],
                          "value": 1
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
        "left": 0,
        "width": "100%",
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
              { "type": "icon", "icon": "fa fa-info-circle", "style": { "color": "#a8acb4", "fontSize": "14px" } },
              { "type": "tpl", "tpl": "请确认信息无误后提交", "style": { "fontSize": "14px", "color": "#a8acb4" } }
            ]
          },
          {
            "type": "flex",
            "direction": "row",
            "gap": "16px",
            "items": [
              {
                "type": "button",
                "icon": "fa fa-times-circle",
                "label": "取消",
                "level": "default",
                "onEvent": { "click": { "actions": [{ "actionType": "goBack" }] } }
              },
              {
                "type": "button",
                "icon": "fa fa-edit",
                "label": "创建二维码",
                "level": "primary",
                "style": {
                  "backgroundImage": "linear-gradient(90deg, #2c67eb 0%, #9a44ea 100%)",
                  "color": "#fff",
                  "border": "none"
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