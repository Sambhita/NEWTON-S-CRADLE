class Bob {
    constructor(x, y, radius) {
      var options = {
        restitution: 1,
        friction: 0,
        density: 0.8,
      };
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(this.x, this.y, this.radius / 2, options);
      World.add(world, this.body);
    }
  
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      //strokeWeight(4);
      fill("#FF1694");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  }
  