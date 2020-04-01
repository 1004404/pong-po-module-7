var x = 50;
var y = 50;

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