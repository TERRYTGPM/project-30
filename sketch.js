const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2 ;
var world,	engine;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15;
var yup, thing;

function setup(){

  createCanvas(800, 400);

  engine = Engine.create();
	world = engine.world;

  ground1 = new Ground(400, 390, 800, 10);
  ground2 = new Ground(350 + 100+ 100, 300, 300, 20);

  block1 = new Block(380+ 100+ 100, 280);
  block2 = new Block(400+ 100+ 100, 280);
  block3 = new Block(260+ 100+ 100, 280);
  block4 = new Block(280+ 100+ 100, 280);
  block5 = new Block(300+ 100+ 100, 280);
  block6 = new Block(320+ 100+ 100, 280);
  block7 = new Block(340+ 100+ 100, 280);
  block8 = new Block(360+ 100+ 100, 280);
  block9 = new Block(320+ 100+ 100, 260);
  block10 = new Block(340+ 100+ 100, 260);
  block11 = new Block(360+ 100+ 100, 260);
  block12 = new Block(300+ 100+ 100, 260);
  block13 = new Block(340+ 100+ 100, 240);
  block14 = new Block(320+ 100+ 100, 240);
  block15 = new Block(330+ 100+ 100, 220);

  yup = new Polygon(150, 150, 40);

  thing = new Slingshot(yup.body, {x: 150, y: 250});

  Engine.run(engine);

}

function draw() {
  background(100);  
  drawSprites();
  
  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  yup.display();
  thing.display();
}

function mouseDragged(){

	Matter.Body.setPosition(yup.body, {x:mouseX, y:mouseY});

}

function mouseReleased(){

	thing.fly();

}

function keyPressed(){

	if(keyCode === 32){

	  Matter.Body.setPosition(yup.body, {x: 150,y: 150});
	  thing.attach(yup.body);

	}

}