
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var ball;


function setup() {
  createCanvas(1500, 1500);
  engine = Engine.create();
  world = engine.world;

  
  ground =new Ground(width/2, 670, width, 20);
  

  ball_options ={
    restitution: 0.1,
	density: 1.2,
	isStatic: false

    
  }

  ball = Bodies.circle(20, 20, 15, ball_options);
  World.add(world, ball);

  left = Bodies.rectangle(1000, 660, 20, 55);
  right = Bodies.rectangle(800, 660, 20, 55);
  World.add(world, left);
  World.add(world, right);
  
Engine.run(engine)


 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  
 

  ellipse(ball.position.x, ball.position.y, 15);
  rect(left.position.x, left.position.y, 20, 55)
  rect(right.position.x, right.position.y, 20, 55)
  Engine.update(engine);

  keyPressed()
}



function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x:80, y:-80}, {x:0, y: 0.01});
	}
	
}



