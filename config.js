/* Configures component and module upgrade paths. */
var config = require('commonplace').config;
var extend = require('node.extend');

var LIB_DEST_PATH = config.LIB_DEST_PATH;

var localConfig = extend(true, {
    bowerConfig: {
        // Bower configuration for which files to get, and where to put them.
        // [Source, excluding bower_components]: [Destination].
        // 'isotope/dist/isotope.pkgd.js': config.LIB_DEST_PATH,
    },
    requireConfig: {
        // RequireJS configuration for development, notably files in lib/.
        // [Module name]: [Module path].
        paths: {
            // 'isotope': 'lib/isotope.pkgd',
        }
    }
}, config);

localConfig.inlineRequireConfig = config.makeInlineRequireConfig(
    localConfig.requireConfig);

module.exports = localConfig;
