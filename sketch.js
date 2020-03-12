const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot;

function preload(){
    backgroundImg = loadImage("sprites/bg.jpg");
}
function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1000,200,300,10);
    ground1 = new Ground(1000,550,300,10);
    ground2 = new Ground(650,580,1300,30);

    box  =  new  Box (1050,168,25,28);
    box1 = new Box(1040,195,25,25);
    box2 = new Box(1020,195,25,25);
    box3 = new Box(1050,195,25,25);
    box4 = new Box(1040,195,25,25);
    box5 = new Box(1020,195,25,25);
    box6 = new Box(990,195,25,25);
    box7 = new Box(988,195,25,25);
    box8 = new Box(970,195,25,25);
    box9 = new Box(960,168,25,25);
    box10 = new Box(1030,168,25,25);
    box11 = new Box(980,168,25,25);
    box12 = new Cbox(970,168,25,25);
    box13 = new Cbox(960,168,25,25);
    box14 = new Cbox(1060,168,25,25);
    box15 = new Cbox(1060,168,25,25);
    box16 = new Cbox(960,130,25,25);
    box17 = new Cbox(1060,130,25,25);
    box18 = new Cbox(1035,130,25,25);

    box19 =  new  Box (1050,518,25,25);
    box20 = new Box(1040,545,25,25);
    box21= new Box(1020,545,25,25);
    box22 = new Box(1050,545,25,25);
    box23 = new Box(1040,545,25,25);
    box24 = new Box(1020,545,25,25);
    box25 = new Box(990,545,25,25);
    box26= new Box(988,545,25,25);
    box27= new Box(970,545,25,25);
    box28= new Box(960,518,25,25);
    box29 = new Box(1030,518,25,25);
    box30 = new Box(980,518,25,25);
    box31 = new Cbox(970,518,25,25);
    box32 = new Cbox(960,518,25,25);
    box33 = new Cbox(1060,518,25,25);
    box34 = new Cbox(1060,518,25,25);
    box35 = new Cbox(960,480,25,25);
    box36 = new Cbox(1060,480,25,25);
    box37 = new Cbox(1035,480,25,25);
    hitter = new Hitter(285,380,50,50);
    sling = new SlingShot(hitter.body,{x:285,y:400});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    ground.display();
    ground1.display();
    ground2.display();

    box.display();
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
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    hitter.display();
    sling.display();
}
function mouseDragged(){
    Matter.Body.setPosition(hitter.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

