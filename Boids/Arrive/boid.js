class Boid
{
     constructor()
     {
          this.__location = createVector(random(width), random(height));
          this.__velocity = createVector(0, 0);
          this.__acceleration = createVector(0, 0);
          this.__mass = 1;

          this.__r = 7;
          this.__maxSpeed = 6;
          this.__maxForce = 0.2;

          this.__personalSpace = 200;
     }

     applyForce(force)
     {
          let f = force.div(this.__mass);
          f.limit(this.__maxSpeed);
          this.__acceleration.add(f);
     }

     separation(boids)
     {
          let d = 50;
          let total = 0;
          let steering = createVector();
          for (let b of boids)
          {
               let dist = this.__location.dist(b.__location);
               if (b != this && dist < d)
               {
                    let diff = p5.Vector.sub(this.__location, b.__location);
                    diff.normalize();
                    diff.div(dist);
                    steering.add(diff);
                    total++;
               }
          }
          if (total > 0)
          {
               steering.div(total);
               steering.normalize();
               steering.mult(this.__maxSpeed);
               steering.sub(this.__velocity);
               steering.limit(this.__maxForce);
               return steering;
          }
     }

     flock(boids)
     {
          const b = [...boids];
          let separation = this.separation(b);
          if(separation)
          {
               separation.mult(1.5);
          }
          this.__acceleration.add(separation);
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

     arrive(target)
     {
          let desire = target.sub(this.__location);
          let d = desire.mag();
          desire.normalize();
          if (d < 100)
          {
               let br = map(d, 0, 100, 0, this.__maxSpeed);
               desire.mult(br);
          }
          else
          {
               desire.mult(this.__maxSpeed);
          }
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
