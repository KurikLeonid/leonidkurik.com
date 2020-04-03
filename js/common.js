$(function () {
	$('.work-preview__container').slick({
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		verticalSwiping: true
	});
	$('.work-preview__container').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$('.go-to__link').slick('slickNext');
		$('.work-name').slick('slickNext');
		$('.work-info__amount').slick('slickNext');
		$('.work-type').slick('slickNext');
		$('.slider__pagination_mouse').slick('slickNext');
		$('.work').slick('slickNext');
	});
	$('.work-name').slick({
		arrows: false,
		infinite: true,
		speed: 100,
		fade: true,
		verticalSwiping: true
	});

	$('.go-to__link').slick({
		arrows: false,
		infinite: true,
		speed: 100,
		fade: true,
		verticalSwiping: true
	});

	$('.work-info__amount').slick({
		arrows: false,
		infinite: true,
		speed: 100,
		fade: true,
		verticalSwiping: true
	});

	$('.work-type').slick({
		arrows: false,
		infinite: true,
		speed: 100,
		fade: true,
		verticalSwiping: true
	});

	$('.work').slick({
		arrows: false,
		infinite: true,
		speed: 100,
		fade: true,
		verticalSwiping: true
	});


	$('.slider__pagination_mouse').slick({
		arrows: false,
		infinite: true,
		speed: 100,
		fade: true,
		verticalSwiping: true
	});
	$('.slider__pagination_mouse').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$('.work-name').slick('slickNext');
		$('.work-info__amount').slick('slickNext');
		$('.work-type').slick('slickNext');
		$('.work-preview__container').slick('slickNext');
		$('.go-to__link').slick('slickNext');
	});

	const onwheel = (event) => {
		event.preventDefault();
		event.stopPropagation();
		if (event.originalEvent.wheelDelta >= 0) {
			$('.work-preview__container').slick('slickNext');
		}
		else {
			$('.work-preview__container').slick('slickPrev');
		}
		return false
	};


	const addMouseListener = () => {
		console.log('2');
		$(window).bind('mousewheel', onwheel);
	};

	const removeMouseListener = () => {
		console.log('1');
		$(window).unbind('mousewheel', onwheel);
	};

	$('.work-preview__container').on('mouseenter', addMouseListener).on('mouseleave', removeMouseListener);
});

