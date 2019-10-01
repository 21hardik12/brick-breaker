function Pad() {
	this.w = 80;
	this.h = 25;
	this.x = width/2 - this.w/2;
	this.y = height - 30;
	this.xspeed = 10;
	
	this.show = function() {
		noStroke();
		fill(255);
		rect(this.x, this.y, this.w, this.h, 20);
	}
}
