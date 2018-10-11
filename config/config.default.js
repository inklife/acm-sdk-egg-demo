'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539010329040_4373';

  // add your config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.nj': 'nunjucks',
    },
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
  };

  // 数据库配置
  config.acm = {
    // 单数据库信息配置
    client: {
      endpoint: 'acm.aliyun.com', // acm 控制台查看
      namespace: '需要修改', // acm 控制台查看
      accessKey: '需要修改', // acm 控制台查看
      secretKey: '需要修改', // acm 控制台查看
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，关闭
    agent: false,
  };

  return config;
};
