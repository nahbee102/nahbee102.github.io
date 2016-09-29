// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2
var capture;
var tracker;
var w = 640, h = 480;

function setup() {

  //웹캠을 불러옵니다.

  capture = createCapture(VIDEO);
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();
  
  colorMode(HSB);

  //얼굴인식을 위한 모델을 불러옵니다. 
  
  tracker = new clm.tracker();
  tracker.init(pModel);
  tracker.start(capture.elt);
}

function draw() {

  image(capture, 0, 0, w, h);

  // 인식된 얼굴의 각 부분 좌표값을 positions에 저장합니다. 
  var positions = tracker.getCurrentPosition();

}
