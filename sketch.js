const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,height,400, 20);

    box1 = new Box(200,100,50,50);
    console.log(ground);

    box2 = new Box(230,300,50,80);
}

function draw(){
    background(0);
    Engine.update(engine);
    //rectMode(CENTER);
   // rect(ground.position.x,ground.position.y,400,20);

    box1.display();
    box2.display();
    ground.display();
}