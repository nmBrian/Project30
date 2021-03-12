class block1 extends BaseClass{
  constructor(x,y,width,height) {
    super(x,y,width,height);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    //World.add(world, this.body);
  }
  display(){
   
    if(this.body.speed < 3){
      super.display();
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }else{ 
      World.remove(world, this.body);
      push();
      tint(255, this.visibility);
      this.visibility = this.visibility - 1; 
      pop();
    }
  }
    
  
}
