let x = 200;
let y = 300;
let startSpeed = 3;
let speed = startSpeed;
let acceleration = 1;
let deacceleration = 0.3;
let maxSpeed = 5;
let minSpeed = 0.5;
let state = "start";

function setup() {
  createCanvas(700, 400);
}

function startScreen() {
  background(255, 255, 220);
  textSize(50);
  fill(0, 0, 0);
  text("🪂Click to start!🐶", 150, 250);
  textSize(30);
  text("Parachute puppy returns to the grassland", 60, 180);
}

function gameScreen() {
  background(255, 255, 255);
  fill(110, 190, 230);
  rect(0, -100, 700, 500);

  fill(75, 128, 70);
  rect(x - 200, 370, 700, 500);

  character(x + 600, y - 100);
  cloud(x - 100, 50);

  if (y >= 900 && speed <= minSpeed) {
    state = "win";
  } else if (y >= 900) {
    state = "end";
  } else {
    if (keyIsDown(32)) {
      speed = max(minSpeed, speed - deacceleration);
    } else {
      speed = min(maxSpeed, speed + acceleration);
    }
  }
  y = y + speed;
}

function endScreen() {
  background(240, 205, 105);
  textSize(50);
  fill(255, 255, 255);
  text("Game over!", 200, 150);

  //button
  fill(255, 255, 255);
  rect(250, 270, 200, 50, 10);
  fill(0);
  textSize(25);
  text("Restart", 300, 300);
}

function winScreen() {
  background(180, 240, 180);
  textSize(50);
  fill(255, 255, 255);
  text("You win!🎉", 200, 150);

  //button
  fill(255, 255, 255);
  rect(250, 270, 200, 50, 10);
  fill(0);
  textSize(25);
  text("Restart", 300, 300);
}

function resetGame() {
  y = 300;
  speed = startSpeed;
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "end") {
    endScreen();
  } else if (state === "win") {
    winScreen();
  }
}

function mousePressed() {
  if (state === "start") {
    state = "game";
  } else if (state === "end" || state === "win") {
    if (mouseX > 250 && mouseX < 450 && mouseY > 270 && mouseY < 320) {
      resetGame();
      state = "game";
    }
  }
}

function character(x, y) {
  push();
  scale(0.4);

  //parachute
  push();
  translate(x - 5, y - 165);
  scale(0.5);
  fill(255, 255, 255);
  stroke(0);
  strokeWeight(1);
  arc(0, 0, 350, 370, PI, TWO_PI);
  pop();

  //line
  fill(255, 255, 255);
  stroke(0);
  strokeWeight(2);
  line(x - 40, y - 160, x - 20, y - 20);
  line(x + 40, y - 160, x + 20, y - 20);
  line(x, y - 160, x, y - 20);

  //arm
  push();
  translate(x - 30, y + 40);
  fill(255, 255, 255);
  rotate(0.2);
  //noStroke();
  ellipse(0, 0, 80, 30);
  pop();

  push();
  translate(x + 30, y + 40);
  rotate(-0.2);
  //noStroke();
  ellipse(0, 0, 80, 30);
  pop();

  //leg
  push();
  translate(x - 30, y + 105);
  fill(255, 255, 255);
  rotate(-1.5);
  //noStroke();
  ellipse(0, 0, 50, 30);
  pop();

  push();
  translate(x + 30, y + 105);
  rotate(1.5);
  //noStroke();
  ellipse(0, 0, 50, 30);
  pop();

  //body
  fill(255, 255, 255);
  //noStroke();
  ellipse(x, y + 60, 100, 110);
  fill(160, 185, 210);
  noStroke();
  ellipse(x, y + 70, 65, 70);

  //head2
  fill(255, 255, 255);
  noStroke();
  arc(x - 20, y - 65, 50, 50, PI, TWO_PI);
  arc(x + 20, y - 65, 50, 50, PI, TWO_PI);
  stroke(1);
  ellipse(x, y - 20, 110, 100);

  //ear
  push();
  translate(x - 50, y - 40);
  rotate(2.3);
  scale(1.2);
  fill(255, 255, 255);
  noStroke();
  ellipse(0, 0, 70, 30);
  pop();

  //ear 2
  push();
  translate(x + 50, y - 40);
  rotate(-2.3);
  scale(1.2);
  fill(255, 255, 255);
  noStroke();
  ellipse(0, 0, 70, 30);
  pop();

  //head1
  fill(160, 185, 220);
  stroke(0);
  strokeWeight(2);
  arc(x - 20, y - 65, 40, 40, PI, TWO_PI);
  arc(x + 20, y - 65, 40, 40, PI, TWO_PI);

  //eyes
  fill(0, 0, 0);
  stroke(0, 0, 0);
  ellipse(x - 20, y - 20, 10);
  ellipse(x + 20, y - 20, 10);

  //mouth
  noFill();
  stroke(0);
  strokeWeight(2.5);
  arc(x - 10, y + 5, 20, 15, 0, PI);
  arc(x + 10, y + 5, 20, 15, 0, PI);

  //nose
  fill(0, 0, 0);
  noStroke();
  ellipse(x, y, 20, 10);
  pop();
}

function cloud(x, y) {
  noStroke();
  fill(255, 255, 255);
  ellipse(x - 30, y, 40, 40);
  ellipse(x + 30, y, 40, 40);
  ellipse(x, y - 10, 60, 50);
  ellipse(x, y + 8, 80, 40);
}
