const ballElem = document.querySelector('.ball');

// transitionEvent

// window.addEventListener('click',function(e){
//   // console.log(e.clientX, e.clientY);
//   ballElem.style.transform = 'translate(' + (e.clientX - 15)
//   + 'px,' + (e.clientY - 15) + 'px)';
// });
//
//
// // transitionend, transitionstart
// ballElem.addEventListener('transitionstart',function(e){
//   ballElem.classList.add('end');
//
//   // transition duration이 찍힘
//   //start로 하면 0이 나옴(why? start는 duration이 0이니)
//   console.log(e.elapsedTime);
//
//   //실행되는 것이 출력됨 background나 transform이나 등등
//   console.log(e.propertyName);
// });






//animationEvent

ballElem.addEventListener('click',function(){
  ballElem.style.animation = 'ball-ani 1s 3 alternate forwards';
});

// animationend, animationstart, animationiteration
ballElem.addEventListener('animationstart', function(){
  ballElem.classList.add('end');
});

// animationiteration 반복이 될때 일어나는 이벤트(즉 처음에는 실행안됨)
ballElem.addEventListener('animationiteration',function(){
  console.log('반복!');
});
