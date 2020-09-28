// <함수 설명>
/*
querySelector : 문서 내 첫 번쨰 element를 반환,
일치하는 요소 없으면 null반환
예를 들면 var el = document.querySelector("div.user-panel.main input[name=login]");
클래스가 "user-panel main" <div class="user-panel main">안의 이름이"login"인 <input> 중 첫 번째 요소입니다.*/
// const : 상수를 선언, 상수 값은 재할당할 수 없으며 다시 선언x && 객체에도 같이 적용됨 하지만 객체의 key값은 변경 가능


const clockContainer = document.querySelector(".js-clock");
// clockContainer에서 h1 선택, 즉 js-title을 선택한 것이다
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  //Date 함수에서 시간, 날짜 받기
  const date = new Date();
  // 시간,분,초 받기
  const minutes = date.getMinutes();
  const hour = date.getHours();
  const second = date.getSeconds();

  // 10초 보다 작으면 0${second} 실행 아니면 second 실행
  // 삼항 연산자 ->  조건 ? true일때 출력 : false일때 출력
  /*
    innerText : 텍스트를 element에 추가할 때 사용
    시간,분,초를 clockTitle에 추가함*/
  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes}:${
      second < 10 ? `0${second}` : second}`;
}

function init() {
  getTime();
  // 1000 -> 1초 마다 업데이트되게 해줌->1초마다 함수를 실행시킴
  // setInterval(함수, 실행할 시간 간격)
  setInterval(getTime, 1000);
}

init();
