let wasPressed = false, boids = [];

function setup()
{
     createCanvas(windowWidth, windowHeight);
     for (let i = 0; i < 100; i++)
     {
          boids.push(new Boid());
     }
}

function draw()
{
     background(255);
     for (let b of boids)
     {
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
