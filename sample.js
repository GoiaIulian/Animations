let wasPressed = false;

function setup()
{
     createCanvas(windowWidth, windowHeight);
     background(255);
}

function draw()
{

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
