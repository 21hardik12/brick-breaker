function Brick(x, y, w, h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.show = function() {
		fill(255);
		noStroke();
		rect(this.x, this.y, this.w, this.h);
	}
}

class Bricks {
	constructor(n_rows, bW) {
		this.rows = n_rows;
		this.bW = bW;
		this.gap_b_rows = 5;
		this.bH = 10;
	
		this.cols = floor(width/this.bW);
		
		this.bricks = [];
		for (let i = 0; i < this.rows; i++) {
			this.bricks[i] = [];
			for (let j = 0; j < this.cols; j++) {
				this.bricks[i][j] = new Brick((this.bW)*j, this.bH*i*this.gap_b_rows, this.bW - 2, this.bH);
			}
		}
	}
	
	show() {
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				fill(random(100, 255), random(100, 255), random(100, 255));
				this.bricks[i][j].show();
			}
		}
	}
}
