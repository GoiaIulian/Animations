function Branch(s, e)
{
	this.__start = s;
	this.__end = e;
	this.__finished = false;

	this.show = function()
	{
		stroke(255);
		line(this.__start.x, this.__start.y, this.__end.x, this.__end.y);
	}

	this.branchA = function()
	{
		var dir = p5.Vector.sub(this.__end, this.__start);
		dir.rotate(PI / 4);
		dir.mult(0.7);
		var newEnd = p5.Vector.add(this.__end, dir);
		var right = new Branch(this.__end, newEnd);

		return right;
	}

	this.branchB = function()
	{
		var dir = p5.Vector.sub(this.__end, this.__start);
		dir.rotate(-PI / 8);
		dir.mult(0.7);
		var newEnd = p5.Vector.add(this.__end, dir);
		var right = new Branch(this.__end, newEnd);

		return right;
	}

}
