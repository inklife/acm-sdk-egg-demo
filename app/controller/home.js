'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const demo = await this.app.acm.getConfig('demo', 'DEFAULT_GROUP', 'json');
    // 使用redis计数
    // 当前页面浏览量
    const count = await this.app.rd.incr('acm-sdk-egg-demo-count');
    await this.ctx.render('home', {
      notice: demo.notice,
      imgUrls: demo.imgUrls,
      jqueryVersion: demo.version.jq,
      count,
    });
  }
}

module.exports = HomeController;
