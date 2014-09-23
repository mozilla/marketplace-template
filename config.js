var config = require('commonplace').config;
var extend = require('node.extend');

module.exports = extend(true, {
    bowerConfig: {},
    requireConfig: {}
}, config);
