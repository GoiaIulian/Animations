let wasPressed = false, b;

function setup()
{
     createCanvas(windowWidth, windowHeight);
     b = new Boid();
}

function draw()
{
     background(255);
     ellipse(mouseX, mouseY, 20);
     // let target = createVector(mouseX, mouseY);
     let enemy = createVector(mouseX, mouseY);
     // b.seek(target);
     b.flee(enemy);
     b.update();
     b.show();
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
