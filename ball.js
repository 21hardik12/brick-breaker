function Ball(x, y) {	
	this.x = x;
	this.y = y;
	this.xspeed = 3;
	this.yspeed = 3;
	this.r = 10;
		
		
	this.update = function(pad) {	
		if ((this.x+this.r > pad.x) && (this.y+this.r > pad.y) && (this.y-this.r < pad.y+pad.w)) {
			this.yspeed *= -1;				
		}				
			
		if (this.y-this.r < 0 && this.yspeed < 0) {
			this.yspeed *= -1;
		}
		if (this.x-this.r < 0 && this.xspeed < 0) {
			this.xspeed *= -1;
		}
		if (this.y+this.r > height && this.yspeed > 0) {
			this.yspeed *= -1;
		}
		if (this.x+this.r > width && this.xspeed > 0) {
			this.xspeed *= -1;
		}
		
		this.x += this.xspeed;
		this.y += this.yspeed;
	}
		
	this.show = function() {
		fill(255, 0, 100);
		noStroke();
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}
}