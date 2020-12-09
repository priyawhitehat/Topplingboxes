const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;
var box1,box2,box3,box4;
var ground;
var ball1;

function setup()
{
    createCanvas(400,400);
    myengine=Engine.create();
    myworld=myengine.world;
    box1=new Box(200,200,50,50);
    box2=new Box(200,300,50,50);
    box3=new Box(200,100,50,50);
    box4=new Box(200,150,50,50);
    ball1=new Ball(350,50);
    ground=new Ground(200,390,400,20);
}

function draw()
{
    Engine.update(myengine);
    background(0);
    fill("cyan");
    ball1.display();
    fill("green");
    box1.display();
    fill("blue");
    box2.display();
    fill("red");
    box3.display();
    fill("pink");
    box4.display();
    fill("brown");
    ground.display();
    noFill();
}