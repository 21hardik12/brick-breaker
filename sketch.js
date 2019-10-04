let bricks;
let paddle;
let ball;

function setup() {
	createCanvas(800 , 400);
	rectMode(CENTER);
	bricks = new Bricks(3, 50);
	paddle = new Paddle();
	ball = new Ball(width/2, height/2);
}


function draw() {	
	background(100);
	bricks.show();
	
	// Updating the Pad
	if (keyIsDown(RIGHT_ARROW)) {
		paddle.x += paddle.xspeed;
	} else if (keyIsDown(LEFT_ARROW)) {
		paddle.x -= paddle.xspeed;
	}
	paddle.x = constrain(paddle.x, paddle.w/2, width-paddle.w/2);	
	
	paddle.show();
	ball.show();
	ball.update(paddle);
}
