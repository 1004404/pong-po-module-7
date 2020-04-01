var x = 50;
var y = 50;

function setup()  {
  var myCanvas = createCanvas(800,800);
  frameRate(50);
}

function draw() {
  background('black');


 
  tekenLijn(220,250,5,10,'red');
  tekenLijn(220,275,5,10,'red');
}

function tekenLijn(x,y,w,h,kleur) {
    push();
    fill(kleur);
    rect(x,y,w,h);
    pop();
}
