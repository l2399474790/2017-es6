import gulp from 'gulp';
// ɾ���ļ����ļ��еİ�
import del from 'del';
import args from './util/args';

// ��ձ������ļ���js,css,ģ�壩����ֹ��������
gulp.task('clean',()=>{
  return del(['server/public','server/views'])
});
