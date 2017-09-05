import gulp from 'gulp';
// 删除文件或文件夹的包
import del from 'del';
import args from './util/args';

// 清空编译后的文件（js,css,模板），防止产生混淆
gulp.task('clean',()=>{
  return del(['server/public','server/views'])
});
