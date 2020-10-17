var thickness,wall;
var speed,weight,bullet;


function setup() {

  createCanvas(1600,800);

  speed=Math.round(random(50,200));
  weight =Math.round(random(30,52));
  thickness = Math.round(random(20,85));

  bullet = createSprite(50, 400, 50, 25);
  bullet.velocityX = speed;
  bullet.shapeColor=("white");

  wall = createSprite(1200,400,50,height/2);
  wall.shapeColor=color(80,80,80);
 
}

function draw() {

  background("black") 

   if(hasCollided(bullet,wall)){

     bullet.velocityX=0;

     var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

     if(damage>10){
     wall.shapeColor =color(255,0,0);
     }

     if(damage<10){
      wall.shapeColor=color(0,255,0);
      }

   }
  


   drawSprites();
}

function hasCollided(bullet2, wall2){

  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall2.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
     return false;
  
}

