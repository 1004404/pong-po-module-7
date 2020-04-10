// De variabelen voor de richtingen worden hier gemaakt en krijgen standaard geen richting mee, want ze moeten nog niet bewegen
var linkerRichting = "geen";
var rechterRichting = "geen";
var leftscore = 0;
var rightscore = 0;

function setup()  {
  var myCanvas = createCanvas(800,800); //Maakt het canvas met een grote van 800 bij 800 pixels
  frameRate(50); //Framerate van 50
  Linkerbalkje = new Balkje("links"); //De class wordt aangeroepen, er wordt een linker en rechter variant van gemaakt
  Rechterbalkje = new Balkje("rechts");  
  bal = new Bal();
}

function draw() {
    //Er is ook nog een deluxe versie gemaakt van het kleuren systeem, haal bij regel 17 de // weg en bij regel 18 moet je ze erbij zetten, kijk uit het kan mogelijk epilepsie aanvallen veroorzaken.
     // backgroundGetal = (Math.ceil(Math.random() * 10)); 
    backgroundGetal = score; //In Bal.js wordt er bij elke reset loop er 1 bij score opgeteld. 
    //afhangend van welk backgroundGetal wordt de backgroundcolor veranderd voor scores tot en met 30.
    if (backgroundGetal == 1 || backgroundGetal == 11 || backgroundGetal == 21){
        backgroundColor = 'salmon';
    }
    else if (backgroundGetal == 2 || backgroundGetal == 12 || backgroundGetal == 22){
        backgroundColor = 'black';
    }
    else if (backgroundGetal == 3|| backgroundGetal == 13 || backgroundGetal == 23){
        backgroundColor = 'blue';
    }
    else if (backgroundGetal == 4 || backgroundGetal == 14 || backgroundGetal == 24){
        backgroundColor = 'red';
    }
    else if (backgroundGetal == 5 || backgroundGetal == 15 || backgroundGetal == 25){
        backgroundColor = 'yellow';
    }
    else if (backgroundGetal == 6 || backgroundGetal == 16 || backgroundGetal == 26){
        backgroundColor = 'orange';
    }
    else if (backgroundGetal == 7 || backgroundGetal == 17 || backgroundGetal == 27){
        backgroundColor = 'green';
    }
    else if (backgroundGetal == 8 || backgroundGetal == 18 || backgroundGetal == 28){
        backgroundColor = 'purple';
    }
    else if (backgroundGetal == 9 || backgroundGetal == 19 || backgroundGetal == 29){
        backgroundColor = 'salmon';
    }
    else if (backgroundGetal == 10 || backgroundGetal == 20 || backgroundGetal == 30){
        backgroundColor = 'brown';
    }

    background(backgroundColor);
    krijgRichting();//Krijgrichting wordt hier aangesproken
    textSize(20);
    Linkerbalkje.bewegen(linkerRichting);//Hier wordt het bewegen script aangeroepen voor linker en rechter balkje.
    Rechterbalkje.bewegen(rechterRichting);
    Linkerbalkje.teken();//Linker en rechter blakje worden getekend
    Rechterbalkje.teken();
    
    bal.kaatsLinkerbalkje(Linkerbalkje);//hier wordt de weerkaatsing van de bal op beide balkjes aangeroepen
    bal.kaatsRechterbalkje(Rechterbalkje);

    bal.edges();//hier worden de randen en scores aangeroepen
    bal.show();//hier wordt de bal aangeroepen
    bal.update();//hier wordt de weergave van de verplaatsing van de bal aangeroepen
    
    fill('white');//hier wordt de kleur van alle karakters in de canvas vastgesteld
    textSize(40);//hier wordt de lettertype vastgesteld
    text(leftscore, 40, 40);//hier wordt de positite van de score voor het balkje aan de linkerzijde bepaald
    text(rightscore, width - 80, 40);//hier wordt de positite van de score voor het balkje aan de linkerzijde bepaald

    //Hier worden de lijnen getekend. Dit is een snelle en compacte manier ervan. Elke keer als de loop herahald wordt wordt er weer een nieuw lijnstukje getekend
    //met de eigenschappen van tekenLijn(). Dit wordt gedaan tot 35. Na elke loop wordt de Y coord. verhoogd met 25 zodat er een mooie stippellijn ontstaat.
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
//Tekenlijn function met x,y,w,h en kleur. Dit zodat het er compacter uitziet in de draw.
function tekenLijn(x,y,w,h,kleur) {
    push();
    fill(kleur);
    rect(x,y,w,h);
    pop();
}
//Afhankelijk van welk knopje wordt ingedrukt wordt de richting veranderd. Als er geen knopje wordt ingedrukt dan heeft hij geen richting.
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

//De getallen staan voor W,S,A,D. 
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
