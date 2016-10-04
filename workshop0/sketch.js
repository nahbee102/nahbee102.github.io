var x,y;

var w = window.innerWidth;
var h = window.innerHeight;


function preload() {
  //img1 = loadImage("img/eye.png");
}

function setup() {

  createCanvas(w, h);
  x = -10;
  y = -10;
}

function draw() {

  // 웹캠을 캔버스에 그립니다. 
  var ranX = random(-10,10);
  var ranY = random(-10,10);


  line(x,y,x+ranX,y+ranY);

  x = x+ranX;
  y = y+ranY;

  /*imageMode(CORNER);
  image(capture, 0, 0, w, h);

  // 인식된 얼굴의 각 부분 좌표값을 positions에 저장합니다. 
  var positions = tracker.getCurrentPosition();

  imageMode(CENTER);
  if(positions.length>0){
    image(img3, positions[57][0], positions[57][1], 70, 70);

  }*/




}
