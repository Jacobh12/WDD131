const PI = 3.14;
let radius = 3;
let area = 0;
function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}

area = circleArea(radius);
console.log("Area of circle: " + area);
radius = 4;
area = circleArea(radius);
console.log("Area of circle: " + area);