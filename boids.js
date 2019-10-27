function cosSim(v1, v2) {
   return p5.Vector.dot(v1, v2) / (v1.mag() * v2.mag());
}

class Bird {
   constructor(col, x, y, dir) {
      this.col = col;
      this.x = x;
      this.y = y;
      this.dir = dir;
      this.currDir = dir;
      this.speed = 3;
      this.noselength = 10;
      this.snl = this.noselength * 0.866;
      this.r = 50;
      this.fov = -0.5;
      this.desiredForward = createVector(Math.cos(this.dir), Math.sin(this.dir));
      this.currForward = createVector(Math.cos(this.dir), Math.sin(this.dir));
      this.avoidWeight = 0.29;
      this.conformWeight = 0.6;
      this.jostleWeight = 0.1;
      this.forwardWeight = 1.0 - this.avoidWeight - this.conformWeight - this.jostleWeight;
      this.turnRate = 0.1;
      this.avoidVector = createVector(0, 0);
      this.conformVector = createVector(0, 0);
      this.jostleVector = createVector(0, 0);
      this.edgeAvoidVector = createVector(0, 0);
   }

   getPoints() {
      // var p1x = this.x + this.noselength;
      // var p1y = this.y;
      // [noselength, 0]
      var C = this.currForward.x;
      var S = this.currForward.y;
      var p1x = this.noselength * C;
      var p1y = this.noselength * S;
      // var p2x = this.x - this.noselength/2;
      // var p2y = this.y - 0.866 * this.noselength;
      // [-noselength/2, -0.866*noselength]
      var p2x = (-this.noselength / 2) * C + this.snl * S;
      var p2y = (-this.noselength / 2) * S - this.snl * C;
      // var p3x = this.x - this.noselength/2;
      // var p3y = this.y + 0.866 * this.noselength;
      // [-noselength/2, 0.866*noselength]

      var p3x = 0;
      var p3y = 0;

      var p4x = (-this.noselength / 2) * C - this.snl * S;
      var p4y = (-this.noselength / 2) * S + this.snl * C;

      var res = [this.x + p1x, this.y + p1y, this.x + p2x / 2, this.y + p2y / 2, this.x + p3x, this.y + p3y, this.x + p4x / 2, this.y + p4y / 2];
      return res;
   }

   update() {
      var closeBirds = this.getCloseBirds();
      this.edgeAvoidVector = this.getEdgeAvoidVector();
      if (closeBirds.length != 0) {
         this.avoidVector = this.getAvoidVector(closeBirds);
         this.conformVector = this.getConformVector(closeBirds);
         this.jostleVector = this.getJostleVector(closeBirds);
      } else {
         this.avoidVector.x = 0;
         this.avoidVector.y = 0;
         this.conformVector.x = 0;
         this.conformVector.y = 0;
         this.jostleVector.x = 0;
         this.jostleVector.y = 0;
      }
      this.desiredForward.x = Math.cos(this.dir) * this.forwardWeight + this.avoidVector.x * this.avoidWeight + this.conformVector.x * this.conformWeight + this.jostleVector.x * this.jostleWeight + this.edgeAvoidVector.x;
      this.desiredForward.y = Math.sin(this.dir) * this.forwardWeight + this.avoidVector.y * this.avoidWeight + this.conformVector.y * this.conformWeight + this.jostleVector.y * this.jostleWeight + this.edgeAvoidVector.y;
      this.desiredForward.normalize();
      this.currForward.x += (this.desiredForward.x - this.currForward.x) * this.turnRate;
      this.currForward.y += (this.desiredForward.y - this.currForward.y) * this.turnRate;
      this.currForward.normalize();
      this.x += this.speed * this.currForward.x;
      this.y += this.speed * this.currForward.y;
      this.x = (this.x + w) % w;
      this.y = (this.y + h) % h;
   }

