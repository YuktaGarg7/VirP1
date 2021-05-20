//Create variables here
var Dog, happyDog, database, foods, foodstock;
var DogImg, happyDogImg;


function preload(){
DogImg = loadImage("images/dogImg.png");
happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);


  Dog = createSprite(250,250,70,70);
  //Dog = new dog(250,250,70,70);
  Dog.addImage("img",DogImg);
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  database = firebase.database();
  foodStock.set(20);

}

function draw() {  
backGround("46,139,87");


if(KeyWentDown(UP_ARROW)){
  writeStock(foods);
  Dog.addImage(happyDogImg);
}
  drawSprites();

textSize(12);
fill("black");
text("Food (milk bottles): " + foodS, 100, 200);
  //add styles here


  readStock();
  writeStock();
}

function readStock(data){
  foods = data.val();

}



function writeStock(x){

if(x<=0){
  x = 0;
}else{
  x = x -1;
}

  database.ref('/').update({
  Food:x
  })
}


