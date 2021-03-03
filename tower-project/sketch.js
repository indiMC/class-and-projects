//creating physics
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

//creating physics engine
var engine,world;

//variable
var ball,box,ground,string,polygonimg,slingShot;

//load images
function preload(){
  // ball = loadImage("polygon.png");
}
//creating opening
function setup(){
    //creating physics
    engine = Engine.create();
    world = engine.world;

    //ground
    ground = new Ground();

    //creating canvas
    createCanvas(1920,930);

    ground = new Ground();
  stand1 = new Stand(380,250,270,10);
  stand2 = new Stand(700,200,200,10);
 
  
  box1 = new Box(280,275,30,40);  
  box2 = new Box(310,275,30,40);
  box3 = new Box(340,275,30,40);
  box4 = new Box(370,275,30,40);
  box5 = new Box(400,275,30,40);
  box6 = new Box(430,275,30,40);
  box7 = new Box(460,275,30,40);
  box8 = new Box(490,275,30,40);
  
  box9 = new Box(310,235,30,40);
  box10 = new Box(340,235,30,40);
  box11 = new Box(370,235,30,40);
  box12 = new Box(400,235,30,40);
  box13 = new Box(430,235,30,40);
  box14 = new Box(460,235,30,40);
  
  box15 = new Box(340,195,30,40);
  box16 = new Box(370,195,30,40);
  box17 = new Box(400,195,30,40);
  box18 = new Box(430,195,30,40);
  
  box19 = new Box(370,155,30,40);
  box20 = new Box(400,155,30,40);
  
  box21 = new Box(385,115,30,40);

  box1 = new Box(640,175,30,40);
  box2 = new Box(670,175,30,40);
  box3 = new Box(700,175,30,40);
  box4 = new Box(730,175,30,40);
  box5 = new Box(760,175,30,40);
  
  box6 = new Box(670,135,30,40);
  box7 = new Box(700,135,30,40);
  box8 = new Box(730,135,30,40);
  
  box9 = new Box(700,95,30,40);

    ball = Bodies.circle(50,200,20);
    
  World.add(world,ball);


    slingShot = new SlingShot(this.ball,{x:200,y:200});
}

//draw objects for the project
function draw(){
    //create background
    background("white")
    //update engine
  Engine.update(engine);

  strokeWeight(2);
  stroke(15);

  stand1.display();
  stand2.display();

  stroke(15);
  fill("grey")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  stroke(15)
  fill("orange")
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
 stroke(15)
 fill("violet")
 box15.display();
 box16.display();
 box17.display();
 box18.display();
    stroke(15)
    fill("green")
    box19.display();
    box20.display();
 stroke(15)
 fill("blue")
 box21.display();

  stroke(15)
  fill("red")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  stroke(15)
  fill("yellow")
  box6.display();
  box7.display();
  box8.display();
  stroke(15)
  fill("pink")
  box9.display();

  ellipse(ball.position.x,ball.position.y,20);

  ground.display();
  slingShot.display();
}

//functions for mouse 
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    slingShot.fly();
  }