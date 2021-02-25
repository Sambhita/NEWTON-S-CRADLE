
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var base;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base = new Roof(50, 50, 20, 20);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  //strokeWeight(4);
  

  base.display();

  drawSprites();
 
}



