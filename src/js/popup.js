(function () {
	// Example popup
	$('.example__content-list__item').click(function (e) {
		e.preventDefault();
		var index = $(this).data('slick-index');
		$('.popup').css('display', 'flex').hide().fadeIn();
		$('.popup-example').slick("refresh");
		$('.popup-example').slick('slickGoTo', parseInt(index), true);
	});

	$('.popup-close').click(function (e) {
		e.preventDefault();
		$('.popup').fadeOut();
	});

	$(document).mouseup(function (e) {
		var container = $('.popup');
		if (container.has(e.target).length === 0)
			container.fadeOut();
	});
	// ----
})();
