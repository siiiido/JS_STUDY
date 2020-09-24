// const : 변수가 바뀌는거 허용 x


function sayHello(name, age){
  console.log("Hello ${name} you are ${age} years old");
}
sayHello("han", 22);




const calculator = {
  plus:function(a,b){
    return a+b;
  }
  minus:function(a,b){
    return a-b;
  }
  x:function(a,b){
    return a*b;
  }
  y:function(a,b){
    reutnr a/b;
  }

}


const plus = calculator.plus(5,5);
const minus = calculator.minus(5,5);
const x = calculator.x(5,5);
const y = calculator.y(5,5);



console.log(plus);
console.log(minus);
console.log(x);
console.log(y);
