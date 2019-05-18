let wasPressed = false, walls = [], particle, xoff = 0, yoff = 10000;

function setup()
{
     createCanvas(windowWidth, windowHeight);
     background(255);
     setWalls();
     particle = new Particle();
}

function draw()
{
     background(0);
     for (let wall of walls)
     {
          wall.show();
     }
     // use the commented lines if you want the light source to move on it's own
     // and comment line 28

     // particle.update(noise(xoff) * width, noise(yoff) * height);
     // xoff += 0.01;
     // yoff += 0.01;
     particle.update(mouseX, mouseY);
     particle.show();
     particle.look(walls);
}

function setWalls()
{
     walls[0] = new Edge(width / 1.5, height / 1.5, width - (width / 1.5), height - (height / 1.5));
     walls[1] = new Edge(0, 0, width, 0);
     walls[2] = new Edge(0, height, width, height);
     walls[3] = new Edge(0, 0, 0, height);
     walls[4] = new Edge(width, 0, width, height);
     walls[5] = new Edge();
     walls[6] = new Edge(width * 0.2, height / 1.5, width * 0.2, height - (height / 1.5));
     walls[7] = new Edge(width * 0.5, height * 0.5, width - (width * 1.5), height * 1.5);
     walls[8] = new Edge(width - (width * 0.2), height * 0.5, width - (width * 0.2), height - (height * 0.2));
     walls[9] = new Edge(width * 0.3, height * 0.2, width - (width * 0.3), height - (height * 0.9));
     walls[10] = new Edge(width - (width * 0.2), height * 0.5, width * 0.7, height - (height * 0.2));
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
