const title1 = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title1.classList.toggle(CLICKED_CLASS);
}

function init() {
  title1.addEventListener("click", handleClick);
}

init();

//검색어 :  javascript DOM event MDN
// https://flatuicolors.com/
