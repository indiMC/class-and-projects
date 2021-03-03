const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var ico,ico2,icoImg,ico2Img;
var sbg,sbgImg
var gameState = start;
var start;
var play;
var optiongs;

var hr,min,sec;
var secondAngle,minuteAngle,hourAngle;

var button1;

function preload(){
bgImg = loadImage("img1/wal/cloud.png");
icoImg = loadImage("img1/play.png");
ico2Img = loadImage("img1/option.png");
sbgImg = loadImage("img1/wal/defaultbg.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);

  engine = Engine.create;
  world = (engine.world);

  

  angleMode(DEGREES);

  r = random;

  

  if(gameState === start){

    sbg = createSprite(displayWidth/2,displayHeight/2,1,1);
    sbg.addImage(sbgImg);
    sbg.scale = 10;

    ico = createSprite(displayWidth/2,displayHeight/2,10,10);
    ico.addImage(icoImg);

    ico2 = createSprite(displayWidth/2,displayWidth/2 - 275,1,1);
    ico2.addImage(ico2Img);
  }

  if(gameState === optiongs){
    
  }

  
  
}

function draw() {
  background(255,255,255);  
  
  drawSprites();

  textSize(200);
  fill(255);
  text("Gname",displayWidth/2 - 300,displayHeight/4);

  //creator and version
  textSize(25);
  fill(255);
  text("creator:Hardil_Sawaiyan Version:alpha-0.0.1",displayHeight/50,displayHeight/2 + 450,20);

  translate(200, 200);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  
  strokeWeight(10);
  stroke("blue");
  noFill();
  secondAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke("lime");
  minuteAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke("red");
  hourAngle = map(hr, 0, 24, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke('cyan');
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke('lime');
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("yellow");
  line(0, 0, 50, 0);
  pop();

  fill("255");
  rotate(90);
  stroke("green");
  text(hr + ":" + min + ":" + sec,displayWidth/2 -1000,displayHeight/2 - 350);

  
  
}

if(mouseClick(ico2)){
 alert("working");
}

//function optionbg(){
//  gameState = optiongs;
//}