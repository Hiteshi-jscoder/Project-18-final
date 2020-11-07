var banaImage,obstacleImg,backImg,score,back;
var obstaclegrp;

function preload(){
  obstacleImg=loadImage("stone.png");
  banaImg=loadImage("banana.png");
  backImg=loadImage("jungle.jpg");
}

function setup() {
  createCanvas(600,300);
  
  back=createSprite(300,150,600,300);
   
  
  obstaclegrp=new Group();
}

function draw() {
  background("blue");
  
  drawSprites();
}