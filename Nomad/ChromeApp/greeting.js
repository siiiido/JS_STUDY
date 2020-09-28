// querySelectorAll은 모든걸 가져 찾아와 배열로 저장
// querySelector은 아이디나 클래스의 첫번째 값 가져옴
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

/*
 localStorage -> js의 작은 정보들을 저장,&& 정수도 문자열로 저장됨
  저장한 데이터는 브라우저 세션 간에 공유됨
  그리고 localStorage는 페이즈를 닫아도 데이터 사라지지 않음,
  하지만 sessionStorage는 페이지 닫으면 데이터 사라짐
  메서드 -> setItem(키,값), getItem(키)하면 값이 나옴
  removeItem(키) 키 값의 데이터만 지움,
  clear() : localStorage 항목의 전체 data제거 */

const USER_LS = "currentUser", //LS : LocalStorage
  SHOWING_CN = "showing";      // CN : ClassName

  // 새로고침 했을때 계속 form안에 text값 기억하는 함수
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
/*
이벤트 : https://developer.mozilla.org/ko/docs/Web/Events
preventDefault -> prevent:막다, default:기본 이벤트 -> 이벤트를 막다
  이벤트를 취소할 수 있는 경우 취소함,
  체크박스 클릭을 취소한다거나, 텍스트에 입력란에 입력되는것을 막는다거나 등등.... */
function handleSubmit(event) {
  event.preventDefault();  // form에 text입력한걸 계속 남길려고 사용
  const currentValue = input.value; //이렇게 input에 value값 생성 가능
  paintGreeting(currentValue);
  saveName(currentValue);
}

/*
classList는 메소드들을 이용해 html의 class를 추가,삭제....를 함
  메소드 : add,remove,contain,toggle
    toggle는 on/off 기능이고 이 함수는 2개의 인자를 받는데
    처음 인자는 토글링할 class이름 다음 인자는 선택인자로 boolean 타입
    true면 강제로 class를 추가 false는 강제로 class삭제*/


function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
