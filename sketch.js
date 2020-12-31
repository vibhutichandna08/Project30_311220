const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(200, 300, 60, 60);

    //Middle Shelf
    box1 = new Block(525, 275, 25, 25);
    box2 = new Block(550, 275, 25, 25);
    box3 = new Block(575, 275, 25, 25);
    box4 = new Block(600, 275, 25, 25);
    box5 = new Block(625, 275, 25, 25);
    box6 = new Block(650, 275, 25, 25);
    box7 = new Block(675, 275, 25, 25);
    box8 = new Block(537, 250, 25, 25);
    box9 = new Block(562, 250, 25, 25);
    box10 = new Block(587, 250, 25, 25);
    box11 = new Block(612, 250, 25, 25);
    box12 = new Block(637, 250, 25, 25);
    box13 = new Block(662, 250, 25, 25);
    box14 = new Block(549, 225, 25, 25);
    box15 = new Block(574, 225, 25, 25);
    box16 = new Block(599, 225, 25, 25);
    box17 = new Block(624, 225, 25, 25);
    box18 = new Block(649, 225, 25, 25);
    box19 = new Block(561, 200, 25, 25);
    box20 = new Block(586, 200, 25, 25);
    box21 = new Block(611, 200, 25, 25);
    box22 = new Block(636, 200, 25, 25);
    box23 = new Block(573, 175, 25, 25);
    box24 = new Block(598, 175, 25, 25);
    box25 = new Block(623, 175, 25, 25);
    box26 = new Block(585, 150, 25, 25);
    box27 = new Block(610, 150, 25, 25);
    box28 = new Block(597, 120, 25, 25);

    //Top Shelf 
    cube1 = new Block(825, 175, 25, 25);
    cube2 = new Block(850, 175, 25, 25);
    cube3 = new Block(875, 175, 25, 25);
    cube4 = new Block(900, 175, 25, 25);
    cube5 = new Block(925, 175, 25, 25);
    cube6 = new Block(950, 175, 25, 25);
    cube7 = new Block(975, 175, 25, 25);
    cube8 = new Block(837, 150, 25, 25);
    cube9 = new Block(862, 150, 25, 25);
    cube10 = new Block(887, 150, 25, 25);
    cube11 = new Block(912, 150, 25, 25);
    cube12 = new Block(937, 150, 25, 25);
    cube13 = new Block(962, 150, 25, 25);
    cube14 = new Block(849, 125, 25, 25);
    cube15 = new Block(874, 125, 25, 25);
    cube16 = new Block(899, 125, 25, 25);
    cube17 = new Block(924, 125, 25, 25);
    cube18 = new Block(949, 125, 25, 25);
    cube19 = new Block(861, 100, 25, 25);
    cube20 = new Block(886, 100, 25, 25);
    cube21 = new Block(911, 100, 25, 25);
    cube22 = new Block(936, 100, 25, 25);
    cube23 = new Block(873, 75, 25, 25);
    cube24 = new Block(898, 75, 25, 25);
    cube25 = new Block(923, 75, 25, 25);
    cube26 = new Block(885, 50, 25, 25);
    cube27 = new Block(910, 50, 25, 25);
    cube28 = new Block(897, 20, 25, 25);

    //Bottom Shelf
    block1 = new Block(825, 475, 25, 25);
    block2 = new Block(850, 475, 25, 25);
    block3 = new Block(875, 475, 25, 25);
    block4 = new Block(900, 475, 25, 25);
    block5 = new Block(925, 475, 25, 25);
    block6 = new Block(950, 475, 25, 25);
    block7 = new Block(975, 475, 25, 25);
    block8 = new Block(837, 450, 25, 25);
    block9 = new Block(862, 450, 25, 25);
    block10 = new Block(887, 450, 25, 25);
    block11 = new Block(912, 450, 25, 25);
    block12 = new Block(937, 450, 25, 25);
    block13 = new Block(962, 450, 25, 25);
    block14 = new Block(849, 425, 25, 25);
    block15 = new Block(874, 425, 25, 25);
    block16 = new Block(899, 425, 25, 25);
    block17 = new Block(924, 425, 25, 25);
    block18 = new Block(949, 425, 25, 25);
    block19 = new Block(861, 400, 25, 25);
    block20 = new Block(886, 400, 25, 25);
    block21 = new Block(911, 400, 25, 25);
    block22 = new Block(936, 400, 25, 25);
    block23 = new Block(873, 375, 25, 25);
    block24 = new Block(898, 375, 25, 25);
    block25 = new Block(923, 375, 25, 25);
    block26 = new Block(885, 350, 25, 25);
    block27 = new Block(910, 350, 25, 25);
    block28 = new Block(897, 320, 25, 25);

    shelf1 = new Ground(900, 500, width / 6, 25);
    shelf2 = new Ground(900, 200, width / 6, 25);
    shelf3 = new Ground(600, 300, width / 6, 25);

    bottomGround = new Ground(width / 2, 590, width + 10, 25);
    topGround = new Ground(width / 2, 0, width + 10, 25);
    wallR = new Ground(1190, height / 2, 25, height + 10);
    wallL = new Ground(10, height / 2, 25, height + 10);

    slingshot = new Slingshot(polygon.body, {x: 200, y: 300});
}



function draw(){
    background("aqua");
    Engine.update(engine);

    //Middle Shelf
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

    //Top Shelf 
    cube1.display();
    cube2.display();
    cube3.display();
    cube4.display();
    cube5.display();
    cube6.display();
    cube7.display();
    cube8.display();
    cube9.display();
    cube10.display();
    cube11.display();
    cube12.display();
    cube13.display();
    cube14.display();
    cube15.display();
    cube16.display();
    cube17.display();
    cube18.display();
    cube19.display();
    cube20.display();
    cube21.display();
    cube22.display();
    cube23.display();
    cube24.display();
    cube25.display();
    cube26.display();
    cube27.display();
    cube28.display();

    //Bottom Shelf 
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
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();

    shelf1.display();
    shelf2.display();
    shelf3.display();

    bottomGround.display();
    topGround.display();
    wallR.display();
    wallL.display();

    polygon.display();
    slingshot.display();

    textSize(18);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 200, 50);
    text("Press space to get another chance to shoot", 300, 80)
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}
