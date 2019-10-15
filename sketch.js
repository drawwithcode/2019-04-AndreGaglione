var mySong;
var myImage;
var myImage2;
var myImage3;
var analyzer;

function preload(){
  // put preload code here
    mySong = loadSound("./assets/Harrison BDP - Decompression.mp3");
    myImage = loadImage("./assets/presidente1.jpeg");
    myImage2 = loadImage("./assets/presidente2.jpeg");
    myImage3 = loadImage("./assets/presidente3.jpeg")
    cursor("./assets/presidente2.jpeg");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(255, 255, 255);

  // The analyzer allows to perform analysis on a sound file
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
}

function draw() {
  // put drawing code here

  var volume = 0;

  if (frameCount > width/2) {

    if (mySong.isPlaying() == false) {

      mySong.play();
    } else { background('white');}


    volume = analyzer.getLevel();
      // get the volume and remap it to a bigger value
    volume = map(volume,0,1,0,height);

    var a = -volume;
    push();
    stroke('red');
    fill('red');
    rect(frameCount/4, height/2, 2, volume);
    rect(frameCount/4, height/2, 2, a);
    pop();
    rect(0, 0, frameCount/4, windowHeight);
  } else {
    background('red');
    mySong.stop();
  }

  if(frameCount<100){
          var myText = "I'm very noob but i like to call it minimalism";
          textFont('Bangers');
          textAlign(CENTER);
          textSize(60);
          fill('black');
          text(myText, width/2, height/3.5);
  }

  else{
          push();
          var myText = "press compulsively on the screen";
          textFont('Bangers');
          textAlign(CENTER);
          textSize(60);
          fill('black');
          text(myText, width/2, height/3.5);
          pop();
  }

  if (frameCount>300){
    push();
    var myText = "let the presidente dance again";
    textFont('Bangers');
    textAlign(CENTER);
    textSize(60);
    fill('white');
    text(myText, width/2, height/2);
    pop();


  }
  if (mySong.isPlaying() == true){
  imageMode(CENTER);
  image(myImage, width/4, height/8, volume/2, volume/2);
  image(myImage3, width-width/4, height/8, volume/2, volume/2);
  image(myImage3, width/4, height-height/8, volume/2, volume/2);
  image(myImage, width-width/4, height-height/8, volume/2, volume/2);
  //image(myImage2, mouseX, mouseY, volume/3, volume/3);
  }
  /*
  var volume = 0;
    //defining a variable == to frameCount
  var counter = frameCount;

  if (mouseX > width/2){

  background(0,0,255);

  if (mySong.isPlaying() == false){
    mySong.play();
  }

  // get the volume and remap it to a bigger value
  volume = analyzer.getLevel();
  volume = map(volume,0,1,0,height);

 }

  var a = -volume;
  rect(frameCount/2, height/2, 1, volume);
  rect(frameCount/2, height/2, 1, a);
  */
  }
