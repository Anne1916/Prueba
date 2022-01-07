const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

let engine, world
let object

function preload() {
  
}

function setup() {
  createCanvas(600,600);
  engine = Engine.create()
  world = engine.world

  object = Bodies.rectangle(200,100,50,50)
  World.add(world, object)
  console.log(object.position.x)
  console.log(object.position.y)
  console.log(object)
}

function draw() {
  //background('#000');
  Engine.update(engine)
  rectMode(CENTER)
  //rect(200,200,50,50)  
  rect(object.position.x, object.position.y,50,50)
  drawSprites();
}

//extensiones de vs