// 여러개 중 하나만 활성화 하기 패턴 외우기

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

    // dom에 접근하는것이 속도가 느림
    // const currentItem = document.querySelector('.door-opened');

    // 비활성화 기능
    // if(currentItem){
    //   currentItem.classList.remove('door-opened');
    // }

    // 활성화 기능
    // if(targetElem.classList.contains('door-body')){
    //   targetElem.parentNode.classList.add('door-opened');
    //
    //   currentItem = targetElem.parentNode;
    // }


    if (currentItem) {
      inactivate(currentItem);
    }
    if (targetElem.classList.contains('door-body')) {
      activate(targetElem.parentNode);
    }

  }

  stageElem.addEventListener('click', doorHandler);

  // 실행할 때 앞문 열리고 시작하기
  activate(document.querySelector('.door:nth-child(1)'));

})();
