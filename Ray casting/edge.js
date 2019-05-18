class Edge
{
     constructor(x, y, a, b)
     {
          this.__b = createVector(x, y);
          this.__e = createVector(a, b);
     }

     show()
     {
          stroke(255);
          line(this.__b.x, this.__b.y, this.__e.x, this.__e.y);
     }
}
