var dogSprite;
var dogImg;
var database;
var FC = 0;
function preload() {
  dogImg = loadImage("aaaa.png");
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  // console.log(database)
  dogSprite = createSprite(400, 350);
  dogSprite.addImage(dogImg);
  var ref = database.ref("Food");
  ref.on("value", function (data) {
    FC = data.val();
    console.log(FC);
    console.log("hi");
  });
  //console.log(FC);
}

function draw() {
  background("green");
  textSize(20);
  stroke("black");
  text("Remaining Food : " + FC, 100, 350);
  if (keyDown(DOWN_ARROW)) {
    if(FC <= 0){
FC = 0
    }
    database.ref("/").update({
      Food: FC - 1,
    });
  }

  drawSprites();
}
