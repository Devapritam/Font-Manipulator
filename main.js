noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

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
    fill("F90090");
    textSize(difference);
    text("Dog", noseX, noseY);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        document.getElementById("square_details").innerHTML = "Current font size of the text is " + difference + "px" + ".";
    }
}