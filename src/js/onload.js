$(window).on('load', function () {
	$('body').animate({
		opacity: 1
	});

	var activeClass = 'active';
	var item = $('.type__content-list__item').filter(function() {
		return $(this).data('type') == 'network';
	});

	item.addClass(activeClass);

	changeSize('#networkBack', '437.3', '415.3', '0 0 437.3 415.3');
	animateType('#networkBack', '#networkPath', 'M1.7,186.8C9.3,110.7,30.6,29.2,172.3,3.3c127.1-23.3,260.4,80.9,264.9,223.9c2.9,92.8-60.1,179.5-183,187.1 C94.8,424.2-15.1,355.6,1.7,186.8z');

	setTimeout(function() {
		item.children('.type-item__content')
			.children('.type-item__content-text, .type-item__content-button')
			.fadeIn();
	}, 500);

	animateSVG('#electroBack', '#electroFrom', 'M988.9,0c0,0,0.1,882.6,0.1,994.8c-24.3,73.6-98,200.2-320.5,233.8 c-723.2,109.3-950.2-628.8-217.2-867.4C745.7,265.2,749.9,74,803,0H988.9L988.9,0z', 1000);

	$('.electrostation__house-img, .electrostation__title, .electrostation__description, .electrostation__button, .electrostation__contact, .electrostation__switch, .header').css('animation-delay', '1.2s');
	$('.electrostation__house-img').css('animation-duration', '.5s');

	animateCss('.electrostation__house-img', 'fadeIn');
	animateCss('.electrostation__title', 'fadeInUp');
	animateCss('.electrostation__description', 'fadeInUp');
	animateCss('.electrostation__button', 'fadeInUp');
	animateCss('.electrostation__contact', 'fadeInUp');
	animateCss('.electrostation__switch', 'fadeInRight');
	animateCss('.header', 'fadeInDown');
});
