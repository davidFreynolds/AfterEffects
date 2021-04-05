function angleFromThreeSides(side_a, side_b, side_c) {
	// side_a, side_b, and side_c are the lengths of the sides
	// of the triangle.  side_c is the side across from the angle
	try {
		theAngle = Math.acos(
        		(	Math.pow(side_b, 2) +
          			Math.pow(side_c, 2) -
          			Math.pow(side_a, 2)
        		) /
			(2 * side_b * side_c)
		);
	} catch (err) {
		theAngle = 0;
	}

	return theAngle;
  }
