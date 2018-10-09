'use strict';

// had enabled by egg
// exports.static = true;
// {app_root}/config/plugin.js
exports.acm = {
  enable: true,
  package: 'egg-acm',
};

// config/plugin.js
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};