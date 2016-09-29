// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2
var capture;

var w = 640, h = 480;

function setup() {

  //웹캠을 불러옵니다.

  capture = createCapture(VIDEO);
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();
  
}

function draw() {

  image(capture, 0, 0, w, h);

}
