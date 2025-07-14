<script setup lang="ts">
import * as KamisComp from "@/components/KamisComp/index.vue";
const searchApi = {
  url: "/yyzt-web/operation/deposit/leave/findByPages",
  method: "get",
  requestAdaptor: (api: any, context: any) => {
    // 查询参数格式化
    const data = Object.assign({}, context.filter);
    if (data.submissionTime) {
      const [startTime, endTime] = data.submissionTime.split(',');
      delete data.submissionTime;
      data.startTime = startTime;
      data.endTime = endTime;
    }
    Object.assign(api.query, {...data})
    return {
      ...api,
      data
    };
  },
  adaptor: function (payload: any, response: any, api: any, context: any) {
    return {
      status: 0,
      data: {
        items: payload.data.content,
        total: payload.data.total,
      }
    };
  },
};

const getUrlApi = {
  url: "/yyzt-web/operation/deposit/leave/getUrl",
  method: "get",
  requestAdaptor: function (api: any, context: any) {
    console.log(context.id);
    api.query = {
      id: context.id
    };
    return {
      ...api,
    };
  },
  adaptor: function (payload: any, response: any, api: any, context: any) {
    return {
      imageList: payload.data
    };
  }
};

const actionButtons = [
  {
    type: "button",
    label: "查看",
    level: "link",
    className: "text-blue-500",
    onEvent: {
      click: {
        actions: [
          {
            "actionType": "reload",
            "componentId": "crud-reload",
          }
        ]
      },
    },
    actionType: "dialog",
    dialog: {
      title: "入金审核",
      id: 'verify-dialog',
      size: "md",
      showCloseButton: true,
      mountContainer: false,
      body: {
        type: "service",
        api: getUrlApi,
        body: {
          type: "flex",
          items: [
            {
              type: "images",
              source: "${imageList}",
              enlargeAble: true
            },
            {
              type: "form",
              justify: "space-around",
              alignItems: "center",
              style: {
                display: 'none',
              },
              api: {
                method: "post",
                url: "/yyzt-web/operation/deposit/leave/updateStatus",
                data: {
                  status: "${status}",
                  id: "${id}",
                },
                dataType: "form-data",
              },
            }
          ],
        }
      },
      actions: [
        {
          type: "button",
          label: "确认到账",
          level: "success",
          className: "w-32",
          actionType: "submit",
          onEvent: {
            click: {
              actions: [
                {
                  "actionType": "setValue",
                  "componentId": "verify-dialog",
                  "args": {
                    "value": {
                      "status": 2
                    }
                  }
                }
              ]
            },
          },
        },
        {
          type: "button",
          label: "未到账",
          level: "danger",
          className: "w-32",
          actionType: "submit",
          onEvent: {
            click: {
              actions: [
                {
                  "actionType": "setValue",
                  "componentId": "verify-dialog",
                  "args": {
                    "value": {
                      "status": 3
                    }
                  }
                }
              ]
            },
          },
        },
      ]
    },
  },
];

