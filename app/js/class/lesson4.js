{
  console.log('a',`\u0061`);
  console.log('s',`\u20BB7`);

  console.log('s',`\u{20BB7}`);


}


{
  let s='𠮷';
  // 码值大于两个字节，每两个字节为一个长度
  console.log('length',s.length);
  // charAt() 返回指定位置的字符
  console.log('0',s.charAt(0));
  console.log('1',s.charAt(1));
  // charCodeAt() 返回指定位置的Unicode编码  只取两个字节
  console.log('at0',s.charCodeAt(0));
  console.log('at1',s.charCodeAt(1));

  let s1='𠮷a';
  console.log('length',s1.length);
  // codePointAt() 取码值  如果够的话取4个字节
  console.log('code0',s1.codePointAt(0));
  console.log('code0',s1.codePointAt(0).toString(16));
  console.log('code1',s1.codePointAt(1));
  console.log('code2',s1.codePointAt(2));
}

{
  // 知道码值怎么知道相应的字符
  // es5
  console.log(String.fromCharCode("0x20bb7"));
  // es6  大于两个字节的字符
  console.log(String.fromCodePoint("0x20bb7"));
}

// 字符串遍历
{
  let str='\u{20bb7}abc';
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }
  for(let code of str){
    console.log('es6',code);
  }
}

{
  let str="string";
  console.log('includes',str.includes("c"));
  console.log('start',str.startsWith('str'));
  console.log('end',str.endsWith('ng'));
}

{
  let str="abc";
  console.log(str.repeat(2));
}

{
  let name="list";
  let info="hello world";
  let m=`i am ${name},${info}`;
  console.log(m);
}

{
  console.log('1'.padStart(2,'0'));
  console.log('1'.padEnd(2,'0'));
}

{
  let user={
    name:'list',
    info:'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`);
  function abc(s,v1,v2){
    console.log(s,v1,v2);
    return s+v1+v2
  }
}

{
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}
