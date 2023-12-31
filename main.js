function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on ('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300)
}

classifier = ml5.imageclassifier("https://teachablemachine.withgoogle.com/models/Al51E8STG/model.json",modelLoaded);