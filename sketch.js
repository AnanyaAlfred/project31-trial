var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

/*  */
function setup() {
  createCanvas(480,800);

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var j=15;j<=width-10;j=j+50){
   plinkos.push(new Plinko(j,175))
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var j=15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,375))
  }
  
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,400-divisionHeight/2,10,divisionHeight))
   }
   ground = new Ground(200,10,200,10)
}

function draw() {
  background(0); 
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  } 
/**/
  
for(var l = 0; l < particles.length; l++){
  particles[l].display();
}

for(var k = 0; k < divisions.length; k++){
  divisions[k].display();
}
for(var l = 0; l< plinkos.length; l++){
  plinkos[l].display();
}

ground.display()
  drawSprites();
}
