class Hitter {
    constructor(x, y, width, height) {
      var options = {
        'restitution':0.8,
        'friction':0.5,
        'density':0.4
    }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/bird.png")
      World.add(world, this.body,this.image);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      stroke(25,150,25);
      fill(25,150,25);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };