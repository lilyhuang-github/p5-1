let img;

function preload() {
    img = loadImage('TheThing.webp');
//    img = loadImage('https://preview.redd.it/i-know-he-nervous-af-v0-xmo07xj81px81.jpg?width=640&crop=smart&auto=webp&s=9b8a91512d601dc6035e527449c330a63d5b1e7e');
}
function setup() {
  let constraints = {
    video: {
      mandatory: {
        minWidth: displayWidth,
        minHeight: displayHeight
      },
     
    },
   
  };
 
  createCanvas(displayWidth, displayHeight);
//  img = createImg('https://static.wikia.nocookie.net/jerma-lore/images/e/e3/JermaSus.jpg/revision/latest?cb=20201206225609');
  capture = createCapture(VIDEO);
  //capture.hide();
  
  input = createInput();
  input.position(displayWidth/2, displayHeight/2);
  button = createButton('submit');
  button.position(displayWidth/2+150, displayHeight/2);
  button.mousePressed(greet);
// textAlign(CENTER);
//   textSize(50);
  greeting = createElement('h2', 'Custom image url: ');
  greeting.position(displayWidth/2, displayHeight/2-125);
  
//  img = loadImage(capture);
}
function greet(){
  const name = input.value();
  
  tF = checkImage(url);
  if(tF === true){
    img = loadImage(name);
  }
  else{
    img = loadImage('TheThing.webp')
  }

}
function checkImage(url) {
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send();
  request.onload = function() {
    status = request.status;
    if (request.status == 200) //if(statusText == OK)
    {
      console.log("image exists");
      return true;
    } else {
      console.log("image doesn't exist");
      return false;
    }
  }
}
function failure(){
   img = loadImage('TheThing.webp');
    console.log("Bad image file path");
}

function draw() {
  background(255);
 // ellipse(50, 60, 15, 15);
  //gridSize = 50;
//  gridSize = 12;
  let gridSize = int(map(0, 0, width, 15, 50));
//  image(capture, 0, 0, 320, 240);
  capture.loadPixels();
  for(let y=0; y<capture.height; y+=gridSize){
    for(let x=0; x<capture.width; x+= gridSize){
      let index = (y * capture.width + x) * 4;
      let r = capture.pixels[index];
     // let dia = map(r, 0, 255, gridSize,2);
       let dia = map(r, 0,255, gridSize,2);
     
      fill(0);
      noStroke();
      image(img, x, y, dia, dia);
      //text("B",x,y,dia);
     // circle(x,y,dia);
    
    }
  
  }
  
}
