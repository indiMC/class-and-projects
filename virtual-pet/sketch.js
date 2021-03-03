var dog,sadDog,happyDog,mImg,database;
var position;
var feed,FeedTime,foodobject,Lastfeed,addFood;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();
  console.log(database);

  foodobject=new Food();
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  var dogo = database.ref('Food');
  dogo.on("value", readPosition, showError);
  feed = createButton("FEED DRAGO");
  feed.position(500,15);
  feed.mousePressed(FeedDog);
  add = createButton("ADD FOOD");
  add.position(400,15);
  add.mousePressed(addFood)
}

function draw() {
  background(46,139,87);

  foodobject.display();

  fill("blue");
  textSize(15);

  drawSprites();
}

//function to read food Stock
function readPosition(data){
  position = data.val();
  foodobject.updateFoodStock(position);
}

function writePosition(ab){
  if(ab>0){
    ab = ab-1
  }
  else{
    ab=0
  }
  database.ref("/").set({
    "Food":ab
  })
}


//function to update food stock and last fed time
function showError(){
  console.log("Error in writing to the database");
}

function FeedDog(){
  dog.addImage(happyDog)
  foodobject.updateFoodStock(foodobject.getFoodStock()-1)
  database.ref("/").update({
    Food:foodobject.getFoodStock(),
    FeedTime:hour()
  })
}

//function to add food in stock
function addFood(){
  position++
  database.ref("/").update({
      Food:position
  })
}
