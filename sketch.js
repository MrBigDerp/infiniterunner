var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car4,car3,cars=[]
////////////////////////////not necessary (in tis one) to put[] i can use ; also
var form, player, game;

function preload(){
backgroundImage= loadImage("Veryhardtofindimg.jpg")
}
function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage);
  if(playerCount === 4){
    game.update(1);
  }
  if(playerCount == 1||playerCount==2||playerCount==3){
    fill("yellow");
    text("WAITING FOR PLAYERS TO JOIN...",320,200)
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
