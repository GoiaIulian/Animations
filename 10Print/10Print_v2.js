let x = 0, y = 0, space = 50, wasPressed = false;

function setup()
{
     createCanvas(windowWidth, windowHeight);
     background(255);
     stroke(random(100, 255), random(0, 100),random(100, 255));
     strokeWeight(10);
     space = height / 30;
}

function maze()
{
     let n = (width / space) * (height / space);
     while (y < height)
     {
          if (random(1) < 0.5)
          {
               line(x, y, x + space, y + space);
          } else {
               line(x, y + space, x + space, y);
          }
          x += space;
          if (x > width)
          {
               x = 0;
               y += space;
          }
     }
}

function draw()
{
     background(255);
     maze();
     y = 0;
     x = 0;
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
