
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var ground;
var roof;
function preload(){}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(100,300,50);
	bob2 = new Bob(150,300,50);
	bob3 = new Bob(200,300,50);
	bob4 = new Bob(250,300,50);
	bob5 = new Bob(300,300,50);

	gound = new Ground(300,400,600,20);
	roof = new Ground(300,100,600,10);

	rope1 = new Rope(bob1.body,roof.body,-50*2,0);
	rope2 = new Rope(bob2.body,roof.body,-25*2,0);
	rope3 = new Rope(bob3.body,roof.body,-0*2,0);
	rope4 = new Rope(bob4.body,roof.body,25*2,0);
	rope5 = new Rope(bob5.body,roof.body,50*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  gound.display();
  roof.display();
  drawSprites();
 
}



