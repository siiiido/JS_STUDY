// 1초 후에 함수 실행
// setTimeout(function() {
//   console.log("setTimeout !");
// },1000); //1000은 1초임


let timeId;

// function sample(){
//   console.log("sample!");
// }

// setTimeout : 원하는 시간만큼 지연시길 때
// timeId = setTimeout(sample,3000);
// console.log(timeId);

// 취소시키기
// clearTimeout(timeId);


const btn = document.querySelector(".btn");
// btn.addEventListener("click",function(){
//   clearTimeout(timeId);
// });



// setInterval
// 설정된 시간마다 함수 반복, 1000:1초
// 1000/60 : 1초당 60번
// timeId = setInterval(sample,1000/60);
//
// // clearInterval : 누르면 반복 멈춤
// btn.addEventListener("click",function(){
//   clearInterval(timeId);
// })



// setInterval의 단점을 개선한것 requestAnimationFrame

let n= 0;

function sample(){
  // n++;
  console.log("sample !");
  // console.log(n);
  // if(n>200){
  //   return;
  // }

  timeId = requestAnimationFrame(sample);
}

sample();

btn.addEventListener("click",function(){
  cancelAnimationFrame(timeId);
});
