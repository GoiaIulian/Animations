let wasPressed = false, seeds = [];

function setup()
{
     createCanvas(windowWidth, windowHeight);
     background(255);
     seeds.push(new Flower(0, 0, 100, 100));
}

function draw()
{
     translate(width / 2, height / 2);
     for (let i = 0; i < 4; i++)
     {
          for (let i = seeds.length - 1; i >= 0; i--)
          {
               if (!seeds[i].__hasSeeds)
               {
                    seeds[i].seed();
               }
          }
     }

     for (let s of seeds)
     {
          s.show();
     }

     noLoop();
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
