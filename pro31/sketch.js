const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var manimg;
var umbrella;
var ground;
var ground_options;
var drops = [];
var maxDrops = 100;
var t1,t2,t3,t4;
var t, tcf = 0;

function preload(){
    manimg = loadImage("walking_1.png");
    t1 = loadImage("1.png");
    t2 = loadImage("2.png");
    t3 = loadImage("3.png");
    t4 = loadImage("4.PNG");
}

function setup(){
   createCanvas(1920,1080);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umla();

   if(frameCount%100 === 0){
       for(var i=0; i<maxDrops;i++){
        drops.push(new Drop(random(0,1920),random(0,400),3,10));
       }
   }
   
    
}

function draw(){
    background(0);
    Engine.update(engine);

    var rand = Math.round(random(1,2));
    if(frameCount%80===0){
        tcf = frameCount;
        t = createSprite(random(10,1920),random(10,30),10,10);
        switch(rand){
            case 1 : t.addImage(t1);
            break;
            case 2 : t.addImage(t2);
            break;
            case 3 : t.addImage(t3);
            break;
            default : break;
          }
          console.log(tcf);
    }
    if(tcf + 20 === frameCount && t){
        t.destroy();
     }

     umbrella.display();

     for(var i=0; i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
      }
      

    drawSprites();
}   

