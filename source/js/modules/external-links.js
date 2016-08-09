define(['core/main', 'jQuery'],

function (ampBase, $) {

return (function (module) {

	module.defaults = {};

	module.setName('external-links');

	module.setup = function () {

		let callbacks = [];

		var	config = {},// var-name: this.options.var-data-attribute
			links = $('a[rel="external"]'),
			i;

		var numbers = [1,2,3,4,5];
		var timesTwo = numbers.map((number) => number * 2);
		console.log('timesTwo = ' + timesTwo); // [2, 4, 6, 8, 10]

		console.log('this.elem - >', this.elem);
		console.log('this.defaults - >', this.defaults);
		console.log('this.options - >', this.options);

		for (i = 0; i < links.length; i++) {

			$(links[i]).attr('target', '_blank');

		}

	};

	function bindEvents() {

		console.log('that is ' + this.elem);

	}

	return module;

}(Object.create(ampBase)));

}

);
