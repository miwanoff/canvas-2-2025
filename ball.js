const canvas = document.getElementById("canvas");
const n = 10;
let x = 100;
let y = 100;

context = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
// console.log(width, height);

let xSpeed = Math.floor(Math.random() * 10);
let ySpeed = Math.floor(Math.random() * 10);

let color = "blue";

// console.log(xSpeed, ySpeed);

function circle(x, y, radius = 5) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fill();
}

// circle(100, 100);
// circle(150, 200);

function draw() {
  context.fillStyle = color;
  circle(x, y);
}

function move() {
  x += xSpeed;
  y += ySpeed;
}

function drawBorder() {
  context.strokeStyle = "grey";
  context.lineWidth = 3;
  context.strokeRect(0, 0, width, height);
}

drawBorder() 

//draw();

function go() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    move();
    drawBorder() 
}

function start(){
    setInterval(go, 30);
}

start();
