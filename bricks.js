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
	cosntructor(n_rows, n_cols) {
		this.n_rows = n_rows;
		this.n_cols = n_cols;
		this.bricks = new Array(n_rows);
		
		this.bWidth = width/this.n_cols;
		this.bHeight = height/this.n_rows;
		for (let i = 0; i < this.n_rows; i++) {
			this.bricks[i] = new Array(n_cols);
			for (let j = 0; j < this.n_cols; j++) {
				this.bricks[i][j] = new Brick(this.bWidth*j + 2, this.bHeight*i+2, this.bWidth, this.bHeight);
			}
		}
	}
	
	show() {
		for (let i = 0; i < this.n_rows; i++) {
			for (let j = 0; j < this.n_cols; j++) {
				this.bricks[i][j].show();
			}
		}
	}
}
