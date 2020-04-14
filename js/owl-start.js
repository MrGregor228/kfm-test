$(document).ready(function () {

	var owl = $('.slider-1'),
		owlSecond = $('.slider-2');

	owl.owlCarousel({// Owl carousel config
		loop: true,
		nav: true,		
		pagination: true,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
		items: 4,
		// mouseDrag: false,
		// touchDrag: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			768: {
				items: 2,
				nav: true
			},
			1000: {
				items: 3,
				nav: true,
				loop: true
			},
			1280: {
				items: 4,
				nav: true,
				loop: true
			}
		}
	});

	owlSecond.owlCarousel({// Owl carousel config
		loop: true,
		nav: true,		
		pagination: true,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
		items: 3,
		// mouseDrag: false,
		// touchDrag: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			768: {
				items: 2,
				nav: true
			},
			1000: {
				items: 3,
				nav: true,
				loop: true
			},
			1280: {
				items: 3,
				nav: true,
				loop: true
			}
		}
	});
	
	$('.falseNavigationLeft').click(function() {// Go to the previous item
		owl.trigger('prev.owl.carousel', [300]);
	});
	
	$('.falseNavigationRight').click(function() {// Go to the net item	
		owl.trigger('next.owl.carousel', [300]);
	});
	$('.falseNavigationLeftSecond').click(function() {// Go to the previous item
		owlSecond.trigger('prev.owl.carousel', [300]);
	});
	
	$('.falseNavigationRightSecond').click(function() {// Go to the net item	
		owlSecond.trigger('next.owl.carousel', [300]);
	});
});