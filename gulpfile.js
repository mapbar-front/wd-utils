// 1.这个gulp对象就可以配合插件来进行构建工作.
const gulp = require('gulp')

// 2.引入gulp-uglify模块.返回的是1个函数.
const uglify = require('gulp-uglify')

// 3.引入babel
const babel = require('gulp-babel')

const clean = require('gulp-clean')

gulp.task('clean', function () {
  return gulp.src('dist', { allowEmpty: true }).pipe(clean())
})

gulp.task('dist', async function () {
  gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))// es6转es5
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})

gulp.task('build', gulp.series(['clean', 'dist']))
