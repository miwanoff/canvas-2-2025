const canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

const n = 10;

class Ball {
  constructor(context, x = 100, y = 100) {
    this.x = x;
    this.y = x;
    this.xSpeed = Math.floor(Math.random() * 10);
    this.ySpeed = Math.floor(Math.random() * 10);
    this.color = "blue";
  }

  circle(x, y, radius = 5) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fill();
  }

  draw() {
    context.fillStyle = this.color;
    this.circle(this.x, this.y);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  checkCollision() {
    if (this.x <= 0 || this.x >= width) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y <= 0 || this.y >= height) {
        this.ySpeed = -this.ySpeed;
      }
  }
}

function drawBorder() {
  context.strokeStyle = "grey";
  context.lineWidth = 3;
  context.strokeRect(0, 0, width, height);
}

drawBorder();

//draw();

//const ball = new Ball(context);

const balls = [];
for (let i = 0; i < n; i++) {
  balls[i] = new Ball(context);
}

function go() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  //console.log(balls.length);
  //   ball.draw();
  //   ball.move();
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].move();
    balls[i].checkCollision();
  }
  drawBorder();
}

function start() {
  setInterval(go, 30);
}

start();
