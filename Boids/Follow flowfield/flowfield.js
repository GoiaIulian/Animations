class FlowField
{
     constructor(r)
     {
          this.__resolution = r;
          this.__cols = floor(width / this.__resolution) + 1;
          this.__rows = floor(height / this.__resolution) + 1;
          this.__field = new Array(this.__rows * this.__cols);
          this.__toShow = false;

          this.__xoff = 0;
          this.__yoff = 0;
          this.init();
     }

     init()
     {
          for (let y = 0; y < this.__rows; y++)
          {
               this.__xoff = 0;
               for (let x = 0; x < this.__cols; x++)
               {
                    let index = y + x * this.__cols;
                    let theta = map(noise(this.__xoff, this.__yoff), 0, 1, 0, TWO_PI);
                    let v = p5.Vector.fromAngle(theta);
                    v.setMag(1);
                    this.__field[index] = v;
                    this.__xoff += 0.1;
               }
               this.__yoff += 0.1;
          }
     }

     lookup(v)
     {
          var x = floor(v.x / this.__resolution);
          var y = floor(v.y / this.__resolution);
          var index = y + x * this.__cols;
          return this.__field[index].copy();
     }

     show()
     {
          if (this.__toShow)
          {
               for (let y = 0; y < this.__rows; y++)
               {
                    for (let x = 0; x < this.__cols; x++)
                    {
                         let index = y + x * this.__cols;
                         stroke(0, 50);
                         push();
                         translate(x * this.__resolution, y * this.__resolution);
                         rotate(this.__field[index].heading());
                         strokeWeight(1);
                         line(0, 0, this.__resolution, 0);
                         pop();
                    }
               }
          }
     }
}
