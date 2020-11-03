
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");


// set없이 이렇게 get만 해주면 새로고침해야 시간이 바뀜 아니면 바뀌지 않음
function getTime(){
  // Date로부터 시,분,초 얻을 수 있음
  const date = new Date();

  const minutes = date.getMinutes();
  const hour = date.getHours();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
  //시간 얻기
  getTime();

  // 1초마다 업뎃 즉 새로고침 해줌
  setInterval(getTime,1000);
}

init();


// 시간을 얻어서(get) 설정(set)함
