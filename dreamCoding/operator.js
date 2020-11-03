1. String
숫자 + 문자열 =문자(숫자가 문자열로 바뀜)

2.numeric operator

3.
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
