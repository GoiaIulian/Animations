let circels = [], wasPressed = false;

function setup()
{
     createCanvas(windowWidth, windowHeight);
     translate(width / 2, height / 2);
     createCircle(0, 0, height / 2);
     rotate(PI / 2);
}

function draw()
{
     translate(width / 2, height / 2);
     background(255);
     stroke(0);
     strokeWeight(2);
     for(c of circels)
     {
          c.show();
          c.update();
     }
}

function createCircle(x, y, d)
{
     circels.push(new Circle(x, y, d));
     if (d > 100)
     {
          createCircle(x + d * 0.3, y, d * 0.6);
          createCircle(x - d * 0.3, y, d * 0.6);
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
