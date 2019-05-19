let wasPressed = false, n = 0, c = 10, col;

function setup()
{
     createCanvas(windowWidth, windowHeight);
     background(255);
     angleMode(DEGREES);
     col = random(255);
}

function draw()
{
     translate(width / 2, height / 2);
     // change the digit after the poit for the angle to get diffrent patterns 
     var a = n * 137.6;
     var r = c * sqrt(n);
     var x = r * cos(a);
     var y = r * sin(a);
     // fill(a % 256, n % 256, r % 256);
     fill(col, 0, 100);
     ellipse(x, y, 10);
     n++;
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
