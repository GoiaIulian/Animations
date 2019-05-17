class Circle
{
     constructor(x, y, d)
     {
          this.__x = x;
          this.__y = y;
          this.__diameter = d;
          if (random(1) < 0.5)
          {
               this.__direction = 1;
          } else {
               this.__direction = -1;
          }
          this.__theta = atan2(x, y);
          this.__r = int(dist(x, y, 0, 0));
          this.__speed = random(0.01, 0.04);
          this.__color = new Color(random(100, 150),random(100),random(150, 255),random(255));
     }

     show()
     {
          fill(this.__color.__r, this.__color.__g, this.__color.__b, this.__color.__a);
          ellipse(this.__x, this.__y, this.__diameter);
     }

     update()
     {
          this.__theta += this.__direction * this.__speed;
          this.__x = floor(this.__r * cos(this.__theta));
          this.__y = floor(this.__r * sin(this.__theta));
     }
}
