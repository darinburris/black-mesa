/**
* @module post-message
* @description initializes caroufredsel on this.elem
* @author Amplifi Commerce Presentation Layer Technology Group hopenthis works
* @example
* <div data-module="home-carousel" data-visible="2" data-duration="1" data-play="false">
*/

define(
	[
		'core/main'
	],

	function (

		ampBase

	) {

return (

function (module) {

	module.defaults = {};

	module.setName('post-message');

	module.setup = function () {

		var defaults = {},
			config = {
				domain: this.options.domain,
				destination: this.options.destination
			};

		console.log('domain = ' + config.domain);
		console.log('destination = ' + config.destination);

		$('.click-me').on('click',

		function (e) {
			console.log('help!!');
			e.preventDefault();
			window.parent.postMessage('"success"', config.destination);
		}

		);

	}; /* module.setup */

	return module;

}(Object.create(ampBase))

);

}

);
