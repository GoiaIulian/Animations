var tree = [];

function setup()
{
     createCanvas(windowWidth, windowHeight);
     var a = createVector(width / 2, height);
	var b = createVector(width /2, height - height / 4);
	var root = new Branch(a, b, 20);
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
      tree[i].__last = false;
    }
  }
}

function draw()
{
     background(255);
     for (var i = 0; i < tree.length; i++)
     {
          tree[i].show();
     }
     for (var i = tree.length -1; i >= 0 ; i--)
       {
        if (tree[i].__last)
        {
           noStroke();
           fill(200, 0, 100);
           if (tree[i].__thickness > 5)
           {
                ellipse(tree[i].__end.x, tree[i].__end.y, tree[i].__thickness * 3);
           }
           else
           {
                ellipse(tree[i].__end.x, tree[i].__end.y, 5);
           }
        }
       }

}
