var tree = [];

function setup()
{
  createCanvas(windowWidth, windowHeight);
	var a = createVector(width / 2, height);
	var b = createVector(width /2, height - height / 4);
	var root = new Branch(a, b);

  tree[0] = root;
}

// press mouse to get next generation of branches
function mousePressed()
{
  for (var i = tree.length -1; i >= 0 ; i--)
  {
    if (!tree[i].__finished)
    {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
      tree[i].__finished = true;
    }
  }
}

function draw()
{
	background(100);

	for (var i = 0; i < tree.length; i++)
  {
    tree[i].show();
  }
}
