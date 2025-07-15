<script setup lang="ts">
import KamisComp from '@/components/KamisComp/index.vue';
const amisJSON = {
  type: 'page',
  style: { background: '#ffffff' },
  initApi: {
    method: 'get',
    url: '/yyzt-web/operation/ad/findAdPostion.do?page.page=1&page.size=10&type=nine',
    adaptor: `
      const statusMap = {1: '启用中', 2: '已废弃', 3: '已过期'};
      console.log(payload);
      const scanStatusMap = {1: '已留资', 2: '浏览中', 3: '已下载'};
      if(payload.data) {
        payload.data.statusLabel = statusMap[payload.data.status1] || '';
        if(Array.isArray(payload.data.scanRecords)) {
          payload.data.scanRecords = payload.data.scanRecords.map(item => ({
            ...item,
            statusLabel: scanStatusMap[item.status1] || ''
          }));
        }
      }
      return { ...payload, ...payload.data };
    `
  },
  body: [
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
                  "icon": "fas fa-info-circle",
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
                  "tpl": "二维码详情",
                  "style": {
                    "fontWeight": "bold",
                    "fontSize": "22px",
                    "color": "#fff"
                  }
                },
                {
                  "type": "tpl",
                  "tpl": "查看二维码详细信息和统计数据",
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
    // 内容部分
    {
      type: 'flex',
      style: { marginTop: '20px', marginBottom: '80px' },
      items: [
        {
          type: 'container',
          style: {
            width: '200px',
            background: '#f9fafc',
            borderRadius: '12px',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '16px'
          },
          body: [
            {
              type: 'flex',
              style: { alignItems: 'center', gap: '8px', marginBottom: '8px' },
              items: [
                { type: 'icon', icon: 'qrcode'},
                { type: 'tpl', tpl: '二维码预览', style: { fontWeight: 'bold', fontSize: '16px' } }
              ]
            },
            {
              type: 'image',
              src: "${imgUrl || 'https://cdn.jsdelivr.net/gh/iamcco/markdown-img@master/20200308-20200308155312.png'}",
              width: 140,
              height: 140,
              style: { borderRadius: '8px', background: '#fff', objectFit: 'contain' }
            },
            {
              type: 'button',
              label: '下载二维码',
              icon: 'fa fa-download',
              level: 'primary',
              style: { background: '#2563ea', color: '#fff', width: '100%', marginTop: '8px' },
              onClick: {
                actionType: 'download',
                args: { url: '${imgUrl}', fileName: 'qrcode.png' }
              },
              disabledOn: '!this.imgUrl'
            },
            {
              type: 'button',
              label: '复制链接',
              icon: 'fa fa-copy',
              level: 'default',
              style: { width: '100%', marginTop: '8px' },
              onClick: {
                actionType: 'copy',
                content: '${imgUrl}'
              },
              disabledOn: '!this.imgUrl'
            }
          ]
        },
        {
          type: 'container',
          style: { flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column', marginLeft: '20px' },
          body: [
            // 基本信息卡片
            {
              type: 'container',
              style: { background: '#f9fafc', borderRadius: '12px', marginBottom: '16px', padding: '20px' },
              body: [
                {
                  type: 'flex',
                  direction: 'row',
                  alignItems: 'center',
                  justify: 'flex-start',
                  style: { marginBottom: '16px' },
                  items: [
                    { type: 'icon', icon: 'fas fa-info-circle', style: { color: '#2c68ea', fontSize: '16px' } },
                    { type: 'tpl', tpl: '基本信息', style: { fontWeight: 'bold', fontSize: '16px', marginLeft: '8px' } }
                  ]
                },
                {
                  type: 'flex',
                  direction: 'row',
                  style: { rowGap: '12px', columnGap: '0', flexWrap: 'wrap' },
                  items: [
                    { type: 'container', style: { width: '50%' }, body: [ { type: 'tpl', tpl: '<span style="color:#9fa6b3;">渠道名称</span><br><b style="font-size:18px;">${channelName}</b>' } ] },
                    { type: 'container', style: { width: '50%' }, body: [ { type: 'tpl', tpl: '<span style="color:#9fa6b3;">客户经理</span><br><b style="font-size:18px;">${manager}</b>' } ] },
                    { type: 'container', style: { width: '50%' }, body: [ { type: 'tpl', tpl: '<span style="color:#9fa6b3;">营业部编号</span><br><b style="font-size:18px;">${branchNo}</b>' } ] },
                    { type: 'container', style: { width: '50%' }, body: [ { type: 'tpl', tpl: '<span style="color:#9fa6b3;">二维码类型</span><br><b style="font-size:18px;">${type}</b>' } ] },
                    { type: 'container', style: { width: '50%' }, body: [ { type: 'tpl', tpl: '<span style="color:#9fa6b3;">创建时间</span><br><b style="font-size:18px;">${createTime}</b>' } ] },
                    { type: 'container', style: { width: '50%' }, body: [ { type: 'tpl', tpl: '<span style="color:#9fa6b3;">状态</span><br><span class="status-label">${statusLabel}</span>' } ] }
                  ]
                }
              ]
            },
            // 扫码统计卡片
            {
              type: 'container',
              style: { background: '#eff6ff', borderRadius: '12px', marginBottom: '16px', padding: '20px' },
              body: [
                {
                  type: 'flex',
                  direction: 'row',
                  alignItems: 'center',
                  justify: 'flex-start',
                  style: { marginBottom: '16px' },
                  items: [
                    { type: 'icon', icon: 'fas fa-bar-chart', style: { color: '#1ea650', fontSize: '16px' } },
                    { type: 'tpl', tpl: '扫码统计', style: { fontWeight: 'bold', fontSize: '16px', marginLeft: '8px' } }
                  ]
                },
                {
                  type: 'flex',
                  style: { justifyContent: 'space-around' },
                  items: [
                    { type: 'container', body: [ { type: 'tpl', tpl: '<b style="color:#2c68ea;font-size:22px;">${scanTotal}</b><br><span style="color:#9fa6b3;">总扫码</span>' } ] },
                    { type: 'container', body: [ { type: 'tpl', tpl: '<b style="color:#1ea650;font-size:22px;">${scanToday}</b><br><span style="color:#9fa6b3;">今日扫码</span>' } ] },
                    { type: 'container', body: [ { type: 'tpl', tpl: '<b style="color:#9e49ea;font-size:22px;">${conversionRate}%</b><br><span style="color:#9fa6b3;">转化率</span>' } ] },
                    { type: 'container', body: [ { type: 'tpl', tpl: '<b style="color:#ea641f;font-size:22px;">${leads}</b><br><span style="color:#9fa6b3;">留资客户</span>' } ] }
                  ]
                }
              ]
            },
            // 最近扫码记录卡片
            {
              type: 'container',
              style: { background: '#f9fafc', borderRadius: '12px', marginBottom: '8px', padding: '20px' },
              body: [
                {
                  type: 'flex',
                  direction: 'row',
                  alignItems: 'center',
                  justify: 'flex-start',
                  style: { marginBottom: '16px' },
                  items: [
                    { type: 'icon', icon: 'fas fa-clock-o', style: { color: '#9e49ea', fontSize: '16px' } },
                    { type: 'tpl', tpl: '最近扫码记录', style: { fontWeight: 'bold', fontSize: '16px', marginLeft: '8px' } }
                  ]
                },
                {
                  type: 'list',
                  source: '${scanRecords}',
                  listItem: {
                    type: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    style: { width: '100%', background: '#fff', borderRadius: '8px', marginBottom: '8px', padding: '12px 16px' },
                    items: [
                      // 左侧icon+model+region
                      {
                        type: 'flex',
                        alignItems: 'center',
                        items: [
                          {
                            type: 'container',
                            style: {
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: "${phoneType == 'huawei' ? '#f3eafd' : phoneType == 'android' ? '#eaf1fd' : '#eafdf3'}"
                            },
                            body: [
                              {
                                type: 'icon',
                                icon: "${phoneType == 'huawei' ? 'fas fa-mobile' : 'fas fa-tablet-alt' }",
                                style: {
                                  color: "${phoneType == 'huawei' ? '#9e49ea' : phoneType == 'android' ? '#2c68ea' : '#1ea650'}",
                                  fontSize: '22px'
                                }
                              }
                            ]
                          },
                          {
                            type: 'flex',
                            direction: 'column',
                            style: { justifyContent: 'center', marginLeft: '10px' },
                            items: [
                              { type: 'tpl', tpl: '<b style="font-size:16px;">${model}</b>' },
                              { type: 'tpl', tpl: '<span style="font-size:14px;color:#9fa6b3;">${region}</span>' }
                            ]
                          }
                        ]
                      },
                      // 右侧scanTime+label
                      {
                        type: 'flex',
                        direction: 'column',
                        style: { alignItems: 'flex-end' },
                        items: [
                          { type: 'tpl', tpl: '<b style="font-size:16px;">${scanTime}</b>' },
                          { type: 'tpl', tpl: '<span class="status-label">${label}</span>' }
                        ]
                      }
                    ]
                  }
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
              { "type": "tpl", "tpl": "数据实时更新，最后更新：刚刚", "style": { "fontSize": "14px", "color": "#a8acb4", "marginLeft": "8px"} }
            ]
          },
          {
            "type": "flex",
            "direction": "row",
            "gap": "16px",
            "items": [
              {
                "type": "button",
                "icon": "fas fa-check",
                "label": "确定",
                "level": 'primary',
                "onEvent": { "click": { "actions": [{ "actionType": "goBack" }] } }
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

<style>
.selected-card {
  box-shadow: 0 2px 8px rgba(44,103,235,0.08);
}
.unselected-card {
  box-shadow: none;
}
.amis-scope .cxd-List-items {
  border: none;
  background: #f9fafc;
}
</style> 