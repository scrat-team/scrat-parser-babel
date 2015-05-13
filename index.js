'use strict';

module.exports = function (content, file, cfg) {
  cfg = fis.util.clone(cfg);
  return require('babel-core').transform(content, cfg).code;
};