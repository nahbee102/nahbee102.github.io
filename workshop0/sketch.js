var x1,y1,x2,y2,x3,y3,x4,y4;

var img1,img2,img3,img4;

var isOver1,isOver2,isOver3,isOver4;

var w = window.innerWidth;
var h = window.innerHeight;


function preload() {
  img1 = loadImage("img/workshop0_blob.png");
  img2 = loadImage("img/workshop0_eyenosemouse.png");
  img3 = loadImage("img/workshop0_ssh.png");
  img4 = loadImage("img/workshop0_wekinator.png");
  img5 = loadImage("img/workshop0_maintext.png");
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

	imageMode(CENTER);

	if(w>h){
		image(img5,w/2,h/2,443,82.75);
	}
	else{
		image(img5,w/2,h/2,221.5,41.375);
	}
	//image(img5,w/2,h/2,1772,331);
	
	var doing = randomLine(x2,y2);

	x2 = doing[0];
	y2 = doing[1];

	isOver2 = clicked(x2,y2);

	image(img2, x2,y2, 70, 70);

	//stroke('rgba(255,0,0,0.25)');

	doing = randomLine(x1,y1);

	x1 = doing[0];
	y1 = doing[1];

	isOver1 = clicked(x1,y1);

	image(img1, x1,y1, 70, 70);

	//stroke('rgba(0,0,255,0.25)');
	doing = randomLine(x3,y3);

	x3 = doing[0];
	y3 = doing[1];

	isOver3 = clicked(x3,y3);

	image(img3, x3,y3, 70, 70);

	//stroke('rgba(0,0,0,0.25)');

	doing = randomLine(x4,y4);

	x4 = doing[0];
	y4 = doing[1];

	isOver4 = clicked(x4,y4);

	image(img4, x4,y4, 70, 70);

	if(isOver4 || isOver2 || isOver1 || isOver3)
	{
		cursor(HAND);
	} else {
		cursor(ARROW);
	}

}

function mousePressed()
{
  if(isOver1 == true)
  {
        		ellipseMode(CENTER);
  stroke(0);
  strokeWeight(5);
    
  ellipse(x1, y1, 70, 70);
    link("http://p5js.org");
  }
  if(isOver2 == true){
  	    		ellipseMode(CENTER);
  stroke(0);
  strokeWeight(5);
    
  ellipse(x2, y2, 70, 70);
	link("https://soundcloud.com/stream");
  }
  if(isOver3 == true){
  	    		ellipseMode(CENTER);
  stroke(0);
  strokeWeight(5);
    
  ellipse(x3, y3, 70, 70);
  	link("https://www.youtube.com/watch?v=siHQVEStDlg");
  }
  if(isOver4 == true){
  	    		ellipseMode(CENTER);
  stroke(0);
  strokeWeight(5);
    
  ellipse(x4, y4, 70, 70);
  	link("http://coursescript.com/notes/interactivecomputing/interactivity/");
  }
}

function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
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

	return [goalX,goalY];
}

function clicked(a,b){

	var tf;

	var distance = dist(mouseX, mouseY, a, b); 

	if(distance < 70)
	{
		tf = true;
		//cursor(HAND);
	} else {
		tf = false;
		//cursor(ARROW);
	}

	return tf;
}
