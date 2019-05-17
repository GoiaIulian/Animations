let x = 0, y = 0, space = 50;

function setup()
{
     createCanvas(windowWidth, windowHeight);
     background(255);
     stroke(random(100, 255), random(0, 100),random(100, 255));
     strokeWeight(10);
     space = windowHeight / 30;
}

function draw()
{
     if (random(1) < 0.8)
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
     if (y > height)
     {
          y = 0;
          noLoop();
     }
}
