class Boid
{
     constructor()
     {
          this.__location = createVector(random(width), random(height));
          // this.__location = createVector(width / 2, height / 2);
          this.__velocity = p5.Vector.random2D();
          this.__velocity.setMag(random(1, 2));
          this.__acceleration = createVector(0, 0);
          this.__mass = 1;

          this.__r = 7;
          this.__maxSpeed = 4;
          this.__maxForce = 0.1;
     }

     applyForce(force)
     {
          let f = force.div(this.__mass);
          f.limit(this.__maxSpeed);
          this.__acceleration.add(f);
     }

     align(boids)
     {
          let d = 100;
          let total = 0;
          let steering = createVector();
          for (let b of boids)
          {
               if (b != this && this.__location.dist(b.__location) < d)
               {
                    steering.add(b.__velocity);
                    total++;
               }
          }
          if (total > 0)
          {
               steering.div(total);
               steering.setMag(this.__maxSpeed);
               steering.sub(this.__velocity);
               steering.limit(this.__maxForce);
               return steering;
          }
     }

     cohesion(boids)
     {
          let d = 100;
          let total = 0;
          let steering = createVector();
          for (let b of boids)
          {
               if (b != this && this.__location.dist(b.__location) < d)
               {
                    steering.add(b.__location);
                    total++;
               }
          }
          if (total > 0)
          {
               steering.div(total);
               steering.sub(this.__location);
               steering.setMag(this.__maxSpeed);
               steering.sub(this.__velocity);
               steering.limit(this.__maxForce);
               return steering;
          }
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
          let alignment = this.align(b);
          this.__acceleration.add(alignment);
          let cohesion = this.cohesion(b);
          this.__acceleration.add(cohesion);
          let separation = this.separation(b);
          if(separation)
          {
               separation.mult(1.5);
          }
          this.__acceleration.add(separation);
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
          this.__location.add(this.__velocity);
          this.__velocity.add(this.__acceleration);
          this.__velocity.limit(this.__maxSpeed);
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
