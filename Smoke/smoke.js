let wasPressed = false, particles = [];

class Particle
{
     constructor()
     {
          this.__x = width / 2;
          this.__y = height -20;
          this.__diameter = 20;

          this.__xVelocity = random(-1, 1);
          this.__yVelocity = random(-3, -1);

          this.__alpha = 200;
          this.__color = random(20);
     }

     show()
     {
          noStroke();
          fill(this.__color,this.__alpha);
          ellipse(this.__x, this.__y, this.__diameter);
     }

     update()
     {
          this.__x += this.__xVelocity;
          this.__y += this.__yVelocity;
          this.__diameter += 0.3;
          this.__alpha -= 1;
     }

     done()
     {
          return this.__alpha < 0;
     }
}

function setup()
{
     createCanvas(windowWidth, windowHeight);
}

function draw()
{
     background(255);
     for (let i = 0; i <= 4; i++)
     {
          particles.push(new Particle());
     }
     for (let p = particles.length - 1; p >= 0; p--)
     {
          particles[p].show();
          particles[p].update();
          if (particles[p].done())
          {
               particles.splice(p, 1);
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
