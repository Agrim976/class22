 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 var MyEngine,MyWorld;
 var ground;
 var ball;

function setup() {
  createCanvas(400,400);
  MyEngine = Engine.create();
  MyWorld = MyEngine.world;

  var ground_options = {
    isStatic:true
  }

  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(MyWorld,ground);
  console.log(ground);

  var ball_options = {
    restitution:1.0
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(MyWorld,ball);

  
}

function draw() {
  background(0);  
  Engine.update(MyEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}