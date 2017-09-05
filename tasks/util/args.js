// 处理命令行参数
import yargs from 'yargs';

// 区分开发环境和线上环境
const args = yargs
  // 命令行的选项部分，如果有这个参数的话就是true（生产环境）
  .option('production',{
    boolean:true,
    default:false,
    describe:'min all scripts'
  })
  // 监听相应文件
  .option('watch',{
    boolean:true,
    default:false,
    describe:'watch all files'
  })
  //要不要输出详细日志
  .option('verbose',{
    boolean:true,
    default:false,
    describe:'log'
  })
  // 资源映射
  .option('sourcemaps',{
    describe:'force the creation of sroucemaps'
  })
  // 设置服务器端口
  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })
  // 表示对输入的命令行以字符串的形式解析
  .argv

export default args;
