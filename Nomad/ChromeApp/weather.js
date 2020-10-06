// API : 다른 서버로부터 데이터를 가져올 수 있음

const weather = document.querySelector(".js-weather");
const COORDS = "coords_abc"; //localStorage로 key값 설정해주는거라 이름 아무거나 해도됌
const API_KEY = "c83c21368ebe71ae2f0390084e242bb0";


// latitude와 longitude로 data 얻기
// fetch안에 가져올 data의 api주소를 넣으면됌
function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response) {

    // 응답을 JSON형태로 파싱함/
    return response.json()
    // fetch가 작업한 후 코드들이 실행돼야 하니깐 then을 사용
    // then()은 기본적으로 함수를 호출하는 것이지만 data가 완전히 들어온 다음 호출함

  }).then(function(json) {
    // json 출력하면 날씨랑 위치 정보가 나옴
    // 거기서 main->temp에 있는 정보 저장
    // 역시 json에서 name에 있는 정보 저장
    // console.log(json)
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature} @ ${place}`;
  });
}

// function saveCoords(la,lo) {
function saveCoords(coordsObj) {
  // localStorage.setItem(COORDS, JSON.stringify(lo));
  // localStorage.setItem(COORDS, JSON.stringify(la));

  // obj로 받았으니 string으로 변환해주고 COORDS에 저장
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// coords.latitude,coords.longitude만 함수고 position은 그냥 매개변수 의미x
function handleGeoSucces(position) {
  // latitude 받아오기
  const latitude = position.coords.latitude;
  // longitude 받아오기
  const longitude = position.coords.longitude;
  const coordsObj = {
    // 객체 생성시 객체의 변수 이름과 key값의 이름이 같을 때 하나로 작성가능
    // latitude : latitude -> latitude
    latitude,
    longitude
  };

  // coordsObj처럼 객체로 선언하지 않고 이렇게 하나씩 선언해도 가능
  // 근데 그러면 나중에 변수가 많아지거나 수정할 때 불편해서 객체로함
  // const lat = latitude;
  // const lon = longitude;
  // saveCoords(lat,lon);

  // 좌표 저장
  // saveCoords()는 latitude와 longitude를 한번에 사용하니 객체로 쓰는게 편하고
  // getWeather()은 latitude와 longitude를 따로 따로 사용하니(출력함) 객체말고 일반적으로 사용하는게 편함
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
  //
}

// getCurrentPosition함수가 position 못받았을 때
function handleGeoError() {
  console.log("Cant access geo location");
}


// navigator : 브라우저의 정보를 제공하는 객체이다
// navigator 객체 사용 -> geolocation 호출
// geolocation : 사용자의 현재 위치를 가져옴
// getCurrentPosition(좌표를 가져온걸 성공했을때, 좌표가져 오지 못했을)
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}



//
// COORDS가 null이면 lat, lon을 구해서 save해서
// lat, lon으로 getWeather()함
// null이 아니면 loadedCoords를 파싱해서 lat, lon구해서 getWeather()함
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    // console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}


function init() {
  loadCoords();
}

init();
