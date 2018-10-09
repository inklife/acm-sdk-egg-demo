// {app_root}/app.js
module.exports = app => {
  app.beforeStart(async () => {
    // 手动触发初始化
    await app.acm.$init();
    // 获取redis配置
    // { host: '127.0.0.1', port: 6379 , password: '', db: 0 }
    const redisConfig = app.acm.demo.redis;
    app.rd = app.redis.createInstance(redisConfig);
  });
};