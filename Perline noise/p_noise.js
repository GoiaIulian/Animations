let inc = 0.2, zoff = 0, particles = [], wasPressed = false;
var scl= 30, flowfield;
var columns, rows;

function setup()
{
     createCanvas(windowWidth, windowHeight);
     // createCanvas(400, 700);
     columns = floor(width / scl);
     rows = floor(height / scl);
     for(let i = 0; i < 500; i++)
     {
          particles.push(new Particle());
     }
     flowfield = new Array(columns * rows);
     background(255);
}

function draw()
{
     randomSeed(10);
     let yoff = 0;
     for (let y = 0; y < rows; y++)
     {
          let xoff = 0;
          for (let x = 0; x < columns; x++)
          {
               let index = x + y * columns;
               let r = noise(xoff, yoff, zoff) * TWO_PI * 2;
               xoff += inc;
               var v = p5.Vector.fromAngle(r);
               v.setMag(1);
               flowfield[index] = v;
               // flowfield visible
               // stroke(0, 50);
               // push();
               // translate(x * scl, y * scl);
               // rotate(v.heading());
               // strokeWeight(1);
               // line(0, 0, scl, 0);
               // pop();
          }
          yoff += inc;
          zoff += 0.001;
     }

     for (let p of particles)
     {
          p.follow(flowfield, scl);
          p.update();
          p.show();
     }
}

// pause animation by pressing the mouse wheel
// then press again to play
function mousePressed()
{
     if (mouseButton === CENTER)
     {
          if (!wasPressed)
          {
               wasPressed = true;
               noLoop();
          }
          else
          {
               wasPressed = false;
               loop();
          }
     }
}
