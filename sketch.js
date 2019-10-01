let bricks;
let pad;
let ball;

function setup() {
	createCanvas(800 , 400);
	bricks = new Bricks(3, 50);
	pad = new Pad();
	ball = new Ball(width/2, height/2);
}


function draw() {	
	background(100);
	bricks.show();
	
	// Updating the Pad
	if (keyIsDown(RIGHT_ARROW)) {
		pad.x += pad.xspeed;
	} else if (keyIsDown(LEFT_ARROW)) {
		pad.x -= pad.xspeed;
	}
	pad.x = constrain(pad.x, 0, width-pad.w);	
	
	pad.show();
	ball.show();
	ball.update(pad);
}
