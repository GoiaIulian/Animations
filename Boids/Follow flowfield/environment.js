let wasPressed = false, boids = [], flow;

function setup()
{
     createCanvas(windowWidth, windowHeight);
     for (let i = 0; i < 80; i++)
     {
          boids.push(new Boid());
     }
     console.log(boids);
     flow = new FlowField(30);
}

function draw()
{
     background(255);
     flow.show();
     for (let b of boids)
     {
          b.follow(flow);
          b.flock(boids);
          b.update();
          b.show();
     }
}

// show or hide flowfield by pressing left mouse button
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
     else if (mouseButton === LEFT)
     {
          if (!wasPressed)
          {
               flow.__toShow = false;
               wasPressed = true;
          }
          else
          {
               wasPressed = false;
               flow.__toShow = true;
          }
     }
}
