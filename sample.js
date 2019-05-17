let wasPressed = false;

function setup()
{
     createCanvas(windowWidth, windowHeight);
     background(255);
}

function draw()
{

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
