class Boid
{
     constructor()
     {
          this.__location = createVector(random(width), random(height));
          this.__velocity = createVector(0, 0);
          this.__acceleration = createVector(0, 0);
          this.__mass = 1;

          this.__r = 7;
          this.__maxSpeed = 4;
          this.__maxForce = 0.1;

          this.__personalSpace = 200;
     }

     applyForce(force)
     {
          let f = force.div(this.__mass);
          f.limit(this.__maxSpeed);
          this.__acceleration.add(f);
     }

     flee(target)
     {
          if (this.__location.dist(target) < this.__personalSpace)
          {
               let desire = target.sub(this.__location);
               desire.normalize();
               desire.mult(this.__maxSpeed);
               desire.mult(-1);
               let steer = desire.sub(this.__velocity);
               steer.limit(this.__maxForce);
               this.applyForce(steer);
          }
     }
     seek(target)
     {
          let desire = target.sub(this.__location);
          desire.normalize();
          desire.mult(this.__maxSpeed);
          let steer = desire.sub(this.__velocity);
          steer.limit(this.__maxForce);
          this.applyForce(steer);
     }

     update()
     {
          this.__velocity.add(this.__acceleration);
          this.__location.add(this.__velocity);
          this.__acceleration.mult(0);
          this.edges();
     }

     edges()
     {
          if (this.__location.x > width)
          {
               this.__location.x = 0;
          }else if (this.__location.x < 0) {
               this.__location.x = width;
          }
          if (this.__location.y > height)
          {
               this.__location.y = 0;
          }else if (this.__location.y < 0) {
               this.__location.y = height;
          }
     }

     show()
     {
          let theta = this.__velocity.heading() + PI / 2;
          fill(100);
          noStroke();
          push();
          translate(this.__location.x, this.__location.y);
          rotate(theta);
          beginShape();
          vertex(0, -this.__r * 2);
          vertex(-this.__r, this.__r * 2);
          vertex(0, this.__r * 1.5);
          vertex(this.__r, this.__r * 2);
          endShape(CLOSE);
          pop();
     }
}
