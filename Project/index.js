


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
  ctx.strokeStyle = 'brown';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#000000ff';
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

function drawStarAt(x, y, spikes = 5, outerRadius = 50, innerRadius = 25) {
  let rot = Math.PI / 2 * 3;
  let step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(x, y - outerRadius);
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(
      x + Math.cos(rot) * outerRadius,
      y + Math.sin(rot) * outerRadius
    );
    rot += step;

    ctx.lineTo(
      x + Math.cos(rot) * innerRadius,
      y + Math.sin(rot) * innerRadius
    );
    rot += step;
  }
  ctx.lineTo(x, y - outerRadius);
  ctx.closePath();
  ctx.strokeStyle = 'gold';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 5;
  ctx.stroke();
}


function drawHeartAt(x, y, size = 50) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x - size/2, y - size/2, x - size, y + size/3, x, y + size);
  ctx.bezierCurveTo(x + size, y + size/3, x + size/2, y - size/2, x, y);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 5;
  ctx.stroke();
}


function drawPentagonAt(x, y, size = 60) {
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
    const px = x + size * Math.cos(angle);
    const py = y + size * Math.sin(angle);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.strokeStyle = '#ddff00ff';
  ctx.lineWidth = 2;
   ctx.shadowColor = '#000';
  ctx.shadowBlur = 5;
  ctx.stroke();
}


function drawFlowerAt(x, y, petals = 6, radius = 50) {
  ctx.beginPath();
  for (let i = 0; i < petals; i++) {
    const angle = (i * 2 * Math.PI) / petals;
    const px = x + Math.cos(angle) * radius;
    const py = y + Math.sin(angle) * radius;
    ctx.quadraticCurveTo(x, y, px, py);
  }
  ctx.closePath();
  ctx.strokeStyle = '#ee00ffff';
  ctx.lineWidth = 2;
   ctx.shadowColor = '#000';
  ctx.shadowBlur = 5;
  ctx.stroke();
}


function drawSpiralAt(x, y, turns = 10, spacing = 4) {
  ctx.beginPath();
  let angle = 0;
  let radius = 0;
  ctx.moveTo(x, y);
  for (let i = 0; i < turns * 30; i++) {
    angle += 0.2;
    radius += spacing / 30;
    ctx.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
  }
  ctx.strokeStyle = '#04ff00ff';
  ctx.lineWidth = 2;
   ctx.shadowColor = '#000';
  ctx.shadowBlur = 5;
  ctx.stroke();
}

function drawCrescentAt(x, y, r = 60) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0.5 * Math.PI, 1.5 * Math.PI, false);
  ctx.arc(x + r / 3, y, r, 1.5 * Math.PI, 0.5 * Math.PI, true);
  ctx.closePath();
  ctx.fillStyle = 'yellow';
  ctx.fill()
  ctx.strokeStyle = '#bfb500ff';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 5;
  ctx.stroke();
}

function drawLightningAt(x, y, size = 80) {
  const h = size;
  const w = size / 3;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y + h * 0.25);
  ctx.lineTo(x + w / 2, y + h * 0.25);
  ctx.lineTo(x + w * 1.5, y + h);
  ctx.lineTo(x - w / 2, y + h * 0.5);
  ctx.lineTo(x, y + h * 0.5);
  ctx.closePath();
  ctx.strokeStyle = '#00b1beff';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#00ffffff'
  ctx.fill();
  ctx.stroke();
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 5;
}


function drawCloudAt(x, y, size = 50) {
  ctx.beginPath();
  ctx.arc(x, y, size, Math.PI * 0.5, Math.PI * 1.5);
  ctx.arc(x + size, y - size, size, Math.PI, Math.PI * 2);
  ctx.arc(x + size * 2, y, size, Math.PI * 1.5, Math.PI * 0.5);
  ctx.closePath();
  ctx.strokeStyle = '#a0a0a09f';
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.shadowColor = '#4f4f4f81';
  ctx.shadowBlur = 5;
  ctx.fillStyle = 'rgba(90, 90, 90, 0.4)';
  ctx.fill();
}


function drawPolygonSpiralAt(x, y, sides = 6, size = 20, turns = 15) {
  let angleStep = (2 * Math.PI) / sides;
  let radius = size;
  ctx.beginPath();
  for (let t = 0; t < turns * sides; t++) {
    const angle = t * angleStep;
    ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
    radius += 2; // outward spiral
  }
  ctx.strokeStyle = '#000000ff';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 5;
}

function drawStarburstAt(x, y, rays = 20, inner = 20, outer = 60) {
  let angleStep = (2 * Math.PI) / rays;
  ctx.beginPath();
  for (let i = 0; i < rays; i++) {
    const angle = i * angleStep;
    const px = x + Math.cos(angle) * (i % 2 === 0 ? outer : inner);
    const py = y + Math.sin(angle) * (i % 2 === 0 ? outer : inner);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.strokeStyle = '#4cafa3';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 5;
  ctx.fillStyle = 'rgba(255, 228, 25, 0.54)';
  ctx.fill();
}

function drawDotAt(x, y, radius = 5) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.shadowColor = 'transparent'; // no glow for the dot
  ctx.fill();
}


// let isDrawing = false;

// c.addEventListener('mousedown', (e) => {
//   isDrawing = true;
//   const { x, y } = getCanvasPos(e);
//   drawDotAt(x, y); // draw immediately where clicked
// });

// c.addEventListener('mousemove', (e) => {
//   if (!isDrawing) return;
//   const { x, y } = getCanvasPos(e);
//   drawDotAt(x, y); // draw while moving
// });

// c.addEventListener('mouseup', () => {
//   isDrawing = false;
// });

// c.addEventListener('mouseleave', () => {
//   isDrawing = false;
// });











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
    case 'square':   drawDotAt(x, y);   break;
    case 'triangle': drawTriangleAt(x, y); break;
    case 'hexagon':  drawHexagonAt(x, y);  break;
    default:         drawSquareAt(x, y);   break;
    case 'star':     drawStarAt(x, y);     break;
    case 'heart':  drawHeartAt(x, y);      break;
    case 'pentagon': drawPentagonAt(x, y); break;
    case 'flower':   drawFlowerAt(x, y);   break;
    case 'spiral':   drawSpiralAt(x, y);   break;
    case 'cresent':  drawCrescentAt(x, y); break;
    case 'lightning': drawLightningAt(x, y); break;
    case 'cloud': drawCloudAt(x, y);       break;
    case 'polygonspiral': drawPolygonSpiralAt(x, y); break;
    case 'starburst': drawStarburstAt(x, y); break;
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


// No Half Measures 