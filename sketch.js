var player, goal, ball, goalKeeper;

function setup() {
  createCanvas(800,800);
  goal = createSprite(400, 125, 50, 50);
  player = createSprite(400,600,40,40);
  ball = createSprite(400,550,20,20);
  goalKeeper = createSprite(400, 200, 25, 25);
}

function draw() {
  background("black");  
  drawSprites();

}