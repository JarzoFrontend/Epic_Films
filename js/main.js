'use strict';

$(function () {

	$("a[href*='#']").click(function () {
		$("body").animate({
			scrollTop: $(this.hash).offset().top - 50
		}, 500);
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() >= 50) {
			$("#menu").addClass("scroll");
			$(".text_menu").removeClass("text_menu").addClass("text_move");
			$(".brand_logo_white").removeClass("brand_logo_white").addClass("brand_logo_black");
			$("#menu").css({
				"transition": "all 0.3s"
			});

		} else {
			$("#menu").removeClass("scroll");
			$(".text_move").removeClass("text_move").addClass("text_menu");
			$(".brand_logo_black").removeClass("brand_logo_black").addClass("brand_logo_white");
		}
	});

	if ($(window).scrollTop() >= 50) {
		$("#menu").addClass("scroll");
	}
});