class Particle
{
     constructor(x, y, d)
     {
          this.__x = x;
          this.__y = y;
          this.__diameter = d;
          this.__land = random(height - 10, height);

          this.__xVelocity = random(-1, 1);
          this.__yVelocity = random(1, 3);
          this.__forUpdate = false;
     }

     toUpdate()
     {
          this.__forUpdate = true;
     }

     show()
     {
          noStroke();
          fill(200, 0, 100);
          ellipse(this.__x, this.__y, this.__diameter);
     }

     update()
     {
          this.__x += this.__xVelocity;
          this.__y += this.__yVelocity;
     }

     done()
     {
          return this.__y > this.__land;
     }
}
