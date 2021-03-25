const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var string1, string2, string3, string4, string5;
var roof;
var bobDiameter;

function preload(){}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  bobDiameter = 40;

  roof = new Roof(400, 200, 250, 20);
  bob1 = new Bob(300, 400, bobDiameter);
  //bob1.shapeColor = "#FF1694";
  bob2 = new Bob(350, 400, bobDiameter);
  bob3 = new Bob(400, 400, bobDiameter);
  bob4 = new Bob(450, 400, bobDiameter);
  bob5 = new Bob(500, 400, bobDiameter);

  string1 = new String(bob1.body, roof.body, -bobDiameter * 2.5, 0);
  string2 = new String(bob2.body, roof.body, -bobDiameter * 1.3, 0);
  string3 = new String(bob3.body, roof.body, -bobDiameter * 0.1, 0);
  string4 = new String(bob4.body, roof.body, -bobDiameter * -1.2, 0);
  string5 = new String(bob5.body, roof.body, -bobDiameter * -2.4, 0);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();
  //keyPressed();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body, bob1.body.position, {
      x: -1000,
      y: -45,
    });
  }
}
