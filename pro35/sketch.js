var balloon,bImg;
var bg,bgImg;
var database,position;

function preload(){
  bgImg = loadImage("img/city.png");
  bImg = loadImage("img/hab1.png");

}

function setup() {
  createCanvas(1920,1080);
  
  bg = createSprite(1920/2,1080/2,1,1);

  balloon = createSprite(500,500,1,1);

}

function draw() {
  background(0);  

  bg.addImage(bgImg);
  bg.scale = 0.5

  balloon.addImage(bImg);

  if(keyDown("up")){
    balloon.y = balloon.y -5;
  }
  if(keyDown("down")){
    balloon.y = balloon.y +5;
  }
  if(keyDown("right")){
    balloon.x = balloon.x +5;
  }
  if(keyDown("left")){
    balloon.x = balloon.x -5;
  }

  

  drawSprites();

}