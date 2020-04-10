class Balkje { //We hebben een class van balkje gemaakt zodat het compacter is anders hadden we van linker en rechter balkje code moeten maken, maar nu kunnen we het sneller doen.
constructor(zijde) {
    this.h = 80;
    this.w = 20;
    this.zijde = zijde;
    //Hier bepalen we de positie van de balkjes, y coord. blijft hetzelfde.
    if (this.zijde == "links") {
        this.x = 50;
    }

    if (this.zijde == "rechts"){
        this.x = 750;
    }
    this.y = 360;

}
//Hier bepalen we de richting waarnaar de balken gaan bewegen. Het werkt zo de richting wordt bepaald en of x of de y coord wordt verandert. 
bewegen(richting) {
    if (richting == "omhoog") {
        this.y -= 7;
    }
    else if (richting == "omlaag") {
        this.y += 7; 
    }
    else if (richting == "links") {
        this.x -= 6;
    }
    else if (richting == "rechts") {
        this.x += 6;
    }
    if (this.zijde == "links"){
        this.x = constrain(this.x, 0, 200); //Constrain zorgt ervoor dat de balken niet uit het scherm kunnen verwijderen.
        this.y = constrain(this.y, 0, 720);
    } 
    if (this.zijde == "rechts"){
        this.x = constrain(this.x,600,780);
        this.y = constrain(this.y,0,720);
    }


}

//Hier worden de balken daad werkelijk getekend. 
teken(){
    rect(this.x,this.y,20,60); 
    //text("x=" + this.x + ", y=" + this.y, this.x, 100);
}

}