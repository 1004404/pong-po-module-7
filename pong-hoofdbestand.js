var x = 50;
var y = 50;

function setup()  {
  var myCanvas = createCanvas(800,800);
  frameRate(50);
}

function draw() {
  background('black');
  if (keyIsDown(UP_ARROW)) {
      y -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
     y += 3; 
  }
  if (keyIsDown(LEFT_ARROW)) {
     x -= 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
     x += 2;
  }
  
  x = constrain(x, 0, 200);
  y = constrain(y, 0, 720);
  rect(x,y,20,80);
  tekenLijn(220,250,5,10,'red');
  tekenLijn(220,275,5,10,'red');
}

function tekenLijn(x,y,w,h,kleur) {
    push();
    fill(kleur);
    rect(x,y,w,h);
    pop();
}
