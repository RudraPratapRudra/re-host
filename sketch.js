
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  bananaGroup= new Group();

  obstacleImage = loadImage("obstacle.png");
  obstacleGroup = new Group();
}



function setup() {
createCanvas(600,400)
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1  

ground=createSprite(400,350,900,10)
ground.velocityX=-4;

console.log(ground.x)  
  
score=0;
  
}


function draw() {
background(255)
  
ground.x=ground.width/2;
  
stroke("black");
textSize(20);
fill("black")
text("Score : "+score,500,50)
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time : "+survivalTime,100,50) ; 
  

if(keyDown("space")){
monkey.velocityY=-12  
}  
monkey.velocityY= monkey.velocityY + 0.8;  
monkey.collide(ground);
  
Banana(); 
 

  
drawSprites();

}

function Banana(){
if(frameCount%80===0){
banana=createSprite(350,150)
banana.x=Math.round(random(150,400))
banana.addImage("food",bananaImage) 
 
banana.scale=0.1

banana.velocityX=-3 
console.log(random)
bananaGroup.add(banana)  
//banana.lifetime=2;
  
var obstacle=createSprite(150,327,20,20)
obstacle.x=Math.round(random(150,400))
obstacle.addImage("rock",obstacleImage)
 
obstacle.scale=0.1
obstacleGroup.add(obstacle)
console.log(random)  
obstacle.velocityX=-3
//obstacle.lifetime=2;
  
 
}  
}



