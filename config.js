var _ = require('underscore');
var gulpBowerCopyLocal = require('./config_local');

var gulpBowerCopy = {};  // Source -> Destination.

// Commonplace Core.
var corePath = 'bower_components/commonplace/dist/core/';
var core = [
    'assert',
    'buckets',
    'builder',
    'cache',
    'capabilities',
    'defer',
    'forms',
    'helpers',
    'log',
    'login',
    'models',
    'navigation',
    'notification',
    'requests',
    'storage',
    'urls',
    'user',
    'utils',
    'z'
];

_.each(core, function(module) {
    gulpBowerCopy[corePath + module + '.js'] = 'src/media/js/commonplace/';
});

// Extend with local config.
gulpBowerCopy = _.extend(gulpBowerCopy, gulpBowerCopyLocal);

exports.gulpBowerCopy = gulpBowerCopy;
