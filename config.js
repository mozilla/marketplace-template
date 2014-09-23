var _ = require('underscore');
var gulpBowerCopyLocal = require('./config_local');

var CORE_MODULES = [
    // Core JS modules.
    // Will tell Gulp which modules to pull into commonplace/.
    // Will tell the require.js config which files live in commonplace/.
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
var CORE_SRC_PATH = 'commonplace/dist/core/';
var CORE_DEST_PATH = 'src/media/js/commonplace/';

var LIB_DEST_PATH = 'src/media/js/lib/';
var LIB_MODULES = {
    // Third-party JS modules.
    // Will tell Gulp which modules to pull into lib/.
    // Will tell the require.js config which files live in lib/.
    'requirejs/require.js': LIB_DEST_PATH,
    'jquery/jquery.js': LIB_DEST_PATH,
    'nunjucks/browser/nunjucks-slim.js': LIB_DEST_PATH + 'nunjucks.js',
    'underscore/underscore.js': LIB_DEST_PATH,
};

// Build config object to tell Gulp which Bower files into project and where.
var gulpBowerCopy = {};
_.each(CORE_MODULES, function(module) {
    gulpBowerCopy[CORE_SRC_PATH + module + '.js'] = 'src/media/js/commonplace/';
});
gulpBowerCopy = _.extend(gulpBowerCopy, LIB_MODULES);
// Extend with local config.
gulpBowerCopy = _.extend(gulpBowerCopy, gulpBowerCopyLocal);

var requireConfig = {};

module.exports = {
    gulpBowerCopy: gulpBowerCopy,
    requireConfig: requireConfig
};
