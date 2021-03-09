// // 여러개 중 하나만 활성화 하기 패턴 외우기

// ====================================1차=========================================================
// 1차 js짜기 가장 기본적이고 가장 raw함 2차 3차를 거쳐서 효율적인 js로 개선하자
// (function () {
//   const stageElem = document.querySelector(".stage");

//   function doorHandler(e) {
//     const targetElem = e.target;

//     const currentItem = document.querySelector(".door-opened");

//     if (currentItem) {
//       currentItem.classList.remove("door-opened");
//     }

//     if (targetElem.classList.contains("door-body")) {
//       targetElem.parentNode.classList.add("door-opened");
//     }
//   }

//   stageElem.addEventListener("click", doorHandler);
// })();

// ====================================2차=========================================================

// 2차 js개선, DOM으로 접근하는게 3차처럼 함수로 접근하는 것 보다 느리다
// (function () {
//   const stageElem = document.querySelector(".stage");
//   // 현재 활성화된 아이템을 저장하는 변수
//   let currentItem;

//   function doorHandler(e) {
//     const targetElem = e.target;
// 활성화
//     if (currentItem) {
//       currentItem.classList.remove("door-opened");
//     }
// 비활성화
//     if (targetElem.classList.contains("door-body")) {
//       targetElem.parentNode.classList.add("door-opened");
//       currentItem = targetElem.parentNode;
//     }
//   }

//   stageElem.addEventListener("click", doorHandler);
// })();

// ====================================3차=========================================================
// 3차 js 개선
(function() {
  const stageElem = document.querySelector('.stage');

  // /현재 활성화됨 아이템을 저장하는 변수
  let currentItem;

  //핸들러 함수에 활성화, 비활성화 기능을 추가하는 것 보다
  // 이렇게 함수로 쪼개는게 훨씬 기능적으로도 코드도 깔끔하고 좋음
  function activate(e) {
    e.classList.add('door-opened');
    currentItem = e;
  }

  function inactivate(e) {
    e.classList.remove('door-opened');
  }

  function doorHandler(e) {
    const targetElem = e.target;

    if (currentItem) {
      inactivate(currentItem);
    }
    if (targetElem.classList.contains('door-body')) {
      activate(targetElem.parentNode);
    }

  }

  stageElem.addEventListener('click', doorHandler);

  // 실행할 때 앞문 열리고 시작하기
  activate(document.querySelector('.door:nth-child(3)'));

})();

// 1차 연습

// (function () {
//   const stage = document.querySelector(".stage");

//   function doorHandler(e) {
//     const target = e.target;
//     const currentItem = document.querySelector('.door-opened');

//     //활성화
//     if(currentItem){
//       currentItem.classList.remove('door-opened');
//     }

//     //비활성화
//     if(target.classList.contains('door-body')){
//       target.parentNode.classList.add('door-opened');
//     }
//   }

//   stage.addEventListener("click", doorHandler);
// })();

// 2차 연습

// (function () {
//   const stage = document.querySelector(".stage");

//   let currentItem;

//   function doorHandler(e) {
//     const target = e.target;

//     if (currentItem) {
//       currentItem.classList.remove("door-opened");
//     }

//     if (target.classList.contains("door-body")) {
//       target.parentNode.classList.add("door-opened");
//       currentItem = target.parentNode;
//     }
//   }

//   stage.addEventListener("click", doorHandler);
// })();

// 3차 연습

// (function () {
//   const stage = document.querySelector(".stage");

//   let currentItem;

//   function activate(e) {
//     e.classList.add("door-opened");
//     currentItem = e;
//   }

//   function inactivate(e) {
//     e.classList.remove("door-opened");
//   }

//   function doorHandler(e) {
//     const target = e.target;

//     if (currentItem) {
//       inactivate(currentItem);
//     }

//     if (target.classList.contains("door-body")) {
//       activate(target.parentNode);
//     }
//   }

//   stage.addEventListener("click", doorHandler);
// })();
