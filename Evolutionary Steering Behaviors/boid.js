class Boid
{
     constructor(x, y)
     {
          this.__location = createVector(x, y);
          this.__velocity = createVector(0, 0);
          this.__acceleration = createVector(0, 0);
          this.__mass = 1;

          this.__r = 7;
          this.__maxSpeed = 3;
          this.__maxForce = 0.2;

          this.__DNA = [];
          this.__DNA[0] = random(-5, 5);
          this.__DNA[1] = random(-5, 5);

          this.__health = 100;
     }

     applyForce(force)
     {
          let f = force.div(this.__mass);
          f.limit(this.__maxSpeed);
          this.__acceleration.add(f);
     }

     behaviors(good, bad)
     {
          var steerG = this.eat(good);
          var steerB = this.eat(bad);

          steerG.mult(this.__DNA[0]);
          steerB.mult(this.__DNA[1]);

          this.applyForce(steerG, 10);
          this.applyForce(steerB, -50);
     }

     eat(list, s)
     {
          var record = Infinity;
          var closest = null;
          for (let i = 0; i < list.length; i++)
          {
               var d = this.__location.dist(list[i]);
               if (d < record)
               {
                    record = d;
                    closest = i;
               }
          }
          if(record < 5)
          {
               this.__health += s;
               list.splice(closest, 1);
               list.push(createVector(random(width), random(height)));
          }
          else
          {
               return this.seek(list[closest]);
          }
          return createVector(0, 0);
     }

     seek(target)
     {
          let desire = p5.Vector.sub(target, this.__location);
          desire.normalize();
          desire.mult(this.__maxSpeed);
          let steer = p5.Vector.sub(desire, this.__velocity);
          steer.limit(this.__maxForce);
          // this.applyForce(steer);
          return steer;
     }

     update()
     {
          this.__health -= 1;
          this.__velocity.add(this.__acceleration);
          this.__velocity.limit(this.__maxSpeed);
          this.__location.add(this.__velocity);
          this.__acceleration.mult(0);
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

     dead()
     {
          return this.__health < 0;
     }

     show()
     {
          let theta = this.__velocity.heading() + PI / 2;
          var g = color(0, 255, 0);
          var r = color(255, 0, 0);
          var col = lerpColor(r, g, this.__health);
          fill(col);
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
