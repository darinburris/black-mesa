/**
* @module tabs
* @description initializes your feature description goes here
* @author Amplifi Commerce Presentation Layer Technology Group
* @example
* &lt;div data-module="tabs"&gt;
*/

define(
	[
		'core/main',
		'jQuery'
	],

	function (
		ampBase,
		$
	) {

return (

function (module) {

	module.defaults = {};

	module.setName('tabs');

	module.setup = function () {

		var config = {
			// var-name: this.options.var-data-attribute
		};

		console.log('this.elem - >', this.elem);
		console.log('this.defaults - >', this.defaults);
		console.log('this.options - >', this.options);

		$('.tabs').on('click', 'li',

		function () {

			var	$this = this,
				rel = $(this).attr('data-rel');

			$('.tabs li.active', this.elem).removeClass('active');
			$(this).addClass('active');
			$('.tab-content').removeClass('active');
			$('#' + rel).addClass('active');

		}

		);

	};

	return module;

}(Object.create(ampBase))

);

}

);
