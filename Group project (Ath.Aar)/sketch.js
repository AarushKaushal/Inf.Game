
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let noiseScale=0.009;

function preload()
{
	
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(47, 156, 149);

  for (let x=0; x < width; x++) {
	let noiseVal = noise((mouseX+x)*noiseScale, 6*noiseScale);
	stroke(0,255,0);
	line(x, (0+noiseVal*100)+200, x, height);
	stroke(100,0,0);
	line(x, (0+noiseVal*100)+220, x, height)
}
  
  drawSprites();
 
}



