const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
let painting = false;


canvas.width=700;
canvas.height=700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

function onMouseMove(event) {
  // console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
  // console.log(x,y);
  if(!painting){
    console.log("creating path in",x,y);
    ctx.beginPath();
    ctx.moveTo(x,y);
  }else{
    console.log("creating line in",x,y);
    ctx.lineTo(x,y);
    ctx.stroke();
  }
}

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseDown(event) {
  // console.log(event);
  painting = true;
}

// function onMouseUp(event) {
//   stopPainting();
// }


if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
