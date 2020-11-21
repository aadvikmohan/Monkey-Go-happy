var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;
var ground;

function preload(){


  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
 
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);  

//creating monkey  
monkey  = createSprite(80,315,20,20);  
monkey.addAnimation("moving", monkey_running);  
monkey.scale = 0.1;  
  
ground = createSprite(400,350,900,10);  
ground.velocityX = -4;  
ground.x = ground.width/2;
console.log(ground.x);  
  
foodGroup = new Group();  
obstacleGroup = new Group();  
}


function draw(){
background("white"); 

if(ground.x < 0)
{
ground.x = ground.width / 2;  
}  
  
if(keyDown("space"))
{
monkey.velocityY = -10;  
}  
monkey.velocityY = monkey.velocityY + 0.5;
  
if(obstacleGroup.isTouching(monkey))  
{
ground.velocityX = 0;  
monkey.velocityY = 0;  
obstacleGroup.setVelocityXEach(0);  
foodGroup.setVelocityXEach(0);    
obstacleGroup.setLifetimeEach(-1);  
foodGroup.setLifetimeEach(-1);    



}  
monkey.collide(ground);  

 spawnFood();
 
 spawnObstacle(); 
  
drawSprites(); 

fill("black");  
textSize(20);
survivalTime = Math.ceil(frameCount/getFrameRate()); 
text("SURVIVAL TIME : " + survivalTime , 200 , 50);  
  
}

function spawnFood()
{
if(frameCount % 80 === 0)
{
banana  = createSprite(600,250,20,10);  
banana.addImage(bananaImage);
banana.scale = 0.1;  
banana.velocityX = -4; 
banana.y = Math.round(random(120,250));
banana.lifetime = 150;  
monkey.depth = banana.depth + 1;  
  
foodGroup.add(banana);  
}  
}

function spawnObstacle()
{
if(frameCount % 300 === 0)
{
obstacle  = createSprite(800,310,40,20);  
obstacle.addImage(obstacleImage);
obstacle.scale = 0.2;  
obstacle.velocityX = -4; 
obstacle.lifetime = 200;  

obstacleGroup.add(obstacle);  
}  
}

