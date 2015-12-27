var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
//Going to create a es6 task

gulp.task('default', function()  {
  return gulp.src('src/test.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/combined.js'));
});


//Also create a sass task

gulp.task('sass', function () {
  gulp.src('scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});
