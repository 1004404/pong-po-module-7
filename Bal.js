  //hier worden de specificaties van de bal gegeven en de plek vanuit waar hij gereset wordt.
var score = 0;
class Bal {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.xspeed = 0;
    this.yspeed = 0;
    this.r = 20;

    this.reset();
  }

  //hier worden door middel van formules bepaald wanneer de bal een balkje raakt.
  kaatsLinkerbalkje(p) {
    if (
      this.y - this.r < p.y + p.h / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.x - this.r < p.x + p.w / 2
    ) {
        //als dus de bal een balkje raakt wordt hier dus bepaald wat er met de richting en de snelheden van de bal gebeurt.
        if (this.x > p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let rad = radians(45);
        let angle = map(diff, 0, p.h, -rad, rad);
        this.xspeed = 5 * cos(angle);
        this.yspeed = 5 * sin(angle);
        this.x = p.x + p.w / 2 + this.r;
      }
    }
  }
  kaatsRechterbalkje(p) {
    if (
      this.y - this.r < p.y + p.h / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.x + this.r > p.x - p.w / 2
    ) {
      if (this.x < p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let angle = map(diff, 0, p.h, radians(225), radians(135));
        this.xspeed = 5 * cos(angle);
        this.yspeed = 5 * sin(angle);
        this.x = p.x - p.w / 2 - this.r;
      }
    }
  }

  //deze update functie veranderd telkens met een snelheid van 50 FPS de x en y coördinaten van de bal.
  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  //in deze reset functie wordt vanuit het midden van de canvas een willekeurige hoek gekozen waarmee de bal met een snelheid van 3 of -3 zich gaat voortbewegen.
  reset() {
    this.x = width / 2;
    this.y = height / 2;
    let angle = random(-PI / 4, PI / 4);
    this.xspeed = 3 * Math.cos(angle);
    this.yspeed = 3 * Math.sin(angle);
    score++;
    if (random(1) < 0.5) {
      this.xspeed *= -1;
    }
  }
  //deze functie geeft de twee horizontale randen weer, wanneer de bal deze raakt, wordt de horizontale snelheid vermenigvuldigd met -1.
  edges() {
    if (this.y < 0 || this.y > height) {
      this.yspeed *= -1;
    }
    //ook wordt hier weergegeven wanneer er "gescoord" is, dit is het geval wanneer de bal in zijn geheel over de verticale grenzen is.
    if (this.x - this.r > width) {
      leftscore++;
      this.reset();
    }

    if (this.x + this.r < 0) {
      rightscore++;
      this.reset();
    }
  }
  //hier wordt de witte bal weergegeven, mits hij aan wordt geroepen in het hoofdbestand.
  show() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }
}
