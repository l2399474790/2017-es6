import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
// �����в���
import args from './util/args';

gulp.task('css',()=>{
  // ��css�ļ������ŵ�server/public
  return gulp.src('app/**/*.css')
    .pipe(gulp.dest('server/public'))
    .pipe(gulpif(args.watch,livereload()))
});
