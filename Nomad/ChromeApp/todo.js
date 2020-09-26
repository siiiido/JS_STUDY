const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput =toDoForm.querySelector("input"),
todDoList = document.querySelector(".js-todDoList");


const TODOS_LS = "toDos";

function loadToDos(){
  const toDos = localStorage.getItem(TODOS_LS);
  if(toDos !== null){

  }
}

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  todDoList.appendChild(li);
  // console.log(text);

}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}


function init(){
  loadToDos();
  toDoForm.addEventListener("submit",handleSubmit);
}

init();
