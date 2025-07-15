import Mock from 'mockjs';

// 设置 mock 延迟时间
Mock.setup({
  timeout: '200-600'
});

// 二维码统计接口
Mock.mock(/\/v1\/qrcode\/statistics(\?.*)?$/, 'get', (options: any) => {
  console.log('Mock 拦截到二维码统计请求:', options.url);
  
  // 生成随机统计数据
  const randomData = Mock.mock({
    "qrcodeNum|50-300": 1,        // 总二维码：50-300
    "totalScanCount|100-2000": 1, // 总扫描：100-2000
    "todayScanCount|5-50": 1,     // 今日扫码：5-50
    "todayInfoLeftCount|1-20": 1  // 今日留资：1-20
  });
  
  return {
    "code": 200,
    "msg": "success",
    "data": randomData
  };
});

// 二维码状态变更接口
Mock.mock(/\/v1\/qrcode\/changeStatus$/, 'post', (options: any) => {
  console.log('Mock 拦截到状态变更请求:', options.url, options.body);
  const body = JSON.parse(options.body);
  
  return {
    "code": 0,
    "msg": "ok",
    "data": {
      "id": body.id,
      "status": body.status
    }
  };
});

// 二维码列表接口
Mock.mock(/\/v1\/qrcode\/list(\?.*)?$/, 'get', (options: any) => {
  console.log('Mock 拦截到二维码列表请求:', options.url);
    
  // 生成随机列表数据
  const randomList = Mock.mock({
    'list|5-15': [{
      'id|+1': 1,
      'appId': '@word(5, 8)',
      'qrcodeName': '@ctitle(4, 8)',
      'customerManager': '@cname',
      'businessDepartment|1': ['001', '002', '003', '004', '005'],
      'channelCode': '@word(4, 6)',
      'qrcodeType|1': [1, 2],
      'totalScanCount|50-500': 1,
      'todayScanCount|1-30': 1,
      'status|1': [0, 1],
      'validityPeriod|1': [-1, 30, 90, 180, 365],
      'scanLimit|1': [-1, 100, 500, 1000],
      'createTime': '@datetime',
      'qrcodeImageUrl': 'https://img95.699pic.com/element/40253/2702.png_860.png'
    }]
  });
  
  return {
    "code": 200,
    "msg": "success",
    "data": {
        "list": randomList.list,
        "pagination": {
            "current": 1,
            "pageSize": 10,
            "total": randomList.list.length
        }
    }
  }
});

// 用户信息接口
Mock.mock(/\/v1\/user\/info(\?.*)?$/, 'get', {
  "code": 200,
  "msg": "success",
  "data": Mock.mock({
    "id|1-100": 1,
    "username": "@word(5, 10)",
    "email": "@email",
    "avatar": "https://via.placeholder.com/100",
    "role|1": ["admin", "user", "manager"]
  })
});

console.log('🎯 Mock 接口配置完成，已配置以下接口:');
console.log('  - /v1/qrcode/statistics (二维码统计)');
console.log('  - /v1/qrcode/changeStatus (状态变更)');
console.log('  - /v1/qrcode/list (二维码列表)');
console.log('  - /v1/user/info (用户信息)');
