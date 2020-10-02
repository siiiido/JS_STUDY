const body = document.querySelector("body");

const IMG_NUMBER = 5;


function paintImage(imgNumber) {
  // Image 쓸때 쓰는 객체
  const image = new Image();
  // Math.random()이 0~4니깐 1~5로 이미지를 해놨으니 +1 했음
  image.src = `image/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}


function genRandom() {
  // Math.floor() : 버림
  // Math.ceil() : 올림
  // Math.random() * 5 : 0~4 사이의 랜덤 숫자 생성
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}


function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
