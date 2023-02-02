nose_x=0;
nose_y=0;
function preload(){
nose=loadImage("d.png");
}
function setup(){
canvas=createCanvas(400,400)
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("Model has been Initialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
    }
}
function draw(){
 image(video, 0, 0, 400,400);
    image(nose, nose_x-50, nose_y-25, 100, 100);
}
function take_snapshot(){
save("FilterImage.png");
}