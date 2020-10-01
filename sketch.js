var fixedRect,movingRect,ball1,ball2,ball3,ball4;

function setup(){
    
    createCanvas(1200,800);
    fixedRect=createSprite(300,300,50,90);
    movingRect=createSprite(900,300,90,50);
    fixedRect.shapeColor="green";
    movingRect.shapeColor="blue";
    fixedRect.debug=true;
    movingRect.debug=true;
    
 // ball1=createSprite(100,100,50,50);
 // ball1.shapeColor="green";
  //ball2=createSprite(200,100,50,50);
 // ball2.shapeColor="green";  
  //ball3=createSprite(300,100,50,50);  
  //ball3.shapeColor="green";
  //ball4=createSprite(400,100,50,50);  
  //ball4.shapeColor="green";
  movingRect.velocityX=-10;


}

function draw(){
    background(0,0,0);
      //  movingRect.y=World.mouseY

if(isTouching()){
  movingRect.shapeColor="red";
  
}
else{
  movingRect.shapeColor="blue";
}
    drawSprites();
    }
function isTouching(){
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    ){
return true;
  }
  else{
   return false;
  }
}