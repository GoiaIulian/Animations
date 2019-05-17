function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw()
{
  if (mouseIsPressed)
  {
    fill(255,100,100);
  } else {
    fill(255,100,100);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
