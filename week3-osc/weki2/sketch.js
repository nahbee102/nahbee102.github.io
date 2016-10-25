
var w = 640, h = 480;

var x, y;
var socket;
var isConnected;
var myAddress = '127.0.0.1';
var myPort = 12000;
var yourAddress = '127.0.0.1';
var yourPort = 6448;

var deliveredM = "";


function setup() {

	createCanvas(w, h);

	
	setupOsc(myPort, yourPort);
	isConnected = false;

}

function draw() {

	if(isConnected){
		socket.emit('message', ['/wek/inputs', mouseX, mouseY]);
	}
  	

	colorMode(RGB);
	background(255, 0, 255);

	textSize(24);

	
	colorMode(HSB,100);

	/*noFill();
	stroke(0);
	beginShape();
	for (var i=0; i<positions.length; i++) {
	vertex(positions[i][0], positions[i][1]);
	}
	endShape();*/

	fill(0.1*100,0,100);
	textSize(80);
	text(deliveredM, w/2-200, h/2-50);
	
}


function receiveOsc(address, value) {

	if(value == '1'){
		deliveredM = '왼쪽?';
		console.log("1");
	}else if(value == '2'){
		deliveredM = '오른쪽?';
		console.log("2");
	}else if(value == '3'){
		deliveredM = '위?';
		console.log("3");
	}
	
}

function sendOsc(address, value) {
	socket.emit('message', [address, value]);
}

function setupOsc(oscPortIn, oscPortOut) {
	socket = io.connect('http://'+ myAddress, { port: 8081, rememberTransport: false });
	socket.on('connect', function() {
		socket.emit('config', {	
			server: { port: oscPortIn,  host: myAddress},
			client: { port: oscPortOut, host: yourAddress}
		});
	});
	socket.on('connect', function() {
		isConnected = true;
	});
	socket.on('message', function(msg) {
		if (msg[0] == '#bundle') {
			for (var i=2; i<msg.length; i++) {
				receiveOsc(msg[i][0], msg[i].splice(1));
			}
		} else {
			receiveOsc(msg[0], msg.splice(1));
		}
	});
}



