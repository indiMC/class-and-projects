//phycis engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//variables
var Ball1,ground1,sling1,cball,box1;

//pro-31setup.exe
function setup() {
  //creating canvas
  createCanvas(1920,1080);
  //creating var engine and world.
  engine = Engine.create();
  world = engine.world;

  //creating bodies in the world
  //ball
  ball1 = new Ball(400,200,25);

  //grounds
  ground1 = new Ground(400,400,800,10,0);
  ground2 = new Ground(300,300,200,5,0);
  ground3 = new Ground(200,150,20,5,0);
  ground4 = new Ground(960,1080/2,400,10,0);

  //boxes
  box1 = new Box(300,200,30,60);
  box2 = new Box(200,100,30,60);
  box3 = new Box(270,200,30,60);
  box4 = new Box(240,200,30,60);
  box5 = new Box(333,200,30,60);
  box6 = new Box(300,100,30,60);
  box7 = new Box(270,100,30,60);
  box8 = new Box(290,10,30,60);

  c = new Cir(500,365,30);
  c1 = new Cir(590,365,30);
  c2 = new Cir(100,100,30);
  

//constraint
  sling1 = new Sling(ball1.body,{x:400,y:200});

//run engine
  Engine.run(engine);
}
//draw everything in the canvas
function draw() {
  //draw background
  background("cyan");  

  textSize(25);
  text("World Tap ctrl + r to restart phycis demo",400,100);
  stroke(0);
  strokeWeight(3);
  

  //display bodies in the world
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  text("by -Hardil Sawaiyan",1000,700,10);
  
  box1.display();
  text("Bodies",150,80,10);
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  c.display();
  text("Vanising pigs",500,300,10);
  c1.display();
  c2.display();
 
  //draw ellipse in the canvas
  ellipse(400,200,50,50);
  //fill with orange color
  fill("orange");
  
  sling1.display();
  ball1.display();
  text("constraint player",-40,-40,10);
  fill(0);

  

  //createAllSprites in the canvas
  drawSprites();
}

//funtions to use mouse
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling1.fly()
}
