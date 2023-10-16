var bgImg;

function preload(){
bk=loadImage("assets/bg.avif")
z1=loadAnimation("assets/z1.png","assets/z2.png","assets/z3.png","assets/z4.png","assets/z5.png","assets/z6.png")
}

function setup(){
createCanvas(1360,600)
zombie=createSprite(400,450,20,20);
zombie.addAnimation("zombie",z1)
zombie.scale=0.3
}

function draw(){
    background(bk);
    drawSprites();
}