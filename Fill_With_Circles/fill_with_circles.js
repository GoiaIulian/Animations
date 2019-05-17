let circles = [];
let r = 250;
function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw()
{
  noFill();
  stroke(255);
  strokeWeight(3);
  let c = new Circle(mouseX, mouseY, random(r));
  for (var i = 0; i < circles.length; i++)
  {
    let d = int(dist(c.__x, c.__y, circles[i].__x, circles[i].__y));
    if ((d - c.__r - circles[i].__r) < 0)
    {
      c.__fit = false;
      break;
    }
  }
  if (c.__fit)
  {
    circles.push(c);
    ellipse(c.__x, c.__y, c.__r);
  }
}
