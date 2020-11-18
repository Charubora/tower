class Block3{
    constructor(x, y, width, height){
    
       this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
  
    display(){
      var angle = this.body.angle;
      fill(244,137,247);
      push();
      translate(this.body.position.x, this.body.position.y);
      rect(0,0,this.width,this.height);
      rotate(angle);
      rectMode(CENTER);
      pop();
  
    }
  
  }