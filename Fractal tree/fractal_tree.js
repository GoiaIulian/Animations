let tree = [], leafs = [];
let angle;

function setup()
{
     createCanvas(windowWidth, windowHeight);
     var a = createVector(width / 2, height);
	var b = createVector(width /2, height - height / 4);
	tree.push(new Branch(a, b, 20));
     console.log(leafs);
     rAngle = random(PI / 8, PI / 2.5);
     lAngle = random(PI / 8, PI / 2.5);
     createTree();
}

// press mouse to get next generation of branches
function mousePressed()
{
     for (let i = 0; i < leafs.length / 6; i++)
     {
          console.log(floor(random(leafs.length-1)));
          leafs[floor(random(leafs.length-1))].toUpdate();
     }
}

function draw()
{
     background(255);
     for (let br of tree)
     {
          br.show();
     }
     for (let leaf of leafs)
     {
          leaf.show();
          if (!leaf.done() && leaf.__forUpdate)
          {
               leaf.update();
          }
     }
}

function createTree()
{
     for(let j = 0; j < 10; j++)
     {
          leafs = [];
          for (var i = tree.length -1; i >= 0 ; i--)
          {
               if (!tree[i].__finished)
               {
                    tree.push(tree[i].branchLeft(rAngle));
                    tree.push(tree[i].branchRight(-lAngle));
                    tree[i].__finished = true;
               }
          }
     }
}
