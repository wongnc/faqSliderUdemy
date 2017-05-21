// Accordian
var action="click";
var speed ="500";

$(document).ready(function(){
	//Question handler
	$('li.q').on(action, function(){
		//next item after .q which is .a
		$(this).next()
			.slideToggle(speed)
				//select all other answers
				.siblings('li.a')
					.slideUp();
		//Get image for active question			
		var img = $(this).children('img');
		//Remove the 'rotate' class for all images except the active
		$('img').not(img).removeClass('rotate');
		//Toggle rotate class
		img.toggleClass('rotate');
	});
});