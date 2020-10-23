
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var blueSq,greenSq,greySq,pinkSq;
var polygon,base1,base2;
var sling,ground;

function preload()
{	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	// Launcher setup

	polygon = new Polygon(200,400,20);
	sling = new Sling(polygon.body,{x:210,y:400});
	
	base1 = new Base(600,530,250,15);
	base2 = new Base(920,330,200,15);
	
	
	// Main Level
	
	blueSq = new Blue(560,500,30,45);
	blueSq2 = new Blue(575,500,30,45);
	blueSq3 = new Blue(590,500,30,45);
	blueSq4 = new Blue(605,500,30,45);
	blueSq5 = new Blue(620,500,30,45);
	blueSq6 = new Blue(630,500,30,45);
	blueSq7 = new Blue(645,500,30,45);

	pinkSq = new Pink(575,470,30,45);
	pinkSq2 = new Pink(590,470,30,45);
	pinkSq3 = new Pink(605,470,30,45);
	pinkSq4 = new Pink(620,470,30,45);
	pinkSq5 = new Pink(635,470,30,45);

	greenSq = new Green(590,440,30,45);
	greenSq2 = new Green(605,440,30,45);
	greenSq3 = new Green(620,440,30,45);

	greySq = new Grey(605,410,30,45);

	ground = new Ground(width/2,height-10,width,40);

	//Scecondary Level

	blueSq8 = new Blue(890,300,30,45);
	blueSq9 = new Blue(905,300,30,45);
	blueSq10 = new Blue(920,300,30,45);
	blueSq11 = new Blue(935,300,30,45);
	blueSq12 = new Blue(950,300,30,45);

	greenSq4 = new Green(905,270,30,45);
	greenSq5 = new Green(920,270,30,45);
	greenSq6 = new Green(935,270,30,45);

	pinkSq6 = new Pink(920,240,30,45);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(55, 43, 43);
  textSize(18);
  fill(167, 161, 148);
  text("Drag the pentagonal stone and Release it, to launch it towards the blocks",300,50);
  ground.display();
  polygon.display();
  sling.display();
  base1.display();
  base2.display();
  blueSq.display();
  blueSq2.display();
  blueSq3.display();
  blueSq4.display();
  blueSq5.display();
  blueSq6.display();
  blueSq7.display();

  pinkSq.display();	
  pinkSq2.display();
  pinkSq3.display();
  pinkSq4.display();
  pinkSq5.display();

  greenSq.display();
  greenSq2.display();
  greenSq3.display();

  greySq.display();

  blueSq8.display();
  blueSq9.display();
  blueSq10.display();
  blueSq11.display();
  blueSq12.display();

  greenSq4.display();
  greenSq5.display();
  greenSq6.display();

  pinkSq6.display();
  
  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(polygon.body,{x:200,y:400});
		sling.attach(polygon.body);
	}
}



