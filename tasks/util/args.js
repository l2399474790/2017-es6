// ���������в���
import yargs from 'yargs';

// ���ֿ������������ϻ���
const args = yargs
  // �����е�ѡ��֣��������������Ļ�����true������������
  .option('production',{
    boolean:true,
    default:false,
    describe:'min all scripts'
  })
  // ������Ӧ�ļ�
  .option('watch',{
    boolean:true,
    default:false,
    describe:'watch all files'
  })
  //Ҫ��Ҫ�����ϸ��־
  .option('verbose',{
    boolean:true,
    default:false,
    describe:'log'
  })
  // ��Դӳ��
  .option('sourcemaps',{
    describe:'force the creation of sroucemaps'
  })
  // ���÷������˿�
  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })
  // ��ʾ����������������ַ�������ʽ����
  .argv

export default args;
