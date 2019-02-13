$(document).ready(function(){

	$('ol li a').each(function(i) {
		var preview = $('#image');
		var final_x = i * -155;
		$(this).mouseover(function() {
			preview.animate({
				"left": final_x
				},{
					queue: false,
				});
		});
	});

	});
