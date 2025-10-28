


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
  ctx.moveTo(0, 0);              
  ctx.lineTo(randomX, randomY);  
  ctx.strokeStyle = "yellow";     
  ctx.lineWidth = 3;             
  ctx.stroke();
}


function getCanvasPos(e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  return { x, y };
}


function drawCircleAt(x, y, r = 40) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 5;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.stroke();
}

function drawSquareAt(x, y, size = 80) {
  ctx.beginPath();
  ctx.rect(x - size/2, y - size/2, size, size);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#d88200ff';
  ctx.shadowBlur = 5;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.stroke();
}

function drawTriangleAt(x, y, size = 100) {
  ctx.beginPath();
  ctx.moveTo(x, y - size/2);                // top
  ctx.lineTo(x - size/2, y + size/2);       // bottom-left
  ctx.lineTo(x + size/2, y + size/2);       // bottom-right
  ctx.closePath();
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 5;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.stroke();
}

function drawHexagonAt(x, y, r = 50) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6; // flat-top hex
    const px = x + r * Math.cos(angle);
    const py = y + r * Math.sin(angle);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 5;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.stroke();
}

// --- tool state + toolbar wiring ---
let currentTool = 'square'; // default

const toolbar = document.getElementById('shapeToolbar');
toolbar.addEventListener('click', (e) => {
  const btn = e.target.closest('.shape_button');
  if (!btn) return;

  currentTool = btn.dataset.shape;          // e.g., "circle", "square", ...
  // update active styles
  toolbar.querySelectorAll('.shape_button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
});

// --- canvas click draws the current tool ---
c.addEventListener('click', (e) => {
  const { x, y } = getCanvasPos(e);

  switch (currentTool) {
    case 'circle':   drawCircleAt(x, y);   break;
    case 'square':   drawSquareAt(x, y);   break;
    case 'triangle': drawTriangleAt(x, y); break;
    case 'hexagon':  drawHexagonAt(x, y);  break;
    default:         drawSquareAt(x, y);
  }
});





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


