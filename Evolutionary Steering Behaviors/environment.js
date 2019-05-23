let wasPressed = false;
var food = [], poison = [], boids = [];

function setup()
{
     createCanvas(windowWidth, windowHeight);
     for (let i = 0; i < 10; i++)
     {
          food.push(createVector(random(10, width), random(10, height)));
     }
     for (let i = 0; i < 10; i++)
     {
          boids.push(new Boid(random(10, width), random(10, height)));
     }
     for (let i = 0; i < 10; i++)
     {
          poison.push(createVector(random(10, width), random(10, height)));
     }
}

function draw()
{
     background(255);

     for (let f of food)
     {
          fill(100, 255, 0);
          ellipse(f.x, f.y, 8);
     }
     for (let p of poison)
     {
          fill(255, 100, 0);
          ellipse(p.x, p.y, 8);
     }
     for (let i = boids.length - 1; i >= 0; i--)
     {
          boids[i].behaviors(food, poison);
          boids[i].update();
          boids[i].show();
          if (boids[i].dead())
          {
               boids.splice(i, 1);
          }
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
