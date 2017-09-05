import gulp from 'gulp';
// 在gukp语句中做if判断的
import gulpif from 'gulp-if';
// 处理文件拼接
import concat from 'gulp-concat';
// 打包
import webpack from 'webpack';
// 文件流
import gulpWebpack from 'webpack-stream';
// 重命名
import named from 'vinyl-named';
// 热更新
import livereload from 'gulp-livereload';
// 处理文件信息流的（防止由gulp插件错误导致管道破裂）
import plumber from 'gulp-plumber';
// 对文件重命名
import rename from 'gulp-rename';
// 压缩js、css
import uglify from 'gulp-uglify';
// 在命令行输出的包
import {log,colors} from 'gulp-util';
// 对命令行参数进行解析的包
import args from './util/args';

// 创建一个任务
gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
      // 文件重新命名
    .pipe(named())
      // 利用webpack-stream处理
    .pipe(gulpWebpack({
      module:{
        // 用 babel-loader处理es6
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
        // 对错误进行处理
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
      // 编译完成后指定路径（server要拿到最新的js）
    .pipe(gulp.dest('server/public/js'))
      // 重命名（重新复制了一份）
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
      // 压缩
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
      // 压缩完成之后存储在
    .pipe(gulp.dest('server/public/js'))
      // 如果命令行watch（就是true），（条件成立）执行热更新
    .pipe(gulpif(args.watch,livereload()))
})
