class BaseClass{
    constructor(x, y, width, height) {
      var options = {
        isStatic:   false,
        restitution:0.8,
        friction:   0.3,
        density:    0.3
    }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        pop();
      }
}