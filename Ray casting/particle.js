class Particle
{
     constructor()
     {
          this.__pos = createVector(width / 2, height / 2);
          this.__rays = [];
          for (let a = 0; a < 360; a++)
          {
               this.__rays.push(new Ray(this.__pos, radians(a)));
          }
     }

     look(walls)
     {
          for(let r of this.__rays)
          {
               let closest = null;
               let record = Infinity;
               for (let wall of walls)
               {
                    const p = r.hit(wall);
                    if (p)
                    {
                         const d = p5.Vector.dist(this.__pos, p);
                         if (d < record)
                         {
                              record = d;
                              closest = p;
                         }
                    }
               }
               if(closest)
               {
                    line(this.__pos.x, this.__pos.y, closest.x, closest.y);
               }
          }
     }

     update(x, y)
     {
          this.__pos.set(x,y);
     }

     show()
     {
          fill(255);
          ellipse(this.__pos.x, this.__pos.y, 5);
          for(let r of this.__rays)
          {
               r.show();
          }
     }
}
