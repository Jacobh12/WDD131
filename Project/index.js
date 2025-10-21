


// DRAWS LINE
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

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
  ctx.strokeStyle = "black";     // line color
  ctx.lineWidth = 2;             // thickness
  ctx.stroke();
}

drawRandomLine();