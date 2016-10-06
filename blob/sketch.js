// The Nature of Code
// http://natureofcode.com

// Blob Example
// Example 5.13 adapted by Zach Lieberman

var physics;
var naheeBs =[];
var repeler;
var w = 1000;
var h = 640;

function NhBlob(r,coX,coY){
  this.particles = [];
  this.springs = [];

  for (var i = 0; i < 50; i++) {
    var x = r * Math.cos( Math.PI*2/50*i ) + coX;
    var y = r * Math.sin( Math.PI*2/50*i ) + coY;
    this.particles.push(new Particle(new Vec2D(x, y), 4, 80, -0.1));
    
  }

  this.attractor = new Particle(new Vec2D(coX, coY), r, r, 0.01);
  this.attractor.lock();

  for (var i = 0; i < 50; i++) {
    var spring1 = new VerletSpring2D(this.particles[i], this.particles[(i + 1) % this.particles.length], 2*Math.PI, 0.01);
    this.springs.push(spring1);
    physics.addSpring(spring1);
    if (i % 2 == 0) {
      var spring2 = new VerletSpring2D(this.particles[i], this.particles[(i + 25) % this.particles.length], r*2, 0.0001);
      this.springs.push(spring2);
      physics.addSpring(spring2);
    }
  if (i % 1 == 0) {
    var spring2 = new VerletSpring2D(this.particles[i], this.attractor, r, 0.001);
    this.springs.push(spring2);
    physics.addSpring(spring2);
  }

  }

}

NhBlob.prototype = {
  drawblob: function(s){

      beginShape();
      for (var i = 0; i < this.particles.length; i++) {
        //particles[i].display();
        vertex(this.particles[i].x, this.particles[i].y);

        this.particles[i].behavior.radius = 130 + 80 * sin(s + i / 30.0);
        this.particles[i].behavior.radiusSquared = this.particles[i].behavior.radius * this.particles[i].behavior.radius;
      }
      endShape(CLOSE);

  }
}

function setup() {
  createCanvas(w, h);

  // Initialize the physics
  physics = new VerletPhysics2D();
  physics.setDrag(0.03);

  repeler = new Particle(new Vec2D(mouseX, mouseY), 100, 50, -4);

  for (var i = 0; i <3; i++) {
    naheeBs.push(new NhBlob(50,w/2,h/2));
  };


}

function draw() {

  seconds = millis() / 1000;
  // Update the physics world
  physics.update();

  repeler.set(mouseX,mouseY);

  background(51);

  stroke(255);
  fill(255, 20);

  for (var i = 0; i <naheeBs.length; i++) {
    naheeBs[i].drawblob(seconds);
  };

}
