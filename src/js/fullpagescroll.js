(function () {
	$('.main-fullpage').fullpage({
		anchors: ['home', 'info', 'type', 'work', 'rate', 'complex', 'example', 'review', 'connect', 'contact'],
		scrollingSpeed: 1500,
		onLeave: function(origin, destination, direction) {
			if (origin.index == 1 && destination.index == 0) {
				setTimeout(function() {
					animateSVG('#electroBack', '#electroFrom', 'M988.9,0c0,0,0.1,882.6,0.1,994.8c-24.3,73.6-98,200.2-320.5,233.8 c-723.2,109.3-950.2-628.8-217.2-867.4C745.7,265.2,749.9,74,803,0H988.9L988.9,0z', 1000);
				}, 1500);
				animateSVG('#buttonBack', '#buttonFrom', 'M1718.4,0l-948,0', 1500);

				$('.electrostation__house-img, .electrostation__title, .electrostation__description, .electrostation__button, .electrostation__contact, .electrostation__switch, .header').css('animation-delay', '2.5s');
				$('.electrostation__house-img').css('animation-duration', '.5s');

				animateCss('.electrostation__house-img', 'fadeIn');
				animateCss('.electrostation__title', 'fadeInUp');
				animateCss('.electrostation__description', 'fadeInUp');
				animateCss('.electrostation__button', 'fadeInUp');
				animateCss('.electrostation__contact', 'fadeInUp');
				animateCss('.electrostation__switch', 'fadeInRight');

				$('.info__list-item:nth-child(1), .info__list-item:nth-child(2), .info__list-item:nth-child(3)').css('animation-delay', '.1s');
				animateCss('.info__list-item:nth-child(1)', 'fadeOutDownBig');
				animateCss('.info__list-item:nth-child(2)', 'fadeOutDownBig');
				animateCss('.info__list-item:nth-child(3)', 'fadeOutDownBig');
			}

			if (origin.index == 2 && direction == 'up') {
				animateCss('.info__list-item:nth-child(1)', 'zoomIn');
				animateCss('.info__list-item:nth-child(2)', 'zoomIn');
				animateCss('.info__list-item:nth-child(3)', 'zoomIn');
			}

			if (origin.index == 3 && direction == 'up') {

			}

			if (origin.index == 4 && direction == 'up') {

			}

			if (origin.index == 5 && direction == 'up') {

			}

			if (origin.index == 6 && direction == 'up') {

			}

			if (origin.index == 7 && direction == 'up') {

			}

			if (origin.index == 8 && direction == 'up') {

			}

			if (origin.index == 9 && direction == 'up') {

			}


			if (origin.index == 0 && direction == 'down') {
				$('.electrostation__contact').css({
					'animation-duration': '2s'
				});
				$('.electrostation__house-img').css({
					'animation-duration': '1.5s',
					'animation-delay': '.1s'
				});
				animateCss('.electrostation__house-img', 'fadeOut');
				animateCss('.electrostation__contact', 'fadeOut');
				animateCss('.electrostation__switch', 'fadeOutRight');
				animateCss('.electrostation__info', 'fadeOut');

				animateCss('.info__list-item:nth-child(1)', 'fadeInDown');
				animateCss('.info__list-item:nth-child(2)', 'fadeInDown');
				animateCss('.info__list-item:nth-child(3)', 'fadeInDown');

				animateSVG('#electroBack', '#electroFrom', 'M1718.4,0l-948,0', 750);
				animateSVG('#buttonBack', '#buttonFrom', 'M0,0c0,0-0.4,80,180,80c0-46.9,0-80,0-80H0z', 1000);
			}

			if (origin.index == 1 && direction == 'down') {
				$('.info__list-item:nth-child(1)').css(
					{'animation-delay': '.1s', 'animation-duration': '1s'}
				);
				$('.info__list-item:nth-child(2)').css(
					{'animation-delay': '.2s', 'animation-duration': '1s'}
				);
				$('.info__list-item:nth-child(3)').css(
					{'animation-delay': '.3s', 'animation-duration': '1s'}
				);
				animateCss('.info__list-item:nth-child(1)', 'fadeOutUpBig');
				animateCss('.info__list-item:nth-child(2)', 'fadeOutUpBig');
				animateCss('.info__list-item:nth-child(3)', 'fadeOutUpBig');

				$('.type__content-list__item').css(
					{'animation-delay': '1s', 'animation-duration': '1s'}
				);
				animateCss('.type__content-list__item:nth-child(1)', 'zoomIn');
				animateCss('.type__content-list__item:nth-child(2)', 'zoomIn');
				animateCss('.type__content-list__item:nth-child(3)', 'zoomIn');
				animateCss('.type__content-title', 'slideInLeft');
			}

			if (origin.index == 2 && direction == 'down') {
				$('.type__content-list__item').css(
					{'animation-delay': '.1s'}
				);
				animateCss('.type__content-list__item:nth-child(1)', 'fadeOut');
				animateCss('.type__content-list__item:nth-child(2)', 'fadeOut');
				animateCss('.type__content-list__item:nth-child(3)', 'fadeOut');

				$('.work__content-list__item:nth-child(1)').css(
					{'animation-delay': '1s'}
				);
				$('.work__content-list__item:nth-child(2)').css(
					{'animation-delay': '1.1s'}
				);
				$('.work__content-list__item:nth-child(3)').css(
					{'animation-delay': '1.2s'}
				);
				$('.work__content-list__item:nth-child(4)').css(
					{'animation-delay': '1.3s'}
				);
				$('.work__content-list__item:nth-child(5)').css(
					{'animation-delay': '1.4s'}
				);
				$('.work__content-list__item:nth-child(6)').css(
					{'animation-delay': '1.5s'}
				);
				$('.work__content-list__item:nth-child(7)').css(
					{'animation-delay': '1.6s'}
				);
				animateCss('.work__content-list__item:nth-child(1)', 'slideInLeft');
				animateCss('.work__content-list__item:nth-child(2)', 'slideInLeft');
				animateCss('.work__content-list__item:nth-child(3)', 'slideInLeft');
				animateCss('.work__content-list__item:nth-child(4)', 'slideInLeft');
				animateCss('.work__content-list__item:nth-child(5)', 'slideInLeft');
				animateCss('.work__content-list__item:nth-child(6)', 'slideInLeft');
				animateCss('.work__content-list__item:nth-child(7)', 'slideInLeft');

				$('.work__content-info__item-info > .message').css(
					{'animation-delay': '1.7s'}
				);
				$('.work__content-info__item-info > .days').css(
					{'animation-delay': '1.8s'}
				);
				$('.work__content-info__item-info > .button').css(
					{'animation-delay': '1.9s'}
				);
				animateCss('.work__content-info__item-info > .message', 'fadeInDown');
				animateCss('.work__content-info__item-info > .days', 'fadeIn');
				animateCss('.work__content-info__item-info > .button', 'fadeInUp');

				$('.work__content-info__item-image').css(
					{'animation-delay': '2s'}
				);
				animateCss('.work__content-info__item-image', 'fadeInRight');
			}

			if (origin.index == 3 && direction == 'down') {
				$('.rate__content-image').css(
					{'animation-delay': '1s'}
				);
				$('.rate__content-info').css(
					{'animation-delay': '1.1s'}
				);
				animateCss('.rate__content-image', 'fadeInLeft');
				animateCss('.rate__content-info', 'fadeInRight');
			}

			if (origin.index == 4 && direction == 'down') {
				$('.rate__content-image').css(
					{'animation-delay': '.1s'}
				);
				$('.rate__content-info').css(
					{'animation-delay': '.1s'}
				);
				animateCss('.rate__content-image', 'fadeOutLeft');
				animateCss('.rate__content-info', 'fadeOutRight');

				$('.complex__content-title').css(
					{'animation-delay': '1s'}
				);
				$('.complex__content-list').css(
					{'animation-delay': '1.2s'}
				);
				animateCss('.complex__content-title', 'fadeInDown');
				animateCss('.complex__content-list', 'fadeInUp');
			}

			if (origin.index == 5 && direction == 'down') {
				$('.example__content-title').css(
					{'animation-delay': '1s'}
				);
				$('.example__content-list').css(
					{'animation-delay': '1.2s'}
				);
				animateCss('.example__content-title', 'fadeInDown');
				animateCss('.example__content-list', 'fadeInUp');


			}

			if (origin.index == 6 && direction == 'down') {
				$('.example__content-title').css(
					{'animation-delay': '.1s'}
				);
				$('.example__content-list').css(
					{'animation-delay': '.1s'}
				);
				animateCss('.example__content-title', 'fadeOutUp');
				animateCss('.example__content-list', 'fadeOutRight');

				$('.review__content-title').css(
					{'animation-delay': '.1s'}
				);
				$('.example__content-list').css(
					{'animation-delay': '.1s'}
				);
				animateCss('.review__content-title', 'fadeInDown');
				animateCss('.example__content-list', 'fadeOutRight');
			}

			if (origin.index == 7 && direction == 'down') {

			}

			if (origin.index == 8 && direction == 'down') {

			}

			if (origin.index == 9 && direction == 'down') {

			}
		}
	});

	$('.green-fullpage').fullpage({
		anchors: ['rate', 'info', 'work', 'complex', 'connect', 'contact'],
		scrollingSpeed: 1000,
	});

	$('.income-fullpage').fullpage({
		anchors: ['info', 'equipment', 'work', 'miscount', 'services', 'example', 'connect', 'contact'],
		scrollingSpeed: 1000,
		afterSlideLoad: function(section, origin, destination, direction) {
			if(section.anchor == 'info' && destination.index == 1){
				var sb = Snap('#buttonBack');
				var button = sb.select('#buttonFrom');
				var buttonPoints = "M0,0c0,0-0.4,80,180,80c0-46.9,0-80,0-80H0z";
				button.animate({
					d: buttonPoints
				}, 1000, mina.linear);
			}
		},
	});
})();

function animateSVG(element, path, points, delay) {
	var s = Snap(element);
	var path = s.select(path);
	var pathPoints = points;
	path.animate({
		d: pathPoints
	}, delay, mina.linear);
}

function animateCss(element, animationName, callback) {
    var node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
