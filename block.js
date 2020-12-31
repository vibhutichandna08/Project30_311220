class Block{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      
      World.add(world, this.body);
    }
    
    display(){
      if (this.body.speed > 3) {
        push();
        World.remove(world, this.body);
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        pop();
      } else {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke(217, 82, 4);
        fill(242, 135, 5);
        rect(0, 0, this.width, this.height);
        pop();
      }
    }
}