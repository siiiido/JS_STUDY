const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

let painting = false;
let filling = false;


canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = "INITIAL_COLOR";
ctx.fillStyle = "INITIAL_COLOR";
ctx.lineWidth = 2.5;

function onMouseMove(event) {
  // console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
  // console.log(x,y);
  if (!painting) {
    // console.log("creating path in", x, y);
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    // console.log("creating line in", x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

// function onMouseDown(event) {
//   // console.log(event);
//   painting = true;
// }

// function onMouseUp(event) {
//   stopPainting();
// }

function handleRangeChange(event) {
  // console.log(event.target.value);
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick(evnet) {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }

}

function handleColorClick(event) {
  // console.log(event.target.style);
  const color = event.target.style.backgroundColor;
  // console.log(color);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleCM(event){
  // console.log(event);
  event.preventDefault();
}

function handleSavaClick(event){
  const image = canvas.toDataURL("image/jpeg");
  // console.log(image);
  const link  = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[EXPORT]";
  // console.log(link);
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color123 =>
  color123.addEventListener("click", handleColorClick));


if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if(saveBtn){
  saveBtn.addEventListener("click",handleSavaClick);
}
