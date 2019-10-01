function setup() {
	createCanvas(800 , 400);
	background(100);
	let bW = 50;
	let gap = 10;
	let n_bricks = floor(width/(bW+gap));
		
	for (let j = 0; j < 3; j++) {
		for (let i = 0; i < n_bricks; i++) {
			rect(gap+(bW+gap)*i, gap+(gap+20)*j, bW, 20);
		}
	}
}

function draw() {
	
}
