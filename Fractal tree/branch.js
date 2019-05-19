class Branch
{
	constructor(b, e, thickness)
	{
		this.__start = b;
		this.__end = e;
		this.__finished = false;
		this.__thickness = thickness;
	}

	branchRight(rAngle)
	{
		var dir = p5.Vector.sub(this.__end, this.__start);
		dir.rotate(rAngle);
		dir.mult(0.7);
		var newEnd = p5.Vector.add(this.__end, dir);
		var right = new Branch(this.__end, newEnd, this.__thickness * 0.7);
		leafs.push(new Particle(newEnd.x, newEnd.y, 5 * this.__thickness));
		return right;
	}

	branchLeft(lAngle)
	{
		var dir = p5.Vector.sub(this.__end, this.__start);
		dir.rotate(lAngle);
		dir.mult(0.7);
		var newEnd = p5.Vector.add(this.__end, dir);
		var right = new Branch(this.__end, newEnd, this.__thickness * 0.7);
		leafs.push(new Particle(newEnd.x, newEnd.y, 5 * this.__thickness));

		return right;
	}

	show()
	{
		stroke(0);
		strokeWeight(this.__thickness);
		line(this.__start.x, this.__start.y, this.__end.x, this.__end.y);
	}
}
