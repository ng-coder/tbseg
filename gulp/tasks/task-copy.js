/**
 * Created by rafal on 02.05.16.
 */
'use strict';

module.exports = (gulp, options, plugins) => {

  gulp.task('clear-all', () => {
    return plugins.del(['./app/*']);
  });

  gulp.task('copy-html', () => {
    return gulp.src(['./src/frontend/**/*.html'])
      .pipe(gulp.dest('./app/public_html/'));
  });

  gulp.task('copy-bower-components', () => {
    return gulp.src(['./src/frontend/bower_components/**/*'])
      .pipe(gulp.dest('./app/public_html/bower_components/'));
  });

  gulp.task('copy-modules', () => {
    return gulp.src(['./src/frontend/modules/**/*.js'])
      .pipe(plugins.babel({
        compact: false,
        presets: ['es2015']
      }))
      .pipe(gulp.dest('./app/public_html/modules/'));
  });

  gulp.task('copy-css', () => {
    return gulp.src(['./src/frontend/scss/**/*.scss'])
      .pipe(plugins.concat('app.scss'))
      .pipe(plugins.sass({ importer: plugins.compassImporter }).on('error', plugins.sass.logError))
      .pipe(gulp.dest('./app/public_html/'));
  });

  gulp.task('copy-js', () => {
    return gulp.src(['./src/frontend/app.js'])
      .pipe(gulp.dest('./app/public_html/'));
  });

};