// const pElem = document.createElement('p');
// console.log(pElem); //p태그 출력됨
//
// pElem.innerHTML = '<a href="#">안녕</a>???'
//
// console.log(pElem);
//
// const charctersElem = document.querySelector('.characters');
// charctersElem.appendChild(pElem); //맨 끝에 자식으로 붙임
//
// //.b클래스에 해당하는걸 삭제
// charctersElem.removeChild(document.querySelector('.b'));
//


// js로 html에 class 추가하기
// const ilbuni = document.querySelector('.ilbuni');
// ilbuni.classList.add('special');

//기존의 클래스를 보존하지 않고 다 지우고 special로 바꿈
// 즉 클래스를 보존하지 않으니 거기에 해당되는 css역시 다 적용되지 않음
// ilbuni.className = 'special';


// const ilbuni = document.querySelector('.ilbuni');
// ilbuni클래스를 없애서 거기에 해당하는 css적용 안됨
// ilbuni.classList.remove('ilbuni');

// toggle은 ilbuni라는 클래스를 가지고있으면 remove하고
// 가지고 있지 않으면 add해줌
// ilbuni.classList.toggle('ilbuni');
// ilbuni.classList.toggle('special');



// 섹션5 -> 이벤트
// const ilbuni = document.querySelector('.ilbuni:nth-child(3)')
// ilbuni.addEventListener('click',function(){
//   ilbuni.classList.add('special');
// })


// EVENT중 load와 DOMContent 차이점
// load는 모든 문서가 다 로드될때까지 기다려서 좀 느리다
// DOMContent는 DOM만 로드되는 실행됨


// -> 전역변수는 안쓸수 있으면 안쓰는게 좋음
(function(){
  const characters1 = document.querySelector('.characters');
  // console.log(ilbuni);

  characters1.setAttribute('data-id',123);
  console.log(  characters1.getAttribute('data-id'));




  function clickIlbuniHandler(e){
    // ilbuni.classList.toggle('special');

    //this는characters1를 가르킴
    // 즉 클릭한것보단 addEventListener로 등록되어있는 객체(여기서
     // characters1)를 가르킴
     // 이건 이미지를 클릭하던 배경을 클릭하던 상관없이
     // addEventListener의 객체를 가르킴
    // console.log(this);
    // console.log(e.currentTarget); //this랑 같은걸 가르킴
    //즉 this === e.currentTarget

    // console.log(e.target); //누르는것을 가르킴
  }
  characters1.addEventListener('click',clickIlbuniHandler);
})();
// (); 익명함수만들고 바로 호출하는 방법
// 익명함수를 ()로 감싸고 끝에 ();로 호출




// 같은표현
// const clickIlbuniHandler = function(){
// ilbuni.classList.toggle('special');
// };

// const clickIlbuniHandler = ()=>{
  // ilbuni.classList.toggle('special');
// }
