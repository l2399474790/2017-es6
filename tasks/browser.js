import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
// �����в���
import args from './util/args';

gulp.task('browser',(cb)=>{
  // û��watch����ֱ�ӷ��ػص�
  if(!args.watch) return cb();
  // ����Ŀ¼��Ҫִ������
  gulp.watch('app/**/*.js',['scripts']);
  gulp.watch('app/**/*.ejs',['pages']);
  gulp.watch('app/**/*.css',['css']);
});
// ������ô�Զ�������
