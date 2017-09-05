import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
// 命令行参数
import args from './util/args';

gulp.task('css',()=>{
  // 将css文件不动放到server/public
  return gulp.src('app/**/*.css')
    .pipe(gulp.dest('server/public'))
    .pipe(gulpif(args.watch,livereload()))
});
