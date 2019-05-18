let visited = [true];
let counter = 1;
let sequence = [];
let index = 0;
let arcs = [];
let big = 0;
let wasPressed = false;

class Arc
{
  constructor(s, e, dir)
  {
    this.__start = s;
    this.__end = e;
    this.__direction = dir;
    this.__r = random(100, 255);
    this.__g = random(100);
    this.__b = 100;
  }

  show()
  {
    let diameter = abs(this.__end - this.__start);
    let x = (this.__end + this.__start) / 2;
    stroke(this.__r, this.__g, this.__b);
    noFill();
    if (this.__direction != 0)
    {
      arc(x, 0, diameter, diameter, 0, PI);
    }
    else
    {
      arc(x, 0, diameter, diameter, PI, 0);
    }
  }
}

function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(0);
  visited[index] = true;
  sequence.push(index);
}

function step()
{
  let next = index - counter;
  if(index > big)
  {
    big = index;
  }
  if (next < 0 || visited[next])
  {
    next = index + counter;
  }
  visited[next] = true;
  sequence.push(next);
  let a = new Arc(index, next, counter % 2);
  arcs.push(a);
  index = next;
  counter++;
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

function draw()
{
  step();
  translate(0, height / 2);
  scale(width / big);
  background(0);
  strokeWeight(1);
  for (let a of arcs)
  {
    a.show();
  }
}
