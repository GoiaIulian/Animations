function setup()
{
     createCanvas(windowWidth, windowHeight);
     angleMode(DEGREES);
}

function draw()
{
     background(0);
     strokeWeight(15);
     noFill();
     translate(width / 2, height / 2);
     rotate(-90);
     let h = hour();
     let m = minute();
     let s = second();
     //hours
     let hangle = map(h % 12, 0, 12, 0, 360);
     stroke(50, 0, 100);
     arc(0, 0, height / 1.4 - 60, height / 1.4 - 60, 0, hangle);
     line(0,0,height / 6 * cos(hangle),height / 6 * sin(hangle));
     //minutes
     let mangle = map(m, 0, 60, 0, 360);
     stroke(100, 0, 50);
     arc(0, 0, height / 1.4 - 30, height / 1.4 - 30, 0, mangle);
     line(0,0,height / 5 * cos(mangle),height / 5 * sin(mangle));
     //seconds
     let sangle = map(s, 0, 60, 0, 360);
     stroke(100, 0, 100);
     arc(0, 0, height / 1.4, height / 1.4, 0, sangle);
     line(0,0,height / 4 * cos(sangle),height / 4 * sin(sangle));

     stroke(0);
     point(0,0);
}
