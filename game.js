let x = 200;
let y = 300;
let speed=5;

function setup() {
  createCanvas(800, 600);
}

function draw(){
  background(110,190,230);
  character(x,y);

  if (keyIsDown(37)){
x=x-speed;
  } else if (keyIsDown(39)){
x=x+speed;
  }
  if (keyIsDown(38)){
    y=y-speed;
      } else if (keyIsDown(40)){
    y=y+speed;
      }
}

function character(x,y){
  push();
  scale(0.7);
  
  //parachute
  push();
  translate(x-5,y-165);
  scale(0.5);
  fill(255,255,255);
  stroke(0);
  strokeWeight(1);
  arc(0,0,350,370,PI,TWO_PI);
  pop();
  
  //line
  fill(255,255,255);
  stroke(0);
  strokeWeight(2);
  line(x-40,y-160,x-20,y-20);
  line(x+40,y-160,x+20,y-20);
  line(x,y-160,x,y-20);
  
  //arm
  push();
  translate(x-30,y+40);
  fill(255,255,255);
  rotate(0.2);
  //noStroke();
  ellipse(0,0,80,30);
  pop();
  
  push();
  translate(x+30,y+40);
  rotate(-0.2);
  //noStroke();
  ellipse(0,0,80,30);
  pop();
  
  //leg
  push();
  translate(x-30,y+105);
  fill(255,255,255);
  rotate(-1.5);
  //noStroke();
  ellipse(0,0,50,30);
  pop();
  
  push();
  translate(x+30,y+105);
  rotate(1.5);
  //noStroke();
  ellipse(0,0,50,30);
  pop();
  
  //body
  fill(255,255,255);
  //noStroke();
  ellipse(x,y+60,100,110);
  fill(160,185,210);
  noStroke();
  ellipse(x,y+70,65,70);
  
  //head2
  fill(255,255,255);
  noStroke();
  arc(x-20,y-65,50,50,PI,TWO_PI);
  arc(x+20,y-65,50,50,PI,TWO_PI);
  stroke(1);
  ellipse(x,y-20,110,100);
  
  //ear
  push();
  translate(x-50,y-40);
  rotate(2.3);
  scale(1.2);
  fill(255,255,255);
  noStroke();
  ellipse(0,0,70,30);
  pop();
  
  //ear 2
  push();
  translate(x+50,y-40);
  rotate(-2.3);
  scale(1.2);
  fill(255,255,255);
  noStroke();
  ellipse(0,0,70,30);
  pop();
  
  //head1
  fill(160,185,220);
  stroke(0);
  strokeWeight(2);
  arc(x-20,y-65,40,40,PI,TWO_PI);
  arc(x+20,y-65,40,40,PI,TWO_PI);
  
  //eyes
  fill(0,0,0);
  stroke(0,0,0);
  ellipse(x-20,y-20, 10);
  ellipse(x+20,y-20,10);
  
  //mouth
  noFill();
  stroke(0);
  strokeWeight(2.5);
  arc(x-10,y+5,20,15,0,PI);
  arc(x+10,y+5,20,15,0,PI);
  
  //nose
  fill(0,0,0);
  noStroke();
  ellipse(x,y,20,10);
  pop();
  }  
  