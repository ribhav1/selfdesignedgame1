var database;
var gameState=0;
var playerCount;
var player1;
var form1;
var game1;
var allPlayers;
var rockets = [rocket1, rocket2];
var p;
var pVel;
var force;
var pos;
var fDirection;
var fireColor;
var playerColor;
var touch;
var rocket1, rocket2;
var forcePush;
var prImg1, prImg2;

function preload(){
prImg1 = loadImage("rocket.png");
prImg2 = loadImage("rocket.png");
}

function setup() {

    createCanvas(1900, 938);
    
    p=createVector(width/2,height/2)
    pVel=createVector(0,0);
    force=createVector(0,0);
    pos = 10;
    fDirection = 0;

    database = firebase.database();

    game1 = new Game();
    game1.getGameState();
    game1.start();

}

  function draw() {
  //background(80,80, 200);
  background(170);
   if(playerCount === 2){
     game1.updateGameState(1);   
   }
   if(gameState === 1){
    game1.play();
    // playerColor = color(0);
    //     fireColor = color(80,80, 200);
          
    //     forcePush = force.mult(0.3);  
    
    //     // if( keyIsDown(LEFT_ARROW) && player.index !== null){
    //     // fDirection -= 6;
    //     // }
    //     // if( keyIsDown(RIGHT_ARROW) && player.index !== null){
    //     // fDirection+= 6;
    //     // }
    //     // if(keyIsDown(UP_ARROW) && player.index !== null){
    //     // force=p5.Vector.fromAngle(radians(fDirection));
    //     // pVel.add(forcePush);
    //     // fireColor = color(0, 255, 255);
      
    //   .;
    //   if÷(keyIsDown((RIGHT_ARROW)) && player1.index !== null){
    //     rockets[index-1].x += 5;
    //     //rockets[index-1].rotation = PI/2;
    //   }
    //   if(keyIsDown((LEFT_ARROW)) && player1.index !== null){
    //     rockets[index-1].x -= 5;
    //     //rockets[index-1].rotation = -PI/2;
    //   }
     console.log("games1");
   }
   if(gameState === 2){
    game1.end();
   }
  
} 

function keyPressed(){
  if(gameState === 1){
    if(keyCode === "UP_ARROW"){
    console.log("keyPressed");
    }
  } 
}