var car1,car2,car3


function setup() {
  createCanvas(1000,400);
  car1=createSprite(50, 80, 50, 50);
  car2=createSprite(50, 180, 50, 50);
  car3=createSprite(50, 300, 50, 50);
  wall=createSprite(900,200,90,320)
}

function draw() {
  background("black");  

  car1.velocityX=50;
  car2.velocityX=60;
  car3.velocityX=45;

  if(car1.isTouching(wall)){
    car1.shapeColor="yellow"
    car1.collide(wall)
  }
  if(car2.isTouching(wall)){
    car2.shapeColor='green'
    car2.collide(wall)
  }
  if(car3.isTouching(wall)){
    car3.shapeColor="yellow"
    car3.collide(wall)
  }
  drawSprites();
}