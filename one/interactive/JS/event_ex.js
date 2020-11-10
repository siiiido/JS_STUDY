(function(){
  // const ilbuniGroup = document.querySelectorAll('.ilbuni');
  // console.log(ilbuniGroup);
  // const stage = document.querySelector('.stage');

  // function clickHandler(e){
    // this는 ilbuniGroup[i]를 가리킴
    // console.log(this);
    // this랑 e.currentTarget 같음
    // console.log(e.currentTarget);

    // stage.removeChild(this);
    // console.log(this.parentNode); //ilbuni누르면 stage출략됨
    // this.parentNode.removeChild(this); //stage.removeChild(this);와 같은 결과
  // }

  // for(let i=0; i<ilbuniGroup.length; i++){
    // ilbuniGroup[i].addEventListener('click',clickHandler);
  // }


  //이벤트 위임
  // addEventListener는 적게쓸수록 좋음
  const stage = document.querySelector('.stage');

  function clickHandler(e){
    // console.log(e.currentTarget);
    // console.log(e.target);

    // classList.contains는 ilbuni클래스를 가지고있으면
    // true 안가지고있으면 false를 반환
    // stage.removeChild(e.target);를 if안에 안넣으면
    // stage 클릭했을 때 에러뜸
    if(e.target.classList.contains('ilbuni')){
      stage.removeChild(e.target);
    }
  }
  stage.addEventListener('click',clickHandler);


})();
