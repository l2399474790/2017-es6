import gulp from 'gulp';
import gulpif from 'gulp-if';
// �����������İ�����Ϊ��������
import liveserver from 'gulp-live-server';
// �����в���
import args from './util/args';

gulp.task('serve',(cb)=>{
  // ������Ǵ��ڼ���״ֱ̬�ӷ��ػص�����
  if(!args.watch) return cb();
  // ����Ǽ���״̬������һ����������ִ�У�������--harmony����ִ�к���Ĵ���(�������express��һ��Ĭ�Ϸ���)
  var server = liveserver.new(['--harmony','server/bin/www']);
  // ����������
  server.start();

  // ����������ļ���ǰ����Դ�ļ����ı䣬���������ˢ��
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    // ����Ӧ�Ķ����߷�����
    server.notify.apply(server,[file]);
  });

  // ��������ĳЩ·�ɻ�ĳЩ�ӿڷ����仯����������
  // routes ����ļ����¿����ӿڣ�app.js�Ƿ�������
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    // ����������
    server.start.bind(server)();
  });
});
