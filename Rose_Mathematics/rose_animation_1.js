let r, d, n, sliderD, sliderN;
var angle = 0;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  r = windowHeight / 3;
  sliderD = createSlider(1, 10, 4);
  sliderN = createSlider(1, 10, 5);
  sliderD.position(150, windowHeight - 100);
  sliderN.position(windowWidth - 300, windowHeight - 100);
  stroke(random(255), random(255), random(255));
}

function draw()
{
  translate(width / 2, height / 2);
  background(255);
  strokeWeight(6);
  noFill();
  beginShape();
  d = sliderD.value();
  n = sliderN.value();
  k = n / d;
  for (var angle = 0; angle < TWO_PI * d; angle += 0.001)
  {
    var radius = r * cos(k * angle);
    var x = radius * cos(angle);
    var y = radius * sin(angle);
    vertex(x, y);
  }
  endShape();
}

function mousePressed()
{
  stroke(random(255), random(255), random(255));
}
