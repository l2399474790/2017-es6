import gulp from 'gulp';
// �������˳������
import gulpSequence from 'gulp-sequence';

// �Ȱ�server������ص�Ŀ¼�ļ������������css����ȥ��������ģ�塪��ִ�нű�������������
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
