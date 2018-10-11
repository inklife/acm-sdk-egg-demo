'use strict';
// {app_root}/app.js
module.exports = app => {
  app.beforeStart(async () => {
    // 获取redis配置
    const demoConfig = await app.acm.getConfig('demo', 'DEFAULT_GROUP', 'json');
    // { host: '127.0.0.1', port: 6379 , password: '', db: 0 }
    const connPara = demoConfig.redis;
    app.rd = app.redis.createInstance(connPara);
  });
};
