img = "";
rightwristX = 0;
rightwristY = 0;




function setup() {
  createCanvas(650, 400);
  canvas.parent('canvas');

  video = createCapture(VIDEO);
  video.size(600,300);
  
  
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotresult);
}

function modelLoaded()
{
  console.log("Model is Loaded!");
}

function gotresult(results)
{
  if(results.length > 0)
    {
      console.log(results);
      rightwristX = results[0].pose.rightWrist.x;
      rightwristY = results[0].pose.rightWrist.y;
    }
}




