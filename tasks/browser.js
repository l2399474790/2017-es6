import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
// 命令行参数
import args from './util/args';

gulp.task('browser',(cb)=>{
  // 没用watch监听直接返回回调
  if(!args.watch) return cb();
  // 监听目录，要执行任务
  gulp.watch('app/**/*.js',['scripts']);
  gulp.watch('app/**/*.ejs',['pages']);
  gulp.watch('app/**/*.css',['css']);
});
// 任务怎么自动跑起来
