
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   
}



function setup() {
    createCanvas(500, 400);
  
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground= createSprite(400,350,900,10);
  ground.velocityX=-3;
  ground.x=ground.width/2;
  console.log(ground.x);

  FoodGroup=createGroup();
  obstacleGroup=createGroup();

}


function draw() {
  background("black")
  if(ground.x<50) {
    ground.x=ground.width/2;
  }
  
  stroke("black");
  textSize(18);
  fill("white");
  text("Score:"+score,400,50);
  
  stroke("black");
  textSize(18);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time :" + survivalTime,40, 50)

  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
 }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

drawSprites();
  
  Food();
  Obstacles();
}

function Food(){
  
  if(World.frameCount%80===0){
    banana= createSprite(400,200,20,20); 
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.lifetime=300;
    banana.scale=0.1;
    FoodGroup.add(banana);
    
  }
}

function Obstacles(){
 if (frameCount % 300 === 0){
   obstacle = createSprite(200,325,10,40);
   obstacle.velocityX = -(6 + score/100);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   obstacle.lifetime = 300;
   obstacleGroup.add(obstacle);


   } 
     }






