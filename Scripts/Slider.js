sliderInt =1;
sliderNext =2;

$(document).ready( function () {
	$('#slider>Img#1').fadeIn(300);
	startSlider();
	
});


function startSlider() {
	count = $("#slider>Img").length();
	
	loop = setInterval(function() {
	
	$("#slider>Img").fadeOut(300);
	$("#slider>Img#"+sliderNext).fadeIn(300);
	
	sliderInt = sliderNext;
	sliderNext = sliderNext+1;
	
	}, 3000)
	
}