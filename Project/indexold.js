


//Fundamental
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")
const dpr = window.devicePixelRatio || 1;
c.width = c.clientWidth * dpr;
c.height = c.clientHeight * dpr;
ctx.scale(dpr, dpr)

// DRAWS LINE
function drawRandomLine() {
  // get canvas width and height
  const maxX = c.width;
  const maxY = c.height;

  // generate random x and y
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // begin a new path
  ctx.beginPath();
  ctx.moveTo(0, 0);              // start at top-left corner
  ctx.lineTo(randomX, randomY);  // draw to random point
  ctx.strokeStyle = "green";     // line color
  ctx.lineWidth = 3;             // thickness
  ctx.stroke();
}


function getCanvasPos(e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  return { x, y };
}


function drawRandomCircle() {
  const maxX = c.width;
  const maxY = c.height;

  const centerX = Math.floor(Math.random() * maxX);
  const centerY = Math.floor(Math.random() * maxY);
  const radius = Math.floor(Math.random() * 50) + 10; // radius between 10 and 60

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 3;
  ctx.stroke();
}

//DRAWS SQAURE
function drawRandomSquare() {
  const size = 100;
  const randomX = Math.random() * (canvas.width - size);
  const randomY = Math.random() * (canvas.height - size);

  ctx.beginPath();
  ctx.moveTo(randomX, randomY);
  ctx.lineTo(randomX + size, randomY);
  ctx.lineTo(randomX + size, randomY + size);
  ctx.lineTo(randomX, randomY + size);
  ctx.closePath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.stroke();
}







//DRAWS RANDOM TRIANGLE
function drawTriangle() {
  const size = 100;
  const randomX = Math.random() * (canvas.width - size);
  const randomY = Math.random() * (canvas.height - size);

  ctx.beginPath();
  ctx.moveTo(randomX + size / 2, randomY);               // top point
  ctx.lineTo(randomX, randomY + size);                   // bottom left
  ctx.lineTo(randomX + size, randomY + size);            // bottom right
  ctx.closePath();
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 3;
  ctx.stroke();
}









// GETS THE CANVAS CORNERS
const canvas = document.getElementById('myCanvas');
const rect = canvas.getBoundingClientRect();

console.log(rect.top);
console.log(rect.left);
console.log(rect.width);
console.log(rect.height);


// CLEARS CANVAS
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
const clearBtn = document.querySelector('#clearCanvas');
clearBtn.addEventListener('click', clearCanvas);
// // LISTENS FOR THE CLICK
const lineBtn = document.querySelector('#lineButton');
lineBtn.addEventListener('click', drawRandomLine);

const circleBtn = document.querySelector('#circleButton');
circleBtn.addEventListener('click', drawRandomCircle);

const squareBtn = document.querySelector('#squareButton');
squareBtn.addEventListener('click', drawRandomSquare);

const triangleBtn = document.querySelector('#triangleButton');
triangleBtn.addEventListener('click', drawTriangle);


canvas.addEventListener('click', draw)


