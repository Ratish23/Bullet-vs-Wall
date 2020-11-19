var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(150,200,30,10);
  bullet.velocityX = speed;
  bullet.shapeColor="white";
  wall=createSprite(1000,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0,0,0);  

if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  bullet.velocityX=0;
  var damage=(0.5*weight*speed*speed)/thickness*thickness*thickness;
  if(damage<=10){
    wall.shapeColor="green";
  }
  else if(damage>10){
    wall.shapeColor="red";
  }
}
  drawSprites();
}