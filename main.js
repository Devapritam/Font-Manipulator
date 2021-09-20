function preload() {}

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 450);
    video.parent('videoDiv'); 

    canvas = createCanvas(550, 550);
    canvas.position(620, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    window.alert('Posenet Model has been initialized');
}

function draw() {
    background('#969A97');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}