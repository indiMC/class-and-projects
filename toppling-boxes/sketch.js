const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;


    rubber1 = new Rubber(100,200,50,50);

    stone1 = new Stone(400,10,100,200);

    hammer1 = new Hammer(200,200,100,50);

    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
   rubber1.display();
   stone1.display();
    hammer1.display();
    ground.display();
}