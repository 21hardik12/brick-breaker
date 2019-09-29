let bricks;

function setup() {
	createCanvas(400, 400);
	bricks = new Bricks(3, 6);
	print(bricks.n_rows);
}

function draw() {
	background(0);
	bricks.show();
}
