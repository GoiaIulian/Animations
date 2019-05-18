let r;
let factor = 2;
let i = 0;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  r = height / 2.6;
  background(255);
}

function getVector(index, total)
{
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

function draw() {
  const total = 200;
  translate(width / 2, height / 2);
  strokeWeight(2);
  noFill();
  ellipse(0, 0, r * 2);
  strokeWeight(2);
  const a = getVector(i, total);
  const b = getVector(i * factor, total);
  line(a.x, a.y, b.x, b.y);
  i++;
  if(i === 200)
  {
    factor += 1;
    i=0;
    stroke(random(255), random(255), random(255));
    noLoop();
  }
}

// press mouse wheel to get the animation for the next factor
function mousePressed()
{
  if (mouseButton === CENTER)
  {
    if (i == 0)
    {
      loop();
      background(250);
    }
  }
}
