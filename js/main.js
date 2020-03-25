$(document).ready(function() {
	$(document).on('scroll', function() {
		if ($(document).scrollTop() > 100) {
			$('header').addClass('shrink');
			$('.down-arrow-container').fadeOut();
		} else {
			$('header').removeClass('shrink');
			$('.down-arrow-container').fadeIn();
		}
	});

	$('.logo').click(function() {
		$('html, body').animate({ scrollTop: 0 }, 200);
	});

	$('.grid').colcade({
		columns: '.grid-col',
		items: '.grid-item'
	});

	$('.grid').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		}
	});
});
