var gulp = require('gulp');
var sass = require('gulp-sass');
var include = require('gulp-file-include');
var changed = require('gulp-changed');
var del = require('del');
var gutil = require('gulp-util');
var cleanCSS = require('gulp-clean-css');


var DEST = './build/';

gulp.task('styles', function() {
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(DEST + '/css/'));
});

gulp.task('includes', function() {
    gulp.src('./pages/*.html')
    .pipe(include({
      prefix: '@@',
      basepath: './fragments'
    }))
    .pipe(gulp.dest(DEST));
});

gulp.task('static', function() {
    gulp.src('./static/**').pipe(changed(DEST)).pipe(gulp.dest(DEST));
    // TODO Minify js
    gulp.src('./js/*').pipe(gulp.dest('./build/js/'));
});

gulp.task('clean', function() {
  return del(['build/**/*', '!build/']);
});

 gulp.task('release', ['static', 'styles', 'includes'], function() {
   gutil.log('Release : Done');
 });

//Watch task
gulp.task('default',function() {
    gulp.watch('scss/*.scss', ['styles']);
    gulp.watch('./fragments/*.html', ['includes']);
    gulp.watch('./pages/*.html', ['includes']);
    gulp.watch('./static/**', ['static']);
});
