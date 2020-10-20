class Dustbino2 {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 13,120 , options);
      this.width = 13;
      this.height = 120;
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect( 0, 0, this.width, this.height);
      pop();
    }
  };
  