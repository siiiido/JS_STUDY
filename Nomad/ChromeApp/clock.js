const clockContainer = document.querySelector(".js-clock");
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
  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes}:${
      second < 10 ? `0${second}` : second}`;
}

function init() {
  getTime();
  // 1000 -> 1초 마다 업데이트되게 해줌
  // setInterval(함수, 실행할 시간 간격)
  setInterval(getTime, 1000);
}

init();
