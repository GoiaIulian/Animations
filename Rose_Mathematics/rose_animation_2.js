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
  background(255);
  translate(width / 2, height / 2);
  stroke(random(255), random(255), random(255));
  d = sliderD.value();
  n = sliderN.value();
  k = n / d;
}

function draw()
{
  strokeWeight(8);
  translate(width / 2, height / 2);
  noFill();
  if (angle == d * TWO_PI)
  {
    angle = 0;
    noLoop();
  }
  var radius = r * cos(k * angle);
  var x = radius * cos(angle);
  var y = radius * sin(angle);
  point(x, y);
  angle += 0.01;
}

function mousePressed()
{
  background(255);
  angle = 0;
  translate(width / 2, height / 2);
  stroke(random(255), random(255), random(255));
  d = sliderD.value();
  n = sliderN.value();
  k = n / d;
  loop();
}
