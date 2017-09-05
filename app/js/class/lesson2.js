{
  let a,b,rest;
  // 数组类元素的结构赋值
  [a,b]=[1,2];
  console.log(a,b);
}

{
  let a,b,rest;
  // ...rest
  [a,b,...rest]=[1,2,3,4,5,6];
  console.log(a,b,rest);
}

{
  let a,b;
  // 对象的结构赋值
  ({a,b}={a:1,b:2})
  console.log(a,b);
}

{
  let a,b,c,rest;
  // 给定默认值，默认值是undefined
  [a,b,c=3]=[1,2];
  console.log(a,b,c);
}

{
  // 场景1：变量的交换
  let a=1;
  let b=2;
  [a,b]=[b,a];
  console.log(a,b);
}

{
  // 场景2：获取函数返回值
  function f(){
    return [1,2]
  }
  let a,b;
  [a,b]=f();
  console.log(a,b);
}

{
  // 场景3：当返回多个值，可以选择性的选择几个变量
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,,b]=f();
  console.log(a,b);
}

{
  // 场景4：不确定数组返回的长度，只关心第一个，其余的变成一个数组
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,...b]=f();
  console.log(a,b);
}

{
  let o={p:42,q:true};
  let {p,q}=o;
  console.log(p,q);
}

{
  // 对象结构赋值，可以给默认值
  let {a=10,b=5}={a:3};
  console.log(a,b);
}

{
  let metaData={
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]}=metaData;
  console.log(esTitle,cnTitle);
}

// 本质上这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值
