const body = document.querySelector("body");

const IMG_NUMBER = 5;


function paintImage(imgNumber) {
  // Image 쓸때 쓰는 객체
  const image = new Image();

  // images폴더의 이미지 이름들이 1,2,3,4,5라서
  // Math.random()이 0~4니깐 1~5로 이미지를 해놨으니 +1 했음
  image.src = `images/${imgNumber + 1}.jpg`;

  // bgImage라는 클래스 생성해줌
  image.classList.add("bgImage"); 

  // prepend는 맨앞 즉 body 맨앞에 이미지 설정
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
