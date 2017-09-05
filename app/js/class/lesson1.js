// 如果用一个大括号包起来的就是一个块级作用域
"use strict";
function test(){
  // 在块级作用域里用了let声明的变量，只能在块级作用域里面使用
  // for(let i=1;i<3;i++){
  //   console.log(i);
  // }
  // es6强制开启严格模式——变量未声明不能引用
  // console.log(i);
  // 使用let不能重复定义变量
  let a = 1;
  // let a = 2;
}


function last(){
  // 使用const声明一个常量，是一个只读属性不能进行修改
  const PI=3.1415926;
  // 声明的时候必须赋值
  const k={
    a:1
  }
  k.b=3;
  // const声明对象的时候，对象的地址不能改变，但是对象本身的内容是可以改变的
  console.log(PI,k);
}


// test();
last();
