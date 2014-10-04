var glob = require('glob');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpUtil = require('gulp-util');
var insert = require("gulp-insert");
var install = require("gulp-install");
var rjs = require('gulp-requirejs');
var _ = require('underscore');
var config = require('./config');

var paths = {
    bower: 'bower_components/',
};
paths.require = paths.bower + 'requirejs/require.js';
paths.almond = paths.bower + 'almond/almond.js';
paths.init = paths.bower + 'commonplace/dist/core/init.js';


gulp.task('install', function(done) {
    // Bumps bower and npm dependencies.
    gulp.src(['bower.json', 'package.json'])
        .pipe(install())
        .pipe(gulpUtil.noop())  // Wait for dependencies to finish installing.
        .on('finish', function() {
            done();
        });
});


gulp.task('bower_copy', ['install'], function() {
    // Copy files from Bower into project.
    _.each(Object.keys(config.bowerConfig), function(source) {
        var dest = config.bowerConfig[source];
        gulp.src(paths.bower + source)
            .pipe(gulp.dest(dest));
    });
});


gulp.task('require_config', ['install'], function() {
    // Build a require.js file that contains a convenience call to
    // require.config that sets up some pre-known paths.
    gulp.src(paths.require)
        .pipe(insert.append(config.inlineRequireConfig))
        .pipe(gulp.dest(config.LIB_DEST_PATH));
});


gulp.task('requirejs_build', function() {
    // Uses the RequireJS optimizer (r.js) to bundle our JS modules.
    // r.js will read our RequireJS config to handle shims, paths, and
    // anonymous modules.

    // Remove fallback paths (e.g, 'settings': ['settings', 'settings_l']).
    var require_paths = config.requireConfig.paths;
    _.each(Object.keys(require_paths), function(key) {
        if (_.isObject(require_paths[key])) {
            delete require_paths[key];
        }
    });

    // Search for view modules to include since they are dynamically defined in
    // routes.js and r.js can't parse that.
    glob(config.JS_DEST_PATH + '**/views/**/*.js', {}, function(e, files) {
        var views = _.map(files, function(file) {
            var paths = file.split('/');
            return 'views/' + paths[paths.length - 1].replace('.js', '');
        });

        rjs({
            baseUrl: config.JS_DEST_PATH,
            // Output filename.
            out: 'include.js',
            // Modules to optimize, dependencies will map.
            exclude: ['templates'],
            include: ['main'].concat(views),
            paths: config.requireConfig.paths,
            shim: config.requireConfig.shim,
        // r.js wrapper returns virtual file, pipe it to our destination.
        })
        .pipe(concat(paths.almond))
        .pipe(concat(paths.init))
        .pipe(uglify())
        .pipe(gulp.dest(config.JS_DEST_PATH));
    });
});


gulp.task('default', []);
gulp.task('update', ['bower_copy', 'require_config']);
gulp.task('build', ['requirejs_build']);
