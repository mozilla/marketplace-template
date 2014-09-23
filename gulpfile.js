var gulp = require('gulp');
var install = require("gulp-install");
var _ = require('underscore');
var config = require('./config');


gulp.task('install', function(done) {
    // Bumps bower and npm dependencies.
    gulp.src(['./bower.json', './package.json'])
        .pipe(install())
        .end(done);
});


gulp.task('bower_copy', ['install'], function() {
    // Copy files from Bower into project.
    _.each(Object.keys(config.gulpBowerCopy), function(source) {
        var dest = config.gulpBowerCopy[source];
        gulp.src('bower_components/' + source)
            .pipe(gulp.dest(dest));
    });
});

gulp.task('update', ['bower_copy']);

gulp.task('default');
