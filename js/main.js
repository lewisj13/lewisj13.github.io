(function($) {
	"use strict"

	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

	});

})(jQuery);
