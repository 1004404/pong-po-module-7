class Balkje {
constructor(zijde) {
    this.zijde = zijde;
    if (this.zijde == "links") {
        this.x = 50;
    }

    if (this.zijde == "rechts"){
        this.x = 750;
    }
    this.y = 50;

}

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
        this.x = constrain(this.x, 0, 200);
        this.y = constrain(this.y, 0, 720);
    } 
    if (this.zijde == "rechts"){
        this.x = constrain(this.x,600,780);
        this.y = constrain(this.y,0,720);
    }


}


teken(){
    rect(this.x,this.y,20,80); 
}

}