//var obstacleGroup, bananaGroup;
var score, ground;
var monkey, banana, obstacle;

//function preload() {
  
  //monkey_running = loadAnimation();
  
//}

function setup() {
  createCanvas(400, 400);

  //bananaGroup = createGroup();
  //obstacleGroup = createGroup();

  monkey = createSprite(70, 355, 40, 80);
  //monkey.setAnimation("monkey");
  //monkey.scale = 0.15;

  ground = createSprite(200, 355, 800, 5);
  ground.velocityX  = -4;
  ground.x = ground.width/2;

  obstacle = createSprite(400, 355, 40, 40);

  banana = createSprite(400, 310, 20, 20);

  var score = 0;

}

function draw() {
  background(0);

  text("Score: " + score, 340, 50);

  if(keyDown("space")) {
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 1;
  
  monkey.collide(ground);
  
  ground.velocityX = -4;
  
  if(ground.x < 0) {
    ground.x = ground.width/2;
  }

  Banana();
  obstacles();

  drawSprites();
}

function Banana() {

  if (frameCount % 80 === 0) {

    banana.velocityX = -3;
    
    if(monkey.isTouching(banana)) {
      banana.destroy();
      score = score + 2;
    }

  }

}

function obstacles() {

  if(frameCount % 100 === 0) {

    obstacle.velocityX = -3;
    
    if(monkey.isTouching(obstacle)) {
      monkey.destroy();
      obstacle.destroy();
      text("YOU LOSE", 180, 200);
      obstacle.velocityX = 0;
      banana.velocityX = 0;
    }

  }

}