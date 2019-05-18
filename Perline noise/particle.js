class Particle
{
     constructor()
     {
          this.__pos = createVector(random(width), random(height));
          this.__v = createVector(0, 0);
          this.__a = createVector(0, 0);
          this.__maxSpeed = 3;
     }

     update()
     {
          this.__v.add(this.__a);
          this.__v.limit(this.__maxSpeed);
          this.__pos.add(this.__v);
          this.__a.mult(0);
          this.edge();
     }

     applyForce(force)
     {
          this.__a.add(force);
     }

     follow(flow, s)
     {
          var x = floor(this.__pos.x / s);
          var y = floor(this.__pos.y / s);
          var index = x + y * columns;
          this.applyForce(flow[index]);
     }

     edge()
     {
          if (this.__pos.x > width){this.__pos.x = 0}
          if (this.__pos.x < 0){this.__pos.x = width}
          if (this.__pos.y > height){this.__pos.y = 0}
          if (this.__pos.y < 0){this.__pos.y = height}
     }

     show()
     {
          stroke(0, 5);
          strokeWeight(3);
          point(this.__pos.x, this.__pos.y);
     }
}
