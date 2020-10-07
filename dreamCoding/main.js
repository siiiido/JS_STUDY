// 1. use strict
// added in ES 5
// use this for vanilla javascript
'use strict'

// 2. Variable
// let (added in ES6) : mutable

// global scope ->어느곳에서나 접근 가능(최소한으로 쓰기)
let globalName = 'global name';
{
  // block scope -> {}안에서만 접근가능
  let name = 'tony';
  console.log(name);
  name='hello';
  console.log(name);
  console.log(globalName);
}


// var ->선언전에 값 할당 가능(매우 안좋음) 쓰지말것
// hoisting ->어디에 선언했냐 상관없이 항상 젤 위로 선언을 올림
// var hoisting (move declaration from bottom to top)
// var은 block scope를 가지지 않음
console.log(age);
age=4;
var age;



// 3. const ->변경 불가능(immutable)
// 장점 : 보안성, 쓰래드의 안전성, 실수 줄임
const a = 9;


// 4. variable types
// 더 이상 나눠지지 않는 item : number, string, boolean null, undefiedn, symbol
// object, box containter

// boolean
// false : 0, null, undefined, NaN, ""(비어있는 string)
// true : any other value


// symbol -> 고유한 내용임, 즉 같은 내용이라도 symbol이 다르면 ===했을 때 다르다고나옴



// 5.Dynamic typing : dynamically typed language
