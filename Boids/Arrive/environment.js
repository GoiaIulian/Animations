let wasPressed = false, boids = [];

function setup()
{
     createCanvas(windowWidth, windowHeight);
     for (let i = 0; i < 70; i++)
     {
          boids.push(new Boid());
     }
}

function draw()
{
     background(255);
     ellipse(mouseX, mouseY, 100);
     for (b of boids)
     {
          let target = createVector(mouseX, mouseY);
          b.arrive(target);
          b.flock(boids);
          b.update();
          b.show();
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
