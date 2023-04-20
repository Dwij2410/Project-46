var bgimg
var Ash
var AshImg 

function preload(){
  bgimg = loadImage("2Ct5.gif")
  AshImg = loadAnimation("Ash.gif")
}
function setup(){
  createCanvas(900,400) 
  
  Ash = createSprite(50, 160, 20, 50);
  Ash.addAnimation("running", AshImg)
}
function draw(){ 
 background(bgimg) 
 drawSprites()
 text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
}