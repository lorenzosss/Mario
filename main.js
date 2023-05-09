function preload() {
	world_start = loadSound("world_start.wav");
	SouDie = loadSound("mariodie.wav");
	SouKick = loadSound("kick.wav");
	SouJump = loadSound("jump.wav");
	SouGameOver = loadSound("gameover.wav");
	SouCoin = loadSound("coin.wav");
	setSprites();
	MarioAnimation();
}

function Voltar(){

	window.location="index.html"
	
	}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("local_do_canvas")
	
	camera = createCapture(VIDEO)
	camera.parent("local_da_camera")
	camera.size(800,400)

	poseNet = ml5.poseNet(camera,modelLoad)
	poseNet.on("pose", gotResults)

	instializeInSetup(mario);
	
}

function modelLoad(){

	console.log("legal")

}

function gotResults(result){

	

	if(result.length>0){

		noseX = result[0].pose.nose.x
		noseY = result[0].pose.nose.y

		console.log(noseX)

	}

}

function draw() {
	game()
}






