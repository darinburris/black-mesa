/**
 * @module search-form
 * @description initializes your feature description goes here
 * @author Amplifi Commerce Presentation Layer Technology Group
 * @example
 * &lt;div data-module="search-form"&gt;
 */

define(
	[
		'core/main',
		'jQuery',
		'animatescroll'
	],

	function (
		ampBase,
		$,
		animatescroll
	) {

return (function (module) {

	module.defaults = {};

	module.setName('animatescroll');

	module.setup = function () {

		var config = {
			// var-name: this.options.var-data-attribute
		};

		console.log('this.elem - >', this.elem);
		console.log('this.defaults - >', this.defaults);
		console.log('this.options - >', this.options);

		$('[href^="#"]', this.elem).on('click',
		function (e) {
			var currLink = $(this).attr('href');
			e.preventDefault();

			$(currLink).animatescroll(
				{
					scrollSpeed: 1500,
					padding: 18,
					easing: 'easeOutQuint'
				}
			);
		}
		);

		//				bindEvents.call(this);

	};

	function bindEvents() {

		console.log('that is ' + this.elem);

	}

	return module;

}(Object.create(ampBase)));

}

);
