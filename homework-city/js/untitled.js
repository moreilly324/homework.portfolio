$(document).ready(function() {
	
	$('#submit-btn').click(enter);
	$('#city-type').on(enter);

	function enter(){
		var city = $('#city-type').val();
		city = parseFloat(city);
		var newcity = showcity(city);

		$('#container').html(newcity);

		displayImage(newcity);

		return false;
	}

	function showcity (event){
		event.preventDefault();
		showimage = $('.nyc').show();
		showimage = $('.sf').show();
		showimage = $('.la').show();
		showimage = $('.austin').show();
		showimage = $('.sydney').show();
	}

	function displayImage(showimage){
		event.preventDefault();
		var citypic;

		if (showimage === New York City, New York, NYC){
			citypic = 'file:///Users/mattoreilly/Documents/Github/homework.portfolio/homework-city/images/nyc.jpg'
		} else if (showimage === San Francisco, SF, Bay Area){
			citypic = 'file:///Users/mattoreilly/Documents/Github/homework.portfolio/homework-city/images/sf.jpg'
		} else (showimage === Los Angeles, LA, LAX){
			citypic = 'file:///Users/mattoreilly/Documents/Github/homework.portfolio/homework-city/images/la.jpg'
		} else (showimage === Austin, ATX){
			citypic = 'file:///Users/mattoreilly/Documents/Github/homework.portfolio/homework-city/images/austin.jpg'
		} else (showimage === Sydney SYD){
			citypic = 'file:///Users/mattoreilly/Documents/Github/homework.portfolio/homework-city/images/sydney.jpg'
		}

	}

  });