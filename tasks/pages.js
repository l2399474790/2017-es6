import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
// ��������İ�
import args from './util/args';

gulp.task('pages',()=>{
  // ԭ�ⲻ���ķŵ�server�ļ�����
  return gulp.src('app/**/*.ejs')
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch,livereload()))
})
