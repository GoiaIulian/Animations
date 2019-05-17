let wasPressed = false, circles = [], diameter = 100;

function setup()
{
     createCanvas(windowWidth, windowHeight);
     translate(width / 2, height / 2);
     system(0, 0, diameter);
     console.log(circles);
}

function draw()
{
     background(255);
     translate(width / 2, height / 2);
     for (c of circles)
     {
          stroke(0);
          c.show();
          c.update();
     }
}

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

function system(x, y, d)
{
     while (d > 10 )
     {
          circles.push(new Circle(x, y, d));
          x -= d;
          d /= 1.5;
     }
}
