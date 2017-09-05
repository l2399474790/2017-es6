import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
// 命令参数的包
import args from './util/args';

gulp.task('pages',()=>{
  // 原封不动的放到server文件夹下
  return gulp.src('app/**/*.ejs')
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch,livereload()))
})
