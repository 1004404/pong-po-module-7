var x = 50;
var y = 50;
 
if (keyIsDown(e.keyCode==87)) {
    y -= 3;
}
if (keyIsDown(e.keycode==83)) {
    y += 3; 
}
if (keyIsDown(e.keycode==65)) {
    x -= 2;
}
if (keyIsDown(e.keycode==68)) {
    x += 2;
}
  
x = constrain(x, 0, 200);
y = constrain(y, 0, 720);
rect(x,y,20,80);