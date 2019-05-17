let circels = [], wasPressed = false;

function setup()
{
     createCanvas(windowWidth, windowHeight);
     translate(width / 2, height / 2);
     createCircleLeft(0, 0, height / 2);
     createCircleRight(0, 0, height / 2);
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

function createCircleLeft(x, y, d)
{
     circels.push(new Circle(x, y, d));
     if (d > 50)
     {
          createCircleLeft(x + d * 0.3, y, d * 0.6);

     }
}
function createCircleRight(x, y, d)
{
     circels.push(new Circle(x, y, d));
     if (d > 50)
     {
          createCircleRight(x - d * 0.3, y, d * 0.6);
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
