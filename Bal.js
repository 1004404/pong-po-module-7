class Bal {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.xspeed = 0;
    this.yspeed = 0;
    this.r = 15;

    this.reset();
  }

  kaatsLinkerbalkje(p) {
    if (
      this.y - this.r < p.y + p.h &&
      this.y + this.r > p.y &&
      this.x - this.r < p.x + p.w &&
      this.x > p.x + p.w
    ) { text("klb", 300, 300);
        let diff = this.y - (p.y - p.h / 2);
        let rad = radians(45);
        let angle = map(diff, 0, p.h, -rad, rad);
        this.xspeed = 3 * cos(angle);
        this.yspeed = 3 * sin(angle);
        this.x = p.x + p.w / 2 + this.r;
    }
  }
  kaatsRechterbalkje(p) {
    if (
      this.y - this.r < p.y + p.h &&
      this.y + this.r > p.y &&
      this.x + this.r > p.x &&
      this.x < p.x
    ) { text("rlb", 300, 300);
      //if (this.x < p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let angle = map(diff, 0, p.h, radians(225), radians(135));
        this.xspeed = 3 * cos(angle);
        this.yspeed = 3 * sin(angle);
        this.x = p.x - p.w / 2 - this.r;
      //}
    }
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
    let angle = random(-PI / 4, PI / 4);
    this.xspeed = 3 * Math.cos(angle);
    this.yspeed = 3 * Math.sin(angle);

    if (random(1) < 0.5) {
      this.xspeed *= -1;
    }
  }

  edges() {
    if (this.y < 0 || this.y > height) {
      this.yspeed *= -1;
    }

    if (this.x - this.r > width) {
      leftscore++;
      this.reset();
    }

    if (this.x + this.r < 0) {
      rightscore++;
      this.reset();
    }
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
    text("x=" + round(this.x) + ", y=" + round(this.y), 300, 300);
  }
}
