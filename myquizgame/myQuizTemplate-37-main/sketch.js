var gameState, database, quiz,database;
var contestant,contestantCount,contestantIndex,contestantCountRef,contestants,allContestants,readContestant;
var gameState = 0;


function setup(){
  createCanvas(1000,500);
  database = firebase.database();
  console.log(database);


  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}

function draw(){
  background("pink");
}

function mousePressed(){

}


