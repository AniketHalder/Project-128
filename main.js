song1 = "";
song2= "";
LeftWristX = 0;
LeftWristY = 0;
RightWristX = 0;
RightWristY = 0;

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");

}


function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized")
}

function draw(){
    image(video, 0, 0, 600, 500)
}

function gotPoses(results){
    if(results.lenth>0){
        console.log(results);
        LeftWristX = results[0].pose.LeftWrist.x;
        LeftWristY = results[0].pose.LeftWrist.y;
        console.log("LeftWristX = "+ LeftWristX+" LeftWristY = " + LeftWristY);

        RightWristX = results[0].pose.RightWrist.x;
        RightWristY = results[0].pose.RightWrist.y;
        console.log("RIghtWristX = "+ RIghtWristX+" RIghtWristY = " + RIghtWristY);
    }
}