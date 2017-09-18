//Pseudocode:

//Upon enter or submit:
	//pull up NYC img as background if keywords entered
	//pull up SF img as background if keywords entered
	//pull up LA img as background if keywords entered
	//pull up Austin img as background if keywords entered
	//pull up Sydney img as background if keywords entered
//Images must be hidden upon refresh

function changeBackground() {

	var tag = document.getElementById("city-type").value;
	if (tag == "LA" || tag == "Los Angeles" || tag =="LAX") {
	document.body.style.backgroundImage = "url('images/la.jpg')";
	} else if (tag == "Austin" || tag == "ATX") {
	document.body.style.backgroundImage = "url('images/austin.jpg')";
	} else if (tag == "NYC" || tag == "New York City" || tag == "New York") {
	document.body.style.backgroundImage = "url('images/nyc.jpg')";
	} else if (tag == "SF" || tag == "San Francisco" || tag == "Bay Area") {
	document.body.style.backgroundImage = "url('images/sf.jpg')";
	} else if (tag == "Sydney" || tag == "SYD") {
	document.body.style.backgroundImage = "url('images/sydney.jpg')";
	} else
	alert("tag did not match")
	}