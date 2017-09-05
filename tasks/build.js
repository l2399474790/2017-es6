import gulp from 'gulp';
// 处理包的顺序问题
import gulpSequence from 'gulp-sequence';

// 先把server两个相关的目录文件都清掉——把css拷过去——编译模板——执行脚本——启动服务
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
