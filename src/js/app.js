// Макса для номера телефона
jQuery(function($){
	$('input[name="phone"]').mask("+38 (099) 999-99-99");
});

(function () {
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});

	$('.header__request a').click(function (e) {
		e.preventDefault();
		$('.header').height($('.header').height());
		$('.request-popup').css('display', 'flex').hide().fadeIn(300, 'linear', function() {
			$('.request-btn, #buttonBack').hide();
			$('.request-close').show();
			animateCss('.request-close', 'slideInRight');
			$('.header__reques').css('background-image', '');
		});
	});

	$('.request-close .close').click(function (e) {
		e.preventDefault();
		animateCss('.request-close', 'slideOutRight');
		$('.request-popup').fadeOut(300, 'linear', function() {
			$('.request-btn, #buttonBack').show();
			$('.request-close').hide();
			$('.header').attr('style', '');
		});
	});

	var linkServices = $('.navbar__list-item').filter(function() {
		return $(this).data('popup') == 'services';
	});

	$(linkServices).click(function (e) {
		e.preventDefault();
		$('.services-popup__container').css('margin-top', 76);
		$('.header').animate({
			height: 76
		});
		$('.services-popup').fadeToggle(300, 'linear', function() {
			if($(this).css('display') == 'block') {
				$('.header').animate().css({
					backgroundColor: '#fff',
					'z-index': 1001,
				});
				$('.header__request').css('align-self', 'flex-start');
			} else {
				$('.header').animate().attr('style', '');
				if ($('.header__button').css('opacity') == 0) {
					$('.header__button').animate({
						opacity: 1,
						top: 0,
					});
				}
				$('.header__request').css('align-self', 'center');
			}
			if ($('.header__button').css('opacity') == 0) {
				$('.header__button').animate({
					opacity: 1,
					top: 0,
				});
			}
		});

		$(document).mouseup(function (e) {
			var container = $('.services-popup');
			if (container.has(e.target).length === 0) {
				container.fadeOut();
				$('.header').animate().attr('style', '');
				if ($('.header__button').css('opacity') == 0) {
					$('.header__button').animate({
						opacity: 1,
						top: 0,
					});
				}
			}
		});
	});

	$('.work__content-list__item').click(function() {
		var id = $(this).data('id');
		$('.work__content-list__item').removeClass('active');
		$(this).addClass('active');
		$('.work__content-info__item').removeClass('active');
		$('.work__content-info__item').filter(function() {
			return $(this).data('id') == id;
		}).addClass('active');

	});

	$('.type__content-list__item').click(function(e) {
		e.preventDefault();

		var activeClass = 'active';
		var isTypeItem = $(this).data('type');
		var item = $(this);

		$('.type__content-list__item').filter(function() {
			return $(this).data('type') != isTypeItem;
		}).removeClass(activeClass)
			.children('.type-item__content')
			.children('.type-item__content-text, .type-item__content-button')
			.fadeOut();
		item.addClass(activeClass);

		if (isTypeItem == 'network') {
			changeSize('#networkBack', '437.3', '415.3');
			changeSize('#standaloneBack', '524.1', '408');
			changeSize('#hybridBack', '440', '415.1');

			setTimeout(function() {
				animateType('#networkBack', '#networkPath', 'M1.7,186.8C9.3,110.7,30.6,29.2,172.3,3.3c127.1-23.3,260.4,80.9,264.9,223.9c2.9,92.8-60.1,179.5-183,187.1 C94.8,424.2-15.1,355.6,1.7,186.8z');
				animateType('#standaloneBack', '#standalonePath', 'M151.1,197c0,0,2.4-52.5,107.5-49.4c50,1.5,125.5,29.3,113.8,63.6s-53.3,49.6-106.2,49.3 C213.3,260.2,143.9,245.1,151.1,197z');
				animateType('#hybridBack', '#hybridPath', 'M329.1,208.1c0.5,29-31.5,56.2-105,55c-73.5-1.2-140.4-29.2-107-78 c23.9-34.9,78.4-35.4,122-31C275.9,157.9,328.5,171.5,329.1,208.1z');
			});

			setTimeout(function() {
				item.children('.type-item__content')
					.children('.type-item__content-text, .type-item__content-button')
					.fadeIn();
			}, 500);
		} else if (isTypeItem == 'standalone') {
			changeSize('#standaloneBack', '524.1', '408');
			changeSize('#networkBack', '437.3', '415.3');
			changeSize('#hybridBack', '440', '415.1');

			animateType('#networkBack', '#networkPath', 'M110.2,201c6.8-21,31.7-40.9,103-48c63.9-6.3,113.7,20,116,59c1.5,25.3-30.2,48.9-92,51 C157,265.7,95.4,246.6,110.2,201L110.2,201');
			animateType('#standaloneBack', '#standalonePath', 'M1.3,178.7c0,0,5.5-189.5,252.5-178.2c117.6,5.4,295.1,105.7,267.4,229.3S395.8,408.8,271.5,408 S-15.8,352.4,1.3,178.7z');
			animateType('#hybridBack', '#hybridPath', 'M329.1,208.1c0.5,29-31.5,56.2-105,55c-73.5-1.2-140.4-29.2-107-78 c23.9-34.9,78.4-35.4,122-31C275.9,157.9,328.5,171.5,329.1,208.1z');

			setTimeout(function() {
				item.children('.type-item__content')
					.children('.type-item__content-text, .type-item__content-button')
					.fadeIn();
			}, 500);
		} else if (isTypeItem == 'hybrid') {
			changeSize('#networkBack', '437.3', '415.3');
			changeSize('#standaloneBack', '524.1', '408');
			changeSize('#hybridBack', '440', '415.1');

			animateType('#networkBack', '#networkPath', 'M110.2,201c6.8-21,31.7-40.9,103-48c63.9-6.3,113.7,20,116,59c1.5,25.3-30.2,48.9-92,51 C157,265.7,95.4,246.6,110.2,201L110.2,201');
			animateType('#standaloneBack', '#standalonePath', 'M151.1,197c0,0,2.4-52.5,107.5-49.4c50,1.5,125.5,29.3,113.8,63.6s-53.3,49.6-106.2,49.3 C213.3,260.2,143.9,245.1,151.1,197z');
			animateType('#hybridBack', '#hybridPath', 'M440,209.2c1.1,108.6-62.8,210.3-209.2,205.7S-48.9,305.6,17.6,123.2C65.1-7.3,173.8-9.5,260.7,7.3 C334.1,21.4,438.7,72.3,440,209.2z');

			setTimeout(function() {
				item.children('.type-item__content')
					.children('.type-item__content-text, .type-item__content-button')
					.fadeIn();
			}, 500);
		}
	});

	$('#nav-icon').click(function (e) {
		e.preventDefault();
		$('.navbar-mobile').fadeIn();
	});

	$('.navbar-close').click(function (e) {
		e.preventDefault();
		$('.navbar-mobile').fadeOut();
	})
})();

function animateType(back, path, pathPoints) {
	var networkBack = Snap(back);
	var networkPath = networkBack.select(path);
	var networkPathPoints = pathPoints;
	networkPath.animate({
		d: networkPathPoints
	}, 500, mina.linear);
}

function changeSize(item, width, height) {
	$(item).attr({
		'width': width,
		'height': height
	});
}

// Функция валидации почты
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
