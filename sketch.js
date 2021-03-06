const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine,world;
var gameState="onSling";

function setup() {
  createCanvas(800,800);
 
  engine = Engine.create();
	world = engine.world;

  stand1=new Stand(680,500,200,20)
  stand2=new Stand(350,550,200,20)
 polygon1=new Polygon(100,550,20,20)
 box1=new Box(625,475,25,40)
 box2=new Box(600,305,25,40)
 box3=new Box(650,435,25,40)
 box4=new Box(676,415,25,40)
 box5=new Box(700,375,25,40)
 box6=new Box(600,455,25,40)
 box7=new Box(625,455,25,40)
 box8=new Box(650,375,25,40)
 box9=new Box(676,435,25,40)
 box10=new Box(650,455,25,40)
 box11=new Box(350,455,25,40)
 box12=new Box(350,415,25,40)
 box13=new Box(380,455,25,40)
 box14=new Box(290,455,25,40)
box15=new Box(290,415,25,40)
box16=new Box(380,415,25,40)
box17=new Box(380,455,25,40)
box18=new Box(299,438,25,40)
box19=new Box(295,405,25,40)
box20=new Box(330,499,25,40)


 rope1 = new Rope(polygon1.body,{x:100, y:500});
ground1=new Ground(width/2,670,width,20)
Engine.run(engine);

 
}

function draw() {
 
  background(0);  
  
  
  
 
 drawSprites();
ground1.display();
stand1.display();
stand2.display();
polygon1.display();
rope1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
}


function mouseDragged(){
  //  if (gameState!=="launched"){
        Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){

rope1.fly();





}

function keyPressed(){
  if(keyCode === 32){
     
      Matter.Body.setPosition(polygon1.body, {x: 200 , y:50 });
      rope1.attach(polygon1.body);

  }}
