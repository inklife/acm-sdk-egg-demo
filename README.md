# acm-sdk-egg-demo

一个简单的demo。

https://help.aliyun.com/document_detail/60137.html

## 快速入门

### 修改配置

阿里云[ACM控制台](https://acm.console.aliyun.com/)

```js
// {app_root}/config/config.${EGG_SERVER_ENV}.js
module.exports = appInfo => {
  const config = exports = {};
  config.acm = {
    client: {
      endpoint: 'acm.aliyun.com', // acm 控制台查看
      namespace: '${namespace}', // acm 控制台查看
      accessKey: '${accessKey}', // acm 控制台查看
      secretKey: '${secretKey}', // acm 控制台查看
      dataId: 'demo',
      group: 'DEFAULT_GROUP',
    },
    app: true,
    agent: false,
  };

  return config;
};
```

### ACM参考配置

- Data ID: demo
- 配置内容

```json
{
    "notice": "这是一则公告",
    "imgUrls": [
        "http://img.mp.sohu.com/upload/20170711/498652c9e1ce429db37c18006495b589_th.png",
        "http://www.uml.org.cn/safe/images/2018022724.jpg",
        "https://zos.alipayobjects.com/rmsportal/JFKAMfmPehWfhBPdCjrw.svg"
    ],
    "version": {
        "jq": "2.2.4"
    },
    "redis": {
        "host": "127.0.0.1",
        "port": 6379,
        "password": "",
        "db": 0
    }
}
```

注：redis连接参数配置需要修改。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```
