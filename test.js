// const arr = [1,2];
// const [ one] =arr;

// console.log(one); // 1
// console.log(two); // 2

// // const [ one : song] = arr;
// // console.log(song); // 1
// // console.log(one); // undefined
// // console.log(two); // 1



// const object = { a: 1, b: 2 };

// const { a, b=100 } = object;

// console.log(a); // 1
// console.log(b); 


// const object = { a: 1 };

// const { a, b=3 } = object;

// console.log(a); // 1
// console.log(b); // 3



// const { a, b=3 } = object;
// const { a, b:song } = object;
// console.log(song); 
// console.log("asdas"); 


// const [c, d] = [1, 2, 3];
// console.log(c); // 1
// console.log(d); // 3

// const [c,, d] = [1, 2, 3];
// console.log(c); // 1
// console.log(d); // 3


// const object = { a: 1 , b:3};

// function printObj({ a, b=10 }){
// 	console.log(a); // 1
// 	console.log(b); // 2
// }	

// printObj(object); // 1, 3

// const object = { a: 1, b: 2 };
//key값 이름 바꾸기 !
// const { a, b:song } = object;
// const song = object.b;
// console.log(a); // 1
// console.log(song); // 2
// console.log(b); //Uncaught ReferenceError: b is not defined
// b라는 key를 완전히 song로 바꿔서 b는 정의되지 않는다고 출력된다.

// function printObj({ a, b:han }){
	// console.log(a); // 1
	// console.log(han); // 1
	// console.log(b); // 2
// }	

// printObj(object); // 1, 2


// 객체
// 함수
// 배열

// 기본 정의 3개하기
// 하나 빼고 정의 
// key값 이름 바꾸기
// 기본값 설정하기(key와 value 추가)
// ,로 자리 대체


// const object = { a: 1, b: 2, c:3 };

// //기본 정의
// const {a,b,c} = object;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3

// //하나 빼보기
// const {a,c} = object;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // Uncaught ReferenceError: c is not defined


// //비구조화 이름 바꾸기
// // 첫번째
// const song = object.b;
// console.log(song); // 2
// console.log(b); // 2

// const {a, b:han, c} = object;

// console.log(a); // 1
// console.log(han); // 2
// console.log(c); // 3
// console.log(b); // Uncaught ReferenceError: b is not defined
// // b값의 이름이 완전히 han으로 바껴서 정의되지 않는다고 error가 발생한다.



// // 기본값 설정하기(key와 value 추가하기)
// const {a,b,c,d=17} = object;
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// console.log(d); // 17

// // 이렇게 value는 못 바꾼다!!
// const {a,b=2021,c,d=17} = object;
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// console.log(d); // 17

// // 객체는 ,로 비울 수 없다.
// const {a,,c} = object;
// console.log(a);
// console.log(b);//Uncaught SyntaxError: Unexpected token ','
// console.log(c);



// //기본 정의

// const funObject = {a:"song", b:"kim", c:"han"};

// function printObj({ a, b ,c}){
// 	console.log(a); // song
// 	console.log(b); // kim
// 	console.log(c); // han
// }	

// printObj(funObject); // 


// //하나 빼보기

// const funObject = {a:"song", c:"han"};

// function printObj({ a, b ,c}){
// 	console.log(a); // song
// 	console.log(b); // undefined
// 	console.log(c); // han
// }	

// printObj(funObject); // 



// //비구조화 이름 바꾸기

// // 첫번째
// const songsang = funObject.b;

// function printObj({ a, b ,c}){
//     console.log(a); // song
//     console.log(songsang);
// 	// console.log(송송송); // kim
// 	console.log(c); // han
// 	console.log(b); // kim
// }	

// printObj(funObject); 


// //두번째
// function printObj({ a, b:송송송 ,c}){
//     console.log(a); // song
// 	console.log(송송송); // kim
// 	console.log(c); // han
// 	console.log(b); // Uncaught ReferenceError: b is not defined
//     // b가 완전히 송송송으로 바껴서 error 발생.
// }	

// printObj(funObject); 



// // 기본값 설정하기(key와 value 추가하기)
// function printObj({ a, b ,c, d = "hiii"}){
// 	console.log(a); // song
// 	console.log(b); // kim
// 	console.log(c); // han
// 	console.log(d); // hiii
// }	

// printObj(funObject); 



// // 이렇게 value는 못 바꾼다!!
// function printObj({ a, b="bye" ,c, d = "hiii"}){
// 	console.log(a); // song
// 	console.log(b); // kim
// 	console.log(c); // han
// 	console.log(d); // hiii
// }	

// printObj(funObject); 


// // 함수는 ,로 비울 수 없다.
// function printObj({ a, ,c }){ //Uncaught SyntaxError: Unexpected token ','
// 	console.log(a); 
// 	console.log(b); 
// 	console.log(c); 
// }	


//기본 정의
// const arr = [ 1,2,"song"];
// const [a,b,s] = arr;

// console.log(a); //1
// console.log(b); //2
// console.log(s); //song

// //하나 빼보기
// const [a,s] =arr;

// console.log(a); //1
// console.log(s); //2
// console.log(b); //Uncaught ReferenceError: b is not defined


// //비구조화 이름 바꾸기

// //첫번째 ( 두번째는 안바뀌고 에러난다! )
// const [a,b,s] =arr;
// const han = arr[1];

// console.log(a); //1
// console.log(b); //2
// console.log(s); //song
// console.log(han); //2


// // 기본값 설정하기(key와 value 추가하기)
// const [a,b,s,hii="bey"] =arr;
// console.log(a); //1
// console.log(b); //2
// console.log(s); //song
// console.log(hii); //bey


// // 이렇게 value는 못 바꾼다!!
// const [a,b="abcde",s,hii="bey"] =arr;
// console.log(a); //1
// console.log(b); //2
// console.log(s); //song
// console.log(hii); //bey


// // 배열은 ,로 비울 수 있다.
// const [a,,b] = arr;
// console.log(a); //2
// console.log(b); //song

// console.log(a); //1
// console.log(b); //song



const deepObject={
    state : {
        information : {
            name : "songsang",
            like : ["coffee","travel","nature"]
        }
    },
    value : 17
};

//첫번째 방법(비구조화 할당 2번 사용하기)

const {name, like} = deepObject.state.information;
const {value} = deepObject;

const all = {
    name, // name : name
    like, // like : like
    value // value : value
};

console.log(all);//{name: "songsang", like: Array(3), value: 17}



//두번째 방법
const{
    state:{
        information : {name,like}
    },
    value
}=deepObject;

const all = {
    name,
    like,
    value
};

console.log(all);//{name: "songsang", like: Array(3), value: 17}