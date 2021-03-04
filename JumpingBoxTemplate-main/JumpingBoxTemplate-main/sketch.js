var canvas;
var music;
var object1,object2,object3,object4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    object1=createSprite(150,590,200,20);
    object1.shapeColor="red";

    object2=createSprite(650,590,200,20);
    object2.shapeColor="green";

    object3=createSprite(400,10,200,20);
    object3.shapeColor="yellow";

    object4=createSprite(400,590,200,20);
    object4.shapeColor="blue";

    ball=createSprite(random(100,400),50,30,30);
    ball.shapeColor="white";
    ball.velocityY=5;
    ball.velocityX=5;

}

function draw() {
    background(rgb(169,169,169));

    edges= createEdgeSprites();
    ball.bounceOff(edges);

    if(isTouching(object1,ball)){
        ball.shapeColor="red";
        ball.velocityY=-5;
        music.play();
    }

    if(isTouching(object2,ball)){
        ball.shapeColor="green";
        ball.velocityY=-5;
        music.play();
    }

    if(isTouching(object3,ball)){
        ball.shapeColor="yellow";
        ball.velocityY=0;
        ball.velocityX=0;
        music.stop();
    }

    if(isTouching(object4,ball)){
        ball.shapeColor="blue";
        ball.velocityY=-5;
        music.play();
    }

    drawSprites();
}
