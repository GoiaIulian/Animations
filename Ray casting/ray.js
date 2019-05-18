class Ray
{
     constructor(pos, angle)
     {
          this.__pos = pos;
          this.__direction = p5.Vector.fromAngle(angle);
     }

     show()
     {
          stroke(255, 100);
          push();
          translate(this.__pos.x, this.__pos.y);
          line(0, 0, this.__direction.x, this.__direction.y);
          pop();
     }

     look(x, y)
     {
          this.__direction.x = x - this.__pos.x;
          this.__direction.y = y - this.__pos.y;
          this.__direction.normalize();
     }

     hit(wall)
     {
          const x1 = wall.__b.x;
          const y1 = wall.__b.y;
          const x2 = wall.__e.x;
          const y2 = wall.__e.y;

          const x3 = this.__pos.x;
          const y3 = this.__pos.y;
          const x4 = this.__pos.x + this.__direction.x;
          const y4 = this.__pos.y + this.__direction.y;

          const den = (x1 -x2) * (y3 - y4) - (y1 -y2) * (x3 - x4);

          if (den == 0)
          {
               return;
          }

          let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
          let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

          if (t > 0 && t < 1 && u > 0)
          {
               const v = createVector();
               v.x = x1 + t * (x2 - x1);
               v.y = y1 + t * (y2 - y1);
               return v;
          }
          else
          {
               return;
          }
     }
}
