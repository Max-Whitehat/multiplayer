var ball;
var database;



function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database=firebase.database();
    console.log(database)
    var positionref = database.ref('Ball/position/')
    positionref.on("value",readposition,showerror)
}

function draw(){

    background("white")
    if(keyDown(LEFT_ARROW)){
        wridposition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        wridposition(10,0);
    }
    else if(keyDown(UP_ARROW)){
        wridposition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
        wridposition(0,+10);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
var pos

function readposition(data){
    pos = data.val();
    ball.x=pos.x
    ball.y=pos.y
}


function showerror(){
    console.log("ERRRRRRROOOOOOORR")
}



function wridposition(x,y){
    var positionref = database.ref('Ball/position/')
    positionref.set({x:pos.x+x,y:pos.y+y})
}