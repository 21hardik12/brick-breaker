function Brick(x, y, w, h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.show = function() {
		fill(random(100, 255), random(100, 255), random(100, 255));
		noStroke();
		rect(this.x, this.y, this.w, this.h, 10);
	}
}

class Bricks {
	constructor(n_rows, bW) {
		this.rows = n_rows;
		this.bW = bW;
		this.gap = 10;
		this.cols = floor(width/(this.gap+this.bW));		
		this.bH = 20;
		this.bricks = [];
		for (let i = 0; i < this.rows; i++) {
			this.bricks[i] = [];
			for (let j = 0; j < this.cols; j++) {
				this.bricks[i][j] = new Brick(this.gap*4+(this.bW+this.gap)*j, this.gap*2+(this.bH+this.gap)*i, this.bW, this.bH);
			}
		}
	}
	
	show() {
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				this.bricks[i][j].show();
			}
		}
	}
}
