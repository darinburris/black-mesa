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
				loop: false,
				responsive: {
					// breakpoint from 0 up
					0: {
						items: 2,
						dots: true,
						nav: true
					},
					// breakpoint from 480 up
					480: {
						items: 4,
						dots: true,
						nav: true
					},
					// breakpoint from 768 up
					768: {
						items: 6,
						dots: false,
						nav: false
					}
				}
			}
		);

		$('.testimonials-carousel', '.clp #testimonials').owlCarousel(
			{
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				dots: true,
				nav: true,
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
					736: {
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
