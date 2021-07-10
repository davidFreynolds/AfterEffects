function getStyledAttribute (effectName,effectType,defaultValue) {
	var theAttribute; // value to be returned by function
	var theStyleLayer; // layer reference that might have style info
	try 
		{ // try to find a local Effect Control with effectName of effectType.
			theAttribute= effect(effectName)(effectType);
		} 
	catch (err) 
		{	
			try 
				{ // try to find a Layer Control called "Style" ...
					theStyleLayer = effect("Style")("Layer");
					// ... that points to layer Effect Control with effectName of effectType
					theAttribute = theStyleLayer.effect(effectName)(effectType);
				}
			catch (err)
				{	// give up, use the defaultValue
					theAttribute = defaultValue;			
				}
		}
		return theAttribute;
	}

getStyledAttribute ("Fill Opacity","Slider",value)
