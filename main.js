right_eyeX = 0;
right_eyeY = 0;

left_eyeX = 0;
left_eyeY = 0;

function preload() {
    manifest = loadImage('https://i.postimg.cc/5017KQS1/insolence-Eye.png')
    destiny = loadImage('https://i.postimg.cc/XJHPZ79b/redeye.webp')
}

function setup() {
    canvas = createCanvas(350, 300)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses)
}

function draw() {
    image(video, 0, 0, 350, 300);
    image(manifest, right_eyeX, right_eyeY, 30, 30)
    image(destiny, left_eyeX, left_eyeY, 30, 30)
}

function take_snapshot() {
    save('WHTCB.png')
}

function modelLoaded() {
    console.log("modelLoaded")
}

function getPoses(results) {
    if(results.length > 0) {
        console.log(results);
        right_eyeX = results[0].pose.rightEye.x - 15;
        right_eyeY = results[0].pose.rightEye.y - 15;
        console.log("right Eye x = " + results[0].pose.rightEye.x)
        console.log("right Eye y = " + results[0].pose.rightEye.y)
        left_eyeX = results[0].pose.leftEye.x - 10;
        left_eyeY = results[0].pose.leftEye.y - 10;
        console.log("left Eye x = " + results[0].pose.leftEye.x)
        console.log("left Eye y = " + results[0].pose.leftEye.y)
    }
}