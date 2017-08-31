import 'owl.carousel';

$(document).ready(
	function(){

		$('.hero-carousel', '.clp #hero').owlCarousel(
			{
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				items: 1,
				loop: true,
				dots: false,
				nav: true
			}
		);

		$('.categories-carousel', '.clp #categories').owlCarousel(
			{
				dots: false,
				loop: false,
				responsive: {
					// breakpoint from 0 up
					0: {
						items: 3
					},
					// breakpoint from 480 up
					480: {
						items: 4
					},
					// breakpoint from 768 up
					768: {
						items: 6
					}
				}
			}
		);

		$('.testimonials-carousel', '.clp #testimonials').owlCarousel(
			{
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				items: 1,
				loop: true
			}
		);

		$('.brochures-carousel', '.clp #brochures').owlCarousel(
			{
				dots: false,
				responsive: {
					// breakpoint from 0 up
					0: {
						items: 2
					},
					// breakpoint from 768 up
					768: {
						items: 4
					},
					1000: {
						items: 6
					}
				}
			}
		);

	}

);
