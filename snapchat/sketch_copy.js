// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2
var capture;
var tracker;

var w = 640, h = 480;

var img1, img2, img3;

function preload(){
  img1 = loadImage("img/eye.png");
  img2 = loadImage("img/nose.png");
  img3 = loadImage("img/mouse.png");
}

function setup() {

  //웹캠을 불러옵니다.

  capture = createCapture(VIDEO);
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();

  tracker = new clm.tracker();
  tracker.init(pModel);
  tracker.start(capture.elt);
  
}

function draw() {

  imageMode(CORNER);

  image(capture, 0, 0, w, h);

  var positions = tracker.getCurrentPosition();

  imageMode(CENTER);

  if(positions.length >0){
    image(img1, positions[27],positions[27],70,70);
  }

}
