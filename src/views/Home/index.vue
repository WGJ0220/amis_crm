<!--
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2025-01-14 10:36:26
 * @LastEditors: lixintao
 * @LastEditTime: 2025-07-04 15:55:19
 * @Descripttion: 
-->
<script setup lang="ts">
import KamisComp from '@/components/KamisComp/index.vue';
const amisJSON = {
  "type": "page",
  "title": "首页配置管理系统",
  "body": [
    {
      "type": "form",
      "title": "",
      "mode": "inline",
      "wrapWithPanel": false,
      "className": "bg-white p-4 mb-4 rounded shadow-sm",
      "controls": [
        {
          "type": "text",
          "name": "name",
          "label": "首页名称",
          "placeholder": "请输入首页名称查询",
          "size": "md"
        },
        {
          "type": "text",
          "name": "code",
          "label": "首页编码",
          "placeholder": "请输入首页编码查询",
          "size": "md"
        },
        {
          "type": "submit",
          "label": "查询",
          "level": "primary",
          "className": "mr-2",
          "actionType": "ajax",
          "api": "/yyzt-web/operation/adconfig/adConfigList.do"
        },
        {
          "type": "reset",
          "label": "重置",
          "level": "default"
        }
      ]
    },
    {
      "type": "card",
      "header": {
        "title": "首页配置列表",
        "className": "font-bold text-lg"
      },
      "body": {
        "type": "table",
        "source": "${items}",
        "className": "w-full",
        "columns": [
          {
            "name": "version",
            "label": "版本号",
            "type": "text",
            "className": "font-medium"
          },
          {
            "name": "name",
            "label": "首页名称",
            "type": "text"
          },
          {
            "name": "code",
            "label": "首页编码",
            "type": "text"
          },
          {
            "name": "create_time",
            "label": "创建时间",
            "type": "datetime",
            "format": "YYYY-MM-DD HH:mm:ss"
          },
          {
            "name": "build",
            "label": "版本",
            "type": "text"
          },
          {
            "name": "status",
            "label": "状态",
            "type": "mapping",
            "map": {
              "E38#i": "<span class='text-green-500'>✓ 有效</span>",
              "C#i": "<span class='text-blue-500'>配置中</span>",
              "B#i": "<span class='text-yellow-500'>构建中</span>",
              "E#i": "<span class='text-red-500'>错误</span>"
            }
          },
          {
            "type": "operation",
            "label": "操作",
            "buttons": [
              {
                "type": "button",
                "label": "编辑",
                "level": "link",
                "className": "text-blue-600 hover:text-blue-800",
                "actionType": "dialog",
                "dialog": {
                  "title": "编辑首页配置",
                  "body": "表单内容"
                }
              },
              {
                "type": "button",
                "label": "发布",
                "level": "link",
                "className": "text-green-600 hover:text-green-800",
                "actionType": "ajax",
                "api": "/api/publish/${id}"
              },
              {
                "type": "button",
                "label": "删除",
                "level": "link",
                "className": "text-red-600 hover:text-red-800",
                "actionType": "ajax",
                "confirmText": "确认删除该配置？",
                "api": "/api/delete/${id}"
              }
            ]
          }
        ],
        "affixHeader": true
      }
    }
  ]
};
</script>

<template>
  <KamisComp :amisJSON="amisJSON"/>
</template>
