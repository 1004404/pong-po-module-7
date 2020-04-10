class Bal {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.xsnelheid = 0;
    this.ysnelheid = 0;
    this.r = 15;

    this.reset();
  }

  checkBalkjeLinks(p) {
    if (
      this.y - this.r < p.y + p.h / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.x - this.r < p.x + p.w / 2
    ) {
      if (this.x > p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let rad = radians(45);
        let hoek = map(diff, 0, p.h, -rad, rad);
        this.xsnelheid = 5 * cos(hoek);
        this.ysnelheid = 5 * sin(hoek);
        this.x = p.x + p.w / 2 + this.r;
      }
    }
  }
  checkBalkjeRechts(p) {
    if (
      this.y - this.r < p.y + p.h / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.x + this.r > p.x - p.w / 2
    ) {
      if (this.x < p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let hoek = map(diff, 0, p.h, radians(225), radians(135));
        this.xsnelheid = 5 * cos(hoek);
        this.ysnelheid = 5 * sin(hoek);
        this.x = p.x - p.w / 2 - this.r;
      }
    }
  }

  update() {
    this.x += this.xsnelheid;
    this.y += this.ysnelheid;
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
    let hoek = random(-PI / 4, PI / 4);
    this.xsnelheid = 5 * Math.cos(hoek);
    this.ysnelheid = 5 * Math.sin(hoek);

    if (random(1) < 0.5) {
      this.xsnelheid *= -1;
    }
  }

  edges() {
    if (this.y < 0 || this.y > height) {
      this.ysnelheid *= -1;
    }

    if (this.x - this.r > width) {
      linksscore++;
      this.reset();
    }

    if (this.x + this.r < 0) {
      rechtsscore++;
      this.reset();
    }
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }
}
