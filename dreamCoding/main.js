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


// 모르는 후회하는 배열 함수 10가지


// Q1. make a string out of an array
// 배열을 string으로 변환하라
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(); //답 : apple,banana,orange 배열을 string으로 나타내는 함수
}

// Q2. make an array out of a string
string을 배열로 바꿔라
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(','); // ,단위로 짜르고 ,로 배열만듬
  //답 : ['🍎', '🥝', '🍌', '🍒']
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const reuslt = array.reverse();
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2,5);  //splice VS slice
}



class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => {
    return student.score === 90;
  });

위 아래 같은 함수

  const result = students.find((student) => student.score === 90);
}

// Q6. make an array of enrolled students ->true인 학생들 배열로 만들기
{
  const result = students.filter((a) => a.enrolled); //true인 것들만 등록됨

}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((a) => a.score);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((a) => a.score<50); //score이 50점 미만이 있는지 true나false로 출력

    const result = students.every((a) => a.score<50); //모든 학생의 score이 50점 미만인지  true나false로 출력
}

// Q9. compute students' average score
{
  const result = students.reduce((prev,curr)=>{
    return prev+curr.score;
  },0);

  const result = students.reduce((prev,curr)=>prev+curr.score,0);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map(a => a.score).filter((score)=> score>=50)
  .join();
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map(a=>a.score).sort((a,b) => a-b).join();
}

// JSON : object -> string , string -> object

// Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json=JSON.stringify(['apple','banana']);
console.log(json);

// json으로 갈때 데이터들만 감(함수는 안감)
const rabbitt = {
  name:'tori',
  color:'white',
  size : null,
  birthDate : new Date(),
  jump : () => {
    console.log('${name} can jump!');
  },
};

json = JSON.stringify(rabbitt);
console.log(json); // jump는 출력안됨

json = JSON.stringify(rabbitt,['name','color']); //해당 프로퍼티만 json으로 변환됨
console.log(json);

json = JSON.stringify(rabbitt,(key,value) => {
  console.log('key : ${key}, value: ${value}');
  return key === 'name' ? 'ellie' : value;
});
console.log(json);


// JSON to Object
// parse(json)
console.clear();
json= = JSON.stringify(rabbitt);
const obj = JSON.parse(json);
console.log(obj);
rabbitt.jump();
obj.jump() //에러뜸, 함수는 오지 않아서

console.log(rabbitt.birthDate.getDate());
console.log(obj.birthDate);



//콜백
// js는 동기적이다 -> 호이스팅이 된후부터 코드가 하나씩 동기적으로 실행됨
// 호이스팅 -> 변수,함수선언들이 자동적으로 젤 위로 올라가서 코드 읽음
// 비동기적 ->코드가 위에서 순서대로 출력하지 않음 ex) setTimeout

// 콜백 -> 2가지 경우 : 즉각적으로 실행, 언제 실행될지 모름

// 즉각 실행
function printImmediately(print){
  print();
}
printImmediately() => console.log('hello');

//언제 실행 될지 모름
function printWithDelay(print, timeout){
  setTimeout(print,timeout);
}
printWithDelay(() => console.log('call back'),2000);




// callback hell example
