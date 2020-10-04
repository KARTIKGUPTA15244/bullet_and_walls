
var bullet;

var wall,thickness,height;
var speed;
var damage;
function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  bullet = createSprite(80,200,30,10);
  bullet.shapeColor = "white";

thickness = random(22,83)
  

wall = createSprite(1200,200,thickness,height/2);

//bullet.velocityX=speed;

weight=random(30,52);
  speed = random(223,321);
}

function draw() {
  background(0);  
bullet.velocityX = speed;
if(hascollided()){
damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  
  if(damage>10){
  wall.shapeColor = "red";
  }
  if(damage<10 ){
  wall.shapeColor = "green";
  
  }
  
}



  drawSprites();

}
function hascollided(){

  if (wall.x - bullet.x < bullet.width/2 +wall.width/2){
    bullet.velocityX = 0;
  return true;
  
  }
  else{
    return false
  }
}