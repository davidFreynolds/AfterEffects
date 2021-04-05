function AngleFromLawOfCosines(side_a, side_b, side_c) {
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
