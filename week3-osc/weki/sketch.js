var x, y;
var socket;
var isConnected;
var myAddress = '127.0.0.1';
var myPort = 12000;
var yourAddress = '127.0.0.1';
var yourPort = 3334;
var start_signal;

var deliveredM = "";

function setup() {
	createCanvas(displayWidth, displayHeight);
	setupOsc(myPort, yourPort);
	isConnected = false;
	start_signal = false;
}

function draw() {
	colorMode(RGB);
	background(255, 255, 255);
	textSize(24);

	if(isConnected && start_signal){
		fill(255,0,0);
		text("Now recoding", 20, 20);
		socket.emit('message', ['/signal', mouseX, mouseY]);
	}else{
		fill(0,0,255);
		text("Recording is stopped", 20, 20);
	}

	colorMode(HSB,100);
	fill(random()*100,100,100);
	textSize(120);
	text(deliveredM, displayWidth/2-100, displayHeight/2-100);
	
}

function keyPressed () {
	if (keyCode === RETURN) {
	    start_signal = !start_signal;
	    console.log("ENTER entered");
	}
}


function receiveOsc(address, value) {
	console.log("received OSC: " + address + ", " + value);

	switch(address){
		case '/wek/outputs1':
		deliveredM = 'M';
		break;
		case '/wek/outputs2':
		deliveredM = 'K';
		break;
		case '/wek/outputs3':
		deliveredM = 'O';
		break;
		default:
		deliveredM = '?';
		break;
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



