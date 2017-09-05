import gulp from 'gulp';
// ��gukp�������if�жϵ�
import gulpif from 'gulp-if';
// �����ļ�ƴ��
import concat from 'gulp-concat';
// ���
import webpack from 'webpack';
// �ļ���
import gulpWebpack from 'webpack-stream';
// ������
import named from 'vinyl-named';
// �ȸ���
import livereload from 'gulp-livereload';
// �����ļ���Ϣ���ģ���ֹ��gulp��������¹ܵ����ѣ�
import plumber from 'gulp-plumber';
// ���ļ�������
import rename from 'gulp-rename';
// ѹ��js��css
import uglify from 'gulp-uglify';
// ������������İ�
import {log,colors} from 'gulp-util';
// �������в������н����İ�
import args from './util/args';

// ����һ������
gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
      // �ļ���������
    .pipe(named())
      // ����webpack-stream����
    .pipe(gulpWebpack({
      module:{
        // �� babel-loader����es6
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
        // �Դ�����д���
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
      // ������ɺ�ָ��·����serverҪ�õ����µ�js��
    .pipe(gulp.dest('server/public/js'))
      // �����������¸�����һ�ݣ�
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
      // ѹ��
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
      // ѹ�����֮��洢��
    .pipe(gulp.dest('server/public/js'))
      // ���������watch������true����������������ִ���ȸ���
    .pipe(gulpif(args.watch,livereload()))
})
