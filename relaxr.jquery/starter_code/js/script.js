$(document).ready(function() {
	
	$('.readmore').click(showmore);
	$('.readless').click(showless);
	$('.learnmore').click(showthis);


	function showmore (event)	{
		event.preventDefault();
		$('#show-this-on-click').slideDown();
		$('.readmore').hide();
		$('.readless').show();
	}

	function showless (event)	{
		event.preventDefault();
		$('#show-this-on-click').slideUp();
		$('.readless').hide();
		$('.readmore').show();
	}

	function showthis (event)	{
		event.preventDefault();
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	}
})