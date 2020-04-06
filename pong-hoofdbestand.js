var linkerRichting = "geen";
var rechterRichting = "geen";

function setup()  {
  var myCanvas = createCanvas(800,800);
  frameRate(50);
  Linkerbalkje = new Balkje("links");
  Rechterbalkje = new Balkje("rechts");
}

function draw() {
    background('black');
    krijgRichting();
    Linkerbalkje.bewegen(linkerRichting);
    Rechterbalkje.bewegen(rechterRichting);
    Linkerbalkje.teken();
    Rechterbalkje.teken();
    tekenLijn(220,250,5,10,'red');
    tekenLijn(220,275,5,10,'red');
    tekenLijn(220,300,5,10,'red');
    tekenLijn(220,325,5,10,'red');
    tekenLijn(220,350,5,10,'red');
}

function tekenLijn(x,y,w,h,kleur) {
    push();
    fill(kleur);
    rect(x,y,w,h);
    pop();
}

function krijgRichting() {
if (keyIsDown(UP_ARROW)) {
     rechterRichting = "omhoog";
}
else if (keyIsDown(DOWN_ARROW)) {
     rechterRichting = "omlaag"; 
}
else if (keyIsDown(LEFT_ARROW)) {
     rechterRichting = "links";
  }
else if (keyIsDown(RIGHT_ARROW)) {
     rechterRichting = "rechts";
}
else {
    rechterRichting = "geen";
}


if (keyIsDown(87)) {
     linkerRichting = "omhoog";
}
else if (keyIsDown(83)) {
     linkerRichting = "omlaag"; 
}
else if (keyIsDown(65)) {
     linkerRichting = "links";
  }
else if (keyIsDown(68)) {
     linkerRichting = "rechts";
}
else {
    linkerRichting = "geen";
}
}
