import gulp from 'gulp';
import gulpif from 'gulp-if';
// 启动服务器的包（作为服务器）
import liveserver from 'gulp-live-server';
// 命令行参数
import args from './util/args';

gulp.task('serve',(cb)=>{
  // 如果不是处于监听状态直接返回回调函数
  if(!args.watch) return cb();
  // 如果是监听状态，创建一个服务器，执行（命令行--harmony），执行后面的代码(后面的是express的一个默认服务)
  var server = liveserver.new(['--harmony','server/bin/www']);
  // 启动服务器
  server.start();

  // 服务器相关文件（前端资源文件）改变，浏览器进行刷新
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    // 把相应改动告诉服务器
    server.notify.apply(server,[file]);
  });

  // 服务器中某些路由或某些接口发生变化，重启服务
  // routes 这个文件夹下开发接口，app.js是服务的入口
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    // 重启服务器
    server.start.bind(server)();
  });
});
