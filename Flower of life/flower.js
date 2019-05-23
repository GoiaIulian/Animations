class Flower
{
     constructor(x, y, r)
     {
          this.__x = x;
          this.__y = y;
          this.__r = r;
     }

     neighboor(other)
     {
          // https://stackoverflow.com/questions/3349125/circle-circle-intersection-points
          let d = dist(this.__x, this.__y, other.__x, other.__y);
          let a = ((this.__r * 2) ** 2) / this.__r * 2);
          let h = sqrt(this.__r ** 2 - a ** 2);
          let p2x = this.__x + a * (other.__x - this.__x) / this.__r / 2;
          let p2y = this.__y + a * (other.__y - this.__y) / this.__r / 2;
          if (h == 0)
          {

          }
     }

     show()
     {
          noFill();
          stroke(0);
          ellipse(this.__x, this.__y, this.__r * 2);
     }
}