   getEdgeAvoidVector() {
      // var res = createVector(0,0);
      // if(this.x<this.r){
      //    res.add(createVector((this.x)*3, 0));
      // }else if(this.x>w-this.r){
      //    res.add(createVector((this.x-w)*3, 0));
      // }
      // if(this.y<this.r){
      //    res.add(createVector(0, (this.y)*3));
      // }else if(this.y>h-this.r){
      //    res.add(createVector(0, (this.y-h)*3));
      // }
      // return res;
      var res = createVector(0, 0);
      res.x = ((w / 2) - this.x) / (w / 2);
      res.y = ((h / 2) - this.y) / (h / 2);
      res.x = Math.pow(res.x, 5);
      res.y = Math.pow(res.y, 5);
      if (res.mag() != 0) {
         // res.normalize();
         res.mult(5);
      }
      return res;
   }

   getAvoidVector(closeBirds) {
      var res = createVector(0, 0);
      for (var i = 0; i < closeBirds.length; ++i) {
         var dx = this.x - closeBirds[i].x;
         var dy = this.y - closeBirds[i].y;
         // var weight = (this.r-Math.sqrt(dx*dx+dy*dy))/(this.r*this.r);
         // var diff = createVector(dx, dy);
         // res.add(p5.Vector.mult(diff, weight));
         res.add(createVector(dx, dy));
      }

      if (res.mag() != 0) {
         res.normalize();
      }
      return res;
   }

   getConformVector(closeBirds) {
      var res = createVector(0, 0);
      for (var i = 0; i < closeBirds.length; ++i) {
         res.add(closeBirds[i].forward);
      }
      if (res.mag() != 0) {
         res.normalize();
      }
      return res;
   }

   getJostleVector(closeBirds) {
      var res = createVector(0, 0);
      for (var i = 0; i < closeBirds.length; ++i) {
         res.add(createVector(closeBirds[i].x, closeBirds[i].y));
      }
      res.mult(1 / closeBirds.length);
      res.sub(createVector(this.x, this.y));
      res.mult(-1);
      res.normalize();
      return res;
   }

   getCloseBirds() {
      var res = [];
      for (var i = 0; i < birds.length; ++i) {
         var d = this.dist2BirdSq(birds[i]);
         if (d < this.r * this.r && d != 0 && cosSim(this.currForward, createVector(birds[i].x - this.x, birds[i].y - this.y)) > this.fov) {
            res.push({
               x: birds[i].x,
               y: birds[i].y,
               forward: birds[i].currForward
            });
         }
      }
      return res;
   }

   dist2BirdSq(otherBird) {
      return (otherBird.x - this.x) * (otherBird.x - this.x) + (otherBird.y - this.y) * (otherBird.y - this.y);
   }
}

var cnv;

var birds = [];
var numBirds = 100;
var gray;

var w, h;

function setup() {
   w = window.innerWidth;
   if(w>625){
      w -= 50;
   }else{
      w *= 0.9;
      numBirds = 30;
   }
   // w = window.innerWidth - 50;
   h = window.innerHeight;
   cnv = createCanvas(w, h);
   cnv.parent("home-wrapper");
   cnv.position(50, 0);
   cnv.id("p5Canvas");
   noStroke();
   for (var i = 0; i < numBirds; ++i) {
      var bird = new Bird(color(36, 251, 202), Math.round(Math.random() * w), Math.round(Math.random() * h), Math.random() * 3.1415);
      birds.push(bird);
   }
}

function draw() {
   clear();
   for (var i = 0; i < birds.length; ++i) {
      birds[i].update();
   }
   for (var i = 0; i < birds.length; ++i) {
      var p = birds[i].getPoints();
      // fill(gray);
      // ellipse(birds[i].x, birds[i].y, birds[i].r);
      fill(birds[i].col);
      quad(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7]);
      // line(birds[i].x, birds[i].y, birds[i].x+birds[i].desiredForward.x*20, birds[i].y+birds[i].desiredForward.y*20);
   }
}

function windowResized() {
   w = window.innerWidth;
   h = window.innerHeight;
   resizeCanvas(w, h);
}
