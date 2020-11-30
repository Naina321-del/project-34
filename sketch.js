var dog,happydogImg,dogImg;
var foodStock;
var database;
var FoodS;

function preload()
{
dogImg = loadImage("images/Dog.png");
dogHappyImg = loadImage("images/happydog.png"); 
}

function setup() {
	createCanvas(500,500);
 dog = createSprite(250,250,15,15);
  dog.addImage(dogImg);
  dog.scale=0.3;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappyImg);
}

textSize(20);
fill("white");
text("up arrow key is pressed to feed drago milk", 50,100);

  drawSprites();
}



function readStock(data){
  foodS = data.val();
  }

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food: x
  })
}