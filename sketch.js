let img;

function preload() {
    img = loadImage('TheThing.webp');
//    img = loadImage('https://preview.redd.it/i-know-he-nervous-af-v0-xmo07xj81px81.jpg?width=640&crop=smart&auto=webp&s=9b8a91512d601dc6035e527449c330a63d5b1e7e');
}
function setup() {
  createCanvas(600, 600);
//  img = createImg('https://static.wikia.nocookie.net/jerma-lore/images/e/e3/JermaSus.jpg/revision/latest?cb=20201206225609');
  capture = createCapture(VIDEO);
  capture.hide();
//  img = loadImage(capture);
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