const mainBody = [
  // 数据展示区域
  {
    type: "flex",
    className: "mb-4",
    items: [
      {
        type: "container",
        className: "w-1/3 mr-3 rounded-xl shadow-sm",
        style: {
          backgroundColor: "#ffffff",
          borderRadius: "12px",
        },
        body: {
          type: "flex",
          items: [
            {
              type: "container",
              className: "w-3/4 p-4",
              body: [
                {
                  type: "tpl",
                  tpl: "今日入金",
                  inline: false,
                  className: "text-gray-500 text-sm",
                },
                {
                  type: "tpl",
                  tpl: "${todayDeposit | number}",
                  className: "font-bold text-2xl mt-1",
                },
              ],
            },
            {
              type: "tpl",
              tpl: "<i class='fas fa-dollar-sign text-2xl text-blue-500'></i>",
              className: "w-1/4 flex items-center justify-center",
            },
          ],
        },
      },
      {
        type: "container",
        className: "w-1/3 mr-3 rounded-xl shadow-sm",
        style: {
          backgroundColor: "#ffffff",
          borderRadius: "12px",
        },
        body: {
          type: "flex",
          items: [
            {
              type: "container",
              className: "w-3/4 p-4",
              body: [
                {
                  type: "tpl",
                  tpl: "今日到账",
                  inline: false,
                  className: "text-gray-500 text-sm",
                },
                {
                  type: "tpl",
                  tpl: "${todayArrivesToday | number}",
                  className: "font-bold text-2xl mt-1",
                },
              ],
            },
            {
              type: "tpl",
              tpl: "<i class='fas fa-hand-holding-usd text-2xl text-green-500'></i>",
              className: "w-1/4 flex items-center justify-center",
            },
          ],
        },
      },
      {
        type: "container",
        className: "w-1/3 mr-3 rounded-xl shadow-sm",
        style: {
          backgroundColor: "#ffffff",
          borderRadius: "12px",
        },
        body: {
          type: "flex",
          items: [
            {
              type: "container",
              className: "w-3/4 p-4",
              body: [
                {
                  type: "tpl",
                  tpl: "待审核",
                  inline: false,
                  className: "text-gray-500 text-sm",
                },
                {
                  type: "tpl",
                  tpl: "${todayReviewPending | number}",
                  className: "font-bold text-2xl mt-1",
                },
              ],
            },
            {
              type: "tpl",
              tpl: "<i class='fas fa-comments-dollar text-2xl text-yellow-500'></i>",
              className: "w-1/4 flex items-center justify-center",
            },
          ],
        },
      },
    ],
  },

  // 搜索区域
  {
    type: "container",
    className: "mb-4 p-4 rounded shadow-sm",
    style: {
      backgroundColor: "#ffffff",
    },
    body: {
      type: "flex",
      className: "w-full",
      style: {
        justifyContent: "space-between",
        alignItems: "center",
      },
      items: [
        {
          type: "flex",
          style: {
            justifyContent: "flex-start",
            alignItems: "center",
            "flex-wrap": "wrap",
          },
          // 注：查询参数放在filter中
          items: [
            {
              type: "flex",
              justify: "flex-start",
              items: [
                { type: "tpl", tpl: "客户号：", className: "mr-1 self-center" },
                {
                  type: "input-text",
                  name: "filter.customerNumber",
                  placeholder: "请输入客户号",
                  className: "mr-3 w-48 mb-0",
                },
              ],
              className: "mr-4",
              style: { alignItems: "center", minWidth: "280px", marginBottom: "10px" },
            },
            {
              type: "flex",
              justify: "flex-start",
              items: [
                { type: "tpl", tpl: "手机号码：", className: "mr-1 self-center" },
                {
                  type: "input-text",
                  name: "filter.phone",
                  placeholder: "请输入手机号码",
                  className: "w-48 mb-0",
                },
              ],
              className: "mr-4",
              style: { alignItems: "center", minWidth: "280px", marginBottom: "10px" },
            },
            {
              type: "flex",
              justify: "flex-start",
              items: [
                { type: "tpl", tpl: "提交时间：", className: "mr-1 self-center" },
                {
                  type: "input-datetime-range",
                  name: "filter.submissionTime",
                  placeholder: "请选择提交时间区间",
                  className: "w-84 mb-0",
                  format: 'YYYY-MM-DD'
                },
              ],
              className: "mr-4",
              style: { alignItems: "center", marginBottom: "10px" },
            },
            {
              type: "flex",
              justify: "flex-start",
              items: [
                { type: "tpl", tpl: "状态：", className: "mr-1 self-center" },
                {
                  type: "select",
                  name: "filter.status",
                  placeholder: "请选择状态",
                  className: "w-32 mb-0",
                  options: [
                    { label: "全部", value: "" },
                    { label: "待审核", value: "1" },
                    { label: "已到款", value: "2" },
                    { label: "未到款", value: "3" },
                  ],
                },
              ],
              style: { alignItems: "center", minWidth: "280px", marginBottom: "10px" },
            },
          ],
        },
        {
          type: "submit",
          label: "查询",
          icon: "fa fa-search",
          className: "h-9",
          level: "primary",
          style: {
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
          },
          onEvent: {
            click: {
              actions: [
                {
                  "actionType": "reload",
                  "componentId": "crud-reload",
                }
              ]
            },
          },
        },
      ],
    },
  },

  // 列表展示区域
  {
    type: "card",
    className: "rounded shadow-sm",
    header: {
      title: "入金列表",
      className: "font-bold",
    },
    body: {
      type: "crud",
      id: "crud-reload",
      api: searchApi,
      syncLocation: false,
      columnsTogglable: false,
      // type: 'table',
      columns: [
        {
          name: "submissionTime",
          label: "提交时间",
          type: "tpl",
          tpl: "${submissionTime}",
        },
        {
          name: "customerNumber",
          label: "客户号",
          type: "tpl",
          tpl: "${customerNumber}",
        },
        {
          name: "phone",
          label: "手机号码",
          type: "tpl",
          tpl: "${phone}",
        },
        {
          name: "type",
          label: "入金方式",
          type: "mapping",
          map: {
            "1": "<span class='label label-info'>FPS转数快</span>",
            "2": "<span class='label label-info'>E-Banking网银转账</span>",
            "3": "<span class='label label-info'>ATM/柜台转账</span>",
            "4": "<span class='label label-info'>Check支票转账</span>",
          },
        },
        {
          name: "transferAmount",
          label: "转账金额",
          type: "tpl",
          tpl: "${transferAmount}",
        },
        {
          name: "transferAccount",
          label: "转账账户",
          type: "tpl",
          tpl: "${transferAccount}",
        },
        {
          name: "status",
          label: "状态",
          type: "mapping",
          map: {
            "1": "<span class='label label-info'>待审核</span>",
            "2": "<span class='label label-success'>已到款</span>",
            "3": "<span class='label label-danger'>未到款</span>",
          },
        },
        {
          type: "operation",
          label: "操作",
          buttons: actionButtons,
          className: "text-center",
        },
      ],
      headerToolbar: [],
      showPageInfo: true,
      "perPage": 10,
      pageField: 'page.page',
      perPageField: 'page.size',
      footerToolbar: ["statistics", "pagination"],
    },
  },
];

