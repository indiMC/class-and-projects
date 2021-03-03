
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;

var world,boy;
var stone;
var slingShot;

function preload(){
	boy=loadImage("images/boy.png");

	stone=loadImage("images/stone.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1140,50,30);
	mango3=new mango(1150,100,30);
	mango4=new mango(900,200,30);
	mango5=new mango(1000,300,30);
	mango6=new mango(1050,150,30);
	mango7=new mango(1060,250,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	
	stone = new Stone(100,200,50,50,0);

	slingShot = new Slingshot(stone.body,{x:245,y:420});
	

	Engine.run(engine);


}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

 
  treeObj.display();
  mango1.display();
  mango2.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  groundObject.display();
  slingShot.display();
  mango3.display();
  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly()
}