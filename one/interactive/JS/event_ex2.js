//1. addEventListener쓰는 방법

// const btns = document.querySelectorAll('.menu-btn');
//
// // console.log(btns);
//
// function clickBtnHandler(){
//   console.log(this);
// }
//
// for(let i=0; i<btns.length; i++){
//   btns[i].addEventListener('click',clickBtnHandler);
// }

// addEventListener많아지면 메모리 차지많이해서 느려짐
// 따라서 이벤트 위임을 사용하자


// 2.이벤트 위임 방법(선호)
// 클릭이벤트를 할것들의 부모한테 이벤트처리를 위임시킴
const menu = document.querySelector('.menu');


// 함수가 이벤트 리스너, 이벤트 핸들러로 호출되면
 // 첫번째 매개변수는 자동으로 이벤트객체가 들어감
function clickHandler(e){
  // console.log(this); // 이렇게하면 click했을때 메뉴만 찍힘
  // console.log(e.currentTarget); //this랑 같은 결과
// 이벤트 핸들러 안에서는 this와 e.currentTarget는 같은걸 가르킴
// 바로 addEventListener의 객체 즉 여기서는 menu를 가르킴

// 찍은거 가르킴 이미지 찍으면 이미지 가르키고
// 글자 찍으면 글자 가리킴
  // console.log(e.target);


// html에서 data-vaule 값을 얻어옴
// 문제가 있음 -> 나는 일분이 버튼중 이미지나 글씨나 아무거나
// 클릭해도 동작하고 싶게 만들고 싶은데
// 이렇게하면 버튼 이외의 이미지나 글씨를 클릭하면
// null값이 나옴
// 해결책 1 : 이미지와 글씨의 클래스에 css로
// pointer-events: none를 해주면 click 이벤트를 안받고
// 이미지나 글씨 눌러도 data-value값 나옴

// 해결책 2 : js로 해결하는 방법(선호)
// console.log(e.target.getAttribute('data-value'));

  // console.log(e.target.dataset.value); // data-vaule값 나옴
  let elem = e.target;

  // if말고 while쓰는 이유 계속 돌려서
  while(!elem.classList.contains('menu-btn')){
    elem = elem.parentNode;

    if(elem.nodeName == 'BODY'){
      elem = null;
      return;
    }
  }
  console.log(elem.dataset.value);
}
menu.addEventListener('click',clickHandler);


// nodName -> 속성 자체가 태그 이름을 대문자로 갖고있음
// parentNode는 부모 엘리먼트를 의미하고,
// nodeName은 태그 이름을 문자열로 갖고 있는 속성이에요.
//
// <section class="a">
//     <p class="b">Lorem ipsum</p>
// </section>
// 이런 코드가 있다면,
// .b 문단의 parentNode는 .a 섹션이고,
// .b 문단의 nodeName은 "P"가 되는거지요~
