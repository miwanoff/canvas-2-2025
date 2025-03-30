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

class BallsGame {
  constructor(balls, canvas) {
    this.context = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.balls = balls;
  }

  drawBorder() {
    this.context.strokeStyle = "grey";
    this.context.lineWidth = 3;
    this.context.strokeRect(0, 0, this.width, this.height);
  }

  go() {
    this.context.clearRect(0, 0, this.width, this.height);
    //console.log(balls.length);
    //   ball.draw();
    //   ball.move();
    for (let i = 0; i < this.balls.length; i++) {
      this.balls[i].draw();
      this.balls[i].move();
      this.balls[i].checkCollision();
    }
    this.drawBorder();
  }

  start() {
    setInterval(this.go.bind(this), 30);
  }
}

//drawBorder();

//draw();

//const ball = new Ball(context);

const balls = [];
for (let i = 0; i < n; i++) {
  balls[i] = new Ball(context);
}

//start();

let ballsGame = new BallsGame(balls, canvas);
ballsGame.drawBorder();

ballsGame.start();
