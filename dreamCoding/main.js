// 1. use strict
// added in ES 5
// use this for vanilla javascript
'use strict'

// 2. Variable(읽고 쓰기 가능)
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



// 3. const(읽기만 가능) ->변경 불가능(immutable)
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








. String
숫자 + 문자열 =문자(숫자가 문자열로 바뀜)

.numeric operator

.
let a= 3;
const ab = ++a;
// a=a+1;
// ab = a;

let c=3;
const dc = c++;
// dc=c;
// c=c+1

// == -> 타입 안따지고 내용만 봄
// === -> 타입 따짐

const add = function(a,b){
  return a+b;
};
줄인 표현 : const add = (a,b) => a+b;

const add2 = (a,b) =>{
  // do something more
  return a+b;
};


class Person{
  constructor(name,age){
    this.name;
    this.age;
  }

  speak(){
    console.log( )
  }
}


객체 만드는법

const obj1 = {}
const obj2 = new Object();


const a={name : 'tony', age:5};
추가 가능
a.hasJob = true;
삭제도 가능
delete a.hasJob;

접근 방법
console.log(a.name);
console.log(a['name']); //string 타입으로 넣어야됨



const person1 = {name:'bob',age:2};
const person2 = {name:'steve',age:4};
const person1 = {name:'dave',age:8};
const person4 = new Person('tony',30);

function Person(nameage){
  this.name=name;
  this.age=age;
}


key가 있는지 없는지 확인하기
console.log('name' in tony);


for ..in VS for ..of

for (key in tony){
  console.log(key) // key 출력
}


const array=[1,2,3,4,5];
for(i of array){
  console.log(i);
}


객체 복사

const user4 = {};
Object.assign(user4,user);
console.log(user4);



배열 생성
const a = new Array();
const b = [1,2];


const fruits = ['❓','☮'];


for(let a of fruits){
  console.log(a);
}


fruits.forEach(function(a,index,array){
  console.log(a,index,array);
});
fruits.forEach((a, index) => {
  console.log(a,index);
});



배열에서 push는 뒤에서 부터 추가됨
fruits.push('apple');

pop역시 뒤에서부터 제거
fruits.pop();

unshift는 앞에서부터 추가
fruits.unshift('melon');

shift는 앞에서부터 제거

!!!! shift,unshift는 pop, push보다 매우 느림 !!!

fruits.splice(1); //배열의 인덱스 1부터 모두 지움
fruits.splice(1,1) //인덱스 1만 지워짐
fruits.splice(1,1,'grapge','banana') //인덱스 1에 해달하는 배열 지우고 그 자리에 grape,banana 추가

const fruits2 = ['tomato'];
const newfruit = fruits.concat(fruits2); //fruits배열 뒤에 fruits2내용 추가해서 새로운 newfruit만들기


fruits.indexOf('apple'); //사과가 어딨는지 인덱스 번호로 알려줌, 사과없으면 -1 출력
fruits.includes('apple'); //사과가 있는지 없는지 true, false로 출력
