(function () {
	$('.example-carousel').slick({
		infinite      : true,
		slidesToShow  : 3,
		slidesToScroll: 3,
		arrows        : true,
		variableWidth : true,
		nextArrow     : '<div class="next-arrow"><img src="img/icon/Arrow.svg" alt="" /></div>',
		prevArrow     : '<div class="prev-arrow"><img src="img/icon/Arrow.svg" alt="" /></div>',
		asNavFor	  : '.popup-example',
		responsive	  : [
			{
				breakpoint: 1536,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				},
			},
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.popup-example').slick({
		infinite      : false,
		slidesToShow  : 1,
		slidesToScroll: 1,
		arrows        : true,
		fade          : true,
		nextArrow     : '<div class="next-arrow"><img src="img/icon/Arrow.svg" alt="" /></div>',
		prevArrow     : '<div class="prev-arrow"><img src="img/icon/Arrow.svg" alt="" /></div>',
		asNavFor      : '.example-carousel',
	});

	$('.complex__content-list').slick({
		infinite      : false,
		slidesToShow  : 3,
		slidesToScroll: 1,
		arrows        : false,
		responsive	  : [
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					centerMode: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '15px'
				}
			}
		]
	});

	$('.review__content-list').slick({
		infinite      : false,
		slidesToShow  : 1,
		slidesToScroll: 1,
		arrows        : true,
		fade          : true,
		adaptiveHeight: true,
		nextArrow     : '<div class="review-next"><img src="img/icon/Arrow.svg" alt="" /></div>',
		prevArrow     : '<div class="review-prev"><img src="img/icon/Arrow.svg" alt="" /></div>',
	});

	if ($(window).width() <= 1024) {
		$('.info__list').slick({
			infinite      : false,
			slidesToShow  : 1,
			slidesToScroll: 1,
			arrows		  : false
		});

		$('.work__content-list').slick({
			infinite      : false,
			slidesToShow  : 4,
			slidesToScroll: 1,
			arrows		  : false,
			variableWidth : true,
			responsive	  : [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						centerPadding: '60px'
					}
				}
			]
		});

		$('.footer__content-info__menu').slick({
			infinite      : false,
			slidesToShow  : 1,
			slidesToScroll: 1,
			centerMode	  : true,
			centerPadding : '80px',
			arrows		  : false,
			variableWidth : true,
		});
	} else {
		$('.info__list').slick('unslick');
		$('.work__content-list').slick('unslick');
		$('.footer__content-info__menu').slick('unslick');
	}
})();