const amisJSON = {
  type: "page",
  body: {
    // 为service添加一个id属性，用于下面做reload
    type: "service",
    id: "service-reload",
    api: {
      url: '/yyzt-web/operation/deposit/leave/getTodayDepositDto',
    },
    body: {
      type: "flex",
      direction: "column",
      style: {
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        justifyContent: 'start',
      },
      items: [
        {
          type: "container",
          className: "mb-4 shadow-sm rounded",
          style: {
            "backgroundColor": "#ffffff",
            "boxShadow": "0 2px 8px rgba(0,0,0,0.1)"
          },
          body: {
            type: "flex",
            className: "p-4",
            style: {
              justifyContent: "space-between",
              alignItems: "center",
            },
            items: [
              {
                type: "flex",
                direction: "column",
                items: [
                  {
                    type: "tpl",
                    inline: false,
                    tpl: "入金审核",
                    className: "font-bold text-xl",
                  },
                  {
                    type: "tpl",
                    tpl: "管理入金信息",
                    className: "text-gray-600 text-sm mt-1",
                  },
                ],
              },
              {
                type: "icon",
                icon: "fa fa-times",
                className: "cursor-pointer",
                style: {
                  color: "white"
                },
                onEvent: {
                  click: {
                    actions: [
                      {
                        actionType: "router-link",
                        args: {
                          path: "/audit-management"
                        }
                      }
                    ]
                  }
                }
              }
            ],
          },
        },
        {
          type: "container",
          className: "p-4",
          body: mainBody,
        },
      ],
    },
    data: {
      todayDeposit: "--",
      todayArrivesToday: "--",
      todayReviewPending: "--"
    }
  },
};
</script>

<template>
  <KamisComp.default :amisJSON="amisJSON" />
</template>
