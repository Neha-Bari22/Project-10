var ship, ship_running;

var sea, seaImg;

function preload(){

  seaImg = loadImage("sea.png")
ship_running = loadAnimation("ship-1.png","ship-2.png")

}

function setup(){
  createCanvas(400,400);


sea = createSprite(200,80);
  sea.velocityX = -3;
  sea.addImage(seaImg);


  ship = createSprite(200,200,150,150)
  ship.addAnimation("running",ship_running)
  ship.scale = 0.2


}

function draw() {
  background(seaImg);

  if (sea.x < 0) {
    sea.x = sea.width/2
  }

  drawSprites();
}