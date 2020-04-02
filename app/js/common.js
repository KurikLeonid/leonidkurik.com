$(function() {
		$('.work-preview__container').slick({
			arrows: false,
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear',
			verticalSwiping: true
		});
		$('.work-preview__container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.work-name').slick('slickNext');
			$('.work-info__amount').slick('slickNext');
			$('.work-type').slick('slickNext');
			$('.slider__pagination_mouse').slick('slickNext');
			$('.work').slick('slickNext');
		});		
});

$('.work-name').slick({
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

$(function() {
	$('.slider__pagination_mouse').slick({
		arrows: false,
		infinite: true,
		speed: 100,
		fade: true,
		verticalSwiping: true
		});	
		$('.slider__pagination_mouse').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.work-name').slick('slickNext');
			$('.work-info__amount').slick('slickNext');
			$('.work-type').slick('slickNext');
			$('.work-preview__container').slick('slickNext');
		});		
});