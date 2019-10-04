function Ball(x, y) {	
	this.x = x;
	this.y = y;
	this.xspeed = 300;
	this.yspeed = 300;
	this.r = 10;
		
	this.intersect = function(paddle) {	
		let ballDistX = abs(ball.x - paddle.x);
		let ballDistY = abs(ball.y - paddle.y);		
		
		if (ballDistX > (paddle.w/2 + this.r)) {return false;}
		if (ballDistY > (paddle.h/2 + this.r)) {return false;}
		
		if (ballDistX <= (paddle.w/2)) {return true;}
		if (ballDistY <= (paddle.h/2)) {return true;}
		
		let cornerDist_sq = sq(ballDistX - paddle.w/2) + sq(ballDistY - paddle.h/2);
		
		return (cornerDist_sq <= sq(ball.r));
	}
		
		
	this.update = function(paddle) {			
		if ((this.x+this.r > paddle.x-paddle.w/2) && (this.x < paddle.x+paddle.w/2)) {
			if (this.intersect(paddle)) {
				this.yspeed *= -1;
			}
		} else if (this.y+this.r > paddle.y-paddle.h/2) {
			if ((this.x+this.r <= paddle.x-paddle.w/2) && (this.intersect(paddle))) {
				this.xspeed *= -1;
			} else if ((this.x+this.r >= paddle.x+paddle.w/2) && (this.intersect(paddle))) {
				this.xspeed *= -1;
			}
		}
	
		if ((this.x+this.r > width && this.xspeed > 0) || (this.x-this.r < 0 && this.xspeed < 0)) {
			this.xspeed *= -1;
		}
		
		if ((this.y+this.r > height && this.yspeed > 0) || (this.y-this.r < 0 && this.yspeed < 0)) {
			this.yspeed *= -1;
		}
		
		this.x += this.xspeed * deltaTime/1000;
		this.y += this.yspeed * deltaTime/1000;
	}
		
	this.show = function() {
		fill(255, 0, 100);
		noStroke();
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}
}
