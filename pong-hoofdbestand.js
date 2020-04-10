  
var linkerRichting = "geen";
var rechterRichting = "geen";
var leftscore = 0;
var rightscore = 0;

function setup()  {
  var myCanvas = createCanvas(800,800);
  frameRate(50);
  Linkerbalkje = new Balkje("links");
  Rechterbalkje = new Balkje("rechts");
  links = new Balkje(true);
  rechts = new Balkje(false);  
  bal = new Bal();
}

function draw() {
    background('black');
    krijgRichting();
    Linkerbalkje.bewegen(linkerRichting);
    Rechterbalkje.bewegen(rechterRichting);
    Linkerbalkje.teken();
    Rechterbalkje.teken();
    
    bal.checkLinkerbalkje(links);
    bal.checkRechterbalkje(rechts);

    bal.edges();
    bal.show();
    bal.update();
    
    fill('white');
    textSize(40);
    text(leftscore, 40, 40);
    text(rightscore, width - 80, 40);

    var lijnYLinks = 0;
    for(var lijnNumberLinks = 1; lijnNumberLinks < 35; lijnNumberLinks++){
        tekenLijn(220,lijnYLinks,6,10,'red');
        lijnYLinks = lijnYLinks + 25;
    }

    var lijnYRechts = 0;
    for(var lijnNumberRechts = 1; lijnNumberRechts < 35; lijnNumberRechts++){
        tekenLijn(594,lijnYRechts,6,10,'red');
        lijnYRechts = lijnYRechts + 25;
    }

    var lijnYMidden = 0;
    for(var lijnNumberMidden = 1; lijnNumberMidden < 35; lijnNumberMidden++){
        tekenLijn(397,lijnYMidden,8,12,'blue');
        lijnYMidden = lijnYMidden + 25;
    }



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
