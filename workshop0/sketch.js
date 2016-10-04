var x1,y1,x2,y2,x3,y3,x4,y4;

var img1,img2,img3,img4;

var w = window.innerWidth;
var h = window.innerHeight;


function preload() {
  img1 = loadImage("img/workshop0_blob.png");
  img2 = loadImage("img/workshop0_eyenosemouse.png");
  img3 = loadImage("img/workshop0_ssh.png");
  img4 = loadImage("img/workshop0_wekinator.png");
}

function setup() {

  createCanvas(w, h);
  x1 = w/2;
  y1 = h/2;
  x2 = w/2;
  y2 = h/2;
  x3 = w/2;
  y3 = h/2;
  x4 = w/2;
  y4 = h/2;

  frameRate(10);
}

function draw() {

	background('rgba(255,255,255, 0.1)');
	strokeWeight(10);
	stroke('rgba(0,0,0,1)');

	//stroke('rgba(0,255,0,0.25)');

	var doing = randomLine(x1,y1);

	x1 = doing[0];
	y1 = doing[1];

	imageMode(CENTER);
	image(img1, x1,y1, 70, 70);

	//stroke('rgba(0,0,255,0.25)');

	doing = randomLine(x2,y2);

	x2 = doing[0];
	y2 = doing[1];

	image(img2, x2,y2, 70, 70);

	//stroke('rgba(255,0,0,0.25)');

	doing = randomLine(x3,y3);

	x3 = doing[0];
	y3 = doing[1];

	image(img3, x3,y3, 70, 70);

	//stroke('rgba(0,0,0,0.25)');

	doing = randomLine(x4,y4);

	x4 = doing[0];
	y4 = doing[1];

	image(img4, x4,y4, 70, 70);

  // 웹캠을 캔버스에 그립니다. 
  /*var ranX = random(-15,15);
  var ranY = random(-15,15);

  var goalX = x+ranX;
  var goalY = y+ranY;

  if (goalX<0){
  	goalX = 0;
  }else if(goalX >w){
  	goalX = w;
  }
  if (goalY<0){
  	goalY = 0;
  }else if(goalY >h){
  	goalY = h;
  }
  line(x,y,goalX,goalY);

  x = goalX;
  y = goalY;*/

  /*imageMode(CORNER);
  image(capture, 0, 0, w, h);

  // 인식된 얼굴의 각 부분 좌표값을 positions에 저장합니다. 
  var positions = tracker.getCurrentPosition();

  imageMode(CENTER);
  if(positions.length>0){
    image(img3, positions[57][0], positions[57][1], 70, 70);

  }*/

}

function randomLine(a,b){

	var ranX = random(-15,15);
	var ranY = random(-15,15);

	var goalX = a+ranX;
	var goalY = b+ranY;

	if (goalX<35){
		goalX = 35;
	}else if(goalX >w-35){
		goalX = w-35;
	}
	if (goalY<35){
		goalY = 35;
	}else if(goalY >h-35){
		goalY = h-35;
	}

	//stroke('rgba(0,255,0,1)');
	//line(a,b,goalX,goalY);
	/*stroke('rgba(0,0,255,1)');
	line(a-1,b-1,goalX-1,goalY-1);
	stroke('rgba(255,0,0,1)');
	line(a-2,b-2,goalX-2,goalY-2);
	stroke('rgba(0,0,0,0.25)');
	line(a-3,b-3,goalX-3,goalY-3);*/

	return [goalX,goalY];

	/*a = goalX;
	b = goalY;*/
}
