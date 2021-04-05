function angleOfTangentOnPath(thePath,thePerentage) {
	// thePath is a reference to the path
	// thePercentage is the length along the path 
	//     expressed as a percentage (0% - 100%) 
	
	theTangent = thePath.tangentOnPath(thePercentage);
	return radiansToDegrees(Math.atan2(theTangent[1],theTangent[0]))
}

thePath = thisComp.layer("Track").content("Path 1").path;
thePercentage = effect("Percentage")("Slider")/100;

angleOfTangentOnPath(thePath,thePercentage)
