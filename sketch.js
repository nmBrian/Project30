const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, platform1, platform2, platform3;
function preload(){

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //ground
    
    ground = new Ground(600,590, 1200, 20);

    //platforms
    platform1 = new Ground(200, 300, 300, 20);
    platform2 = new Ground(1000, 320, 300, 20);
    platform3 = new Ground(300, 560, 400, 20);

    //polygon
    polygon1 = new polygon(590, 250, 40);
    sling = new SlingShot(polygon1.body , {x:590, y:250});

    //blocks
    //platform1
    blk1 = new block1(100, 270, 40, 50);
    blk2 = new block1(140, 270, 40, 50);
    blk3 = new block1(180, 270, 40, 50);
    blk4 = new block1(220, 270, 40, 50);
    blk5 = new block1(260, 270, 40, 50);
    blk6 = new block1(300, 270, 40, 50);
    blk7 = new block1(120, 220, 40, 50);
    blk8 = new block1(160, 220, 40, 50);
    blk9 = new block1(200, 220, 40, 50);
    blk10 = new block1(240, 220, 40, 50);
    blk11 = new block1(280, 220, 40, 50);
    blk12 = new block1(140, 170, 40, 50);
    blk13 = new block1(180, 170, 40, 50);
    blk14 = new block1(220, 170, 40, 50);
    blk15 = new block1(260, 170, 40, 50);
    blk16 = new block1(200, 130, 100, 30);

    //platform2
    blk01 = new block1(900, 290, 40, 50);
    blk02 = new block1(940, 290, 40, 50);
    blk03 = new block1(980, 290, 40, 50);
    blk04 = new block1(1020, 290, 40, 50);
    blk05 = new block1(1060, 290, 40, 50);
    blk06 = new block1(1100, 290, 40, 50);
    blk07 = new block1(920, 240, 40, 50);
    blk08 = new block1(960, 240, 40, 50);
    blk09 = new block1(1000, 240, 40, 50);
    blk010 = new block1(1040, 240, 40, 50);
    blk011 = new block1(1080, 240, 40, 50);
    blk012 = new block1(940, 190, 40, 50);
    blk013 = new block1(980, 190, 40, 50);
    blk014 = new block1(1020, 190, 40, 50);
    blk015 = new block1(1060, 190, 40, 50);
    blk016 = new block1(1000, 150, 100, 30);
    
    //platform3
    blk109 = new block1(200, 530, 80, 50);
    blk209 = new block1(240, 530, 40, 50);
    blk309 = new block1(280, 530, 40, 50);
    blk409 = new block1(320, 530, 40, 50);
    blk509 = new block1(360, 530, 40, 50);
    blk609 = new block1(400, 530, 80, 50);
    blk709 = new block1(220, 480, 80, 50);
    blk809 = new block1(260, 480, 40, 50);
    blk909 = new block1(300, 480, 40, 50);
    blk1009 = new block1(340, 480, 40, 50);
    blk1109 = new block1(380, 480, 80, 50);
    blk1209 = new block1(240, 435, 80, 50);
    blk1309 = new block1(280, 435, 40, 50);
    blk1409 = new block1(320, 435, 40, 50);
    blk1509 = new block1(360, 435, 80, 50);
    blk1609 = new block1(300, 380, 200, 30);

}

function draw(){
    background(179, 222, 193);
    Engine.update(engine);

    fill(88, 111, 107);
    ground.display();

    platform1.display();
    platform2.display();
    platform3.display();

    //polygon
    polygon1.display();

    //platform1 blocks
    
    //outerlayer_platform1
    fill(221, 213, 208);
    blk1.display();
    blk6.display();
    blk7.display();
    blk11.display();
    blk12.display();
    blk15.display();
    //middlelayer_platform1
    fill(207, 192, 189);
    blk2.display();
    blk5.display();
    blk8.display();
    blk10.display();
    blk13.display();
    blk14.display();
    //innerlayer_platform1
    fill(184, 184, 170);
    blk3.display();
    blk4.display();
    blk9.display();
    //top
    fill(127, 145, 131);
    blk16.display();

    //platform2
    //outerlayer_platform2
    fill(221, 213, 208);
    blk01.display();
    blk06.display();
    blk07.display();
    blk011.display();
    blk012.display();
    blk015.display();
    //middlelayer_platform2
    fill(207, 192, 189);
    blk02.display();
    blk05.display();
    blk08.display();
    blk010.display();
    blk013.display();
    blk014.display();
    //innerlayer_platform2
    fill(184, 184, 170);
    blk03.display();
    blk04.display();
    blk09.display();
    //top
    fill(127, 145, 131);
    blk016.display();

    //platform3
    //outerlayer_platform3
    fill(221, 213, 208);
    blk109.display();
    blk609.display();
    blk709.display();
    blk1109.display();
    blk1209.display();
    blk1509.display();
    //middlelayer_platform3
    fill(207, 192, 189);
    blk209.display();
    blk509.display();
    blk809.display();
    blk1009.display();
    blk1309.display();
    blk1409.display();
    //innerlayer_platform3
    fill(184, 184, 170);
    blk309.display();
    blk409.display();
    blk909.display();
    //top
    fill(127, 145, 131);
    blk1609.display();

    
    //slingshot
    sling.display();
    
    strokeWeight(5);
    fill("26, 31, 22");
    textSize(22);
    text("DRAG the Polygon and and RELEASE it towards the blocks. Press space to retry. ",150,30);
    fill("26, 31, 22");
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

//keypressed function to attach stone back to constraint
function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(polygon1.body,{x:590,y:250});
    sling.attacher(polygon1.body);
  }
}