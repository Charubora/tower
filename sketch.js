const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b12,b13,b14,b15;
var engine, world;

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  platform1 = new Ground(530, 480, 340, 15);
 //platform2 = new Ground(950, 350, 200, 15);

 //level 1

 b1 = new Block(410,430,60,70);
 b2 = new Block(470,430,60,70);
 b3 = new Block(530,430,60,70);
 b4 = new Block(590,430,60,70);
 b5 = new Block(650,430,60,70);
 
 // level 2
 b6 = new Block1(440,360,60,70);
 b7 = new Block1(500,360,60,70);
 b8 = new Block1(560,360,60,70);
 b9 = new Block1(620,360,60,70);

 //level 3
b10 = new Block2(470,290,60,70);
b11 = new Block2(530,290,60,70);
b12 = new Block2(590,290,60,70);

//level 4
b13 = new Block3(500,220,60,70);
b14 = new Block3(560,220,60,70);

// top
b15 = new Block4(530,150,60,70);


shooter = Bodies.circle(250,550,35);
World.add(world,shooter);
//ellipseMode(CENTER);

slingshot = new SlingShot(shooter,{x:100,y:200});

}

function draw() {

  background("black"); 
  Engine.update(engine); 
 strokeWeight(4);

  platform1.display();
  ground.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  b6.display();
  b7.display();
  b8.display();
  b9.display();

  b10.display();
  b11.display();
  b12.display();

  b13.display();
  b14.display();

  b15.display();

  push();
  fill("white");
ellipse(shooter.position.x,shooter.position.y,35);
pop();

slingshot.display();


}

function mouseDragged(){
  Matter.Body.setPosition(shooter, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}






