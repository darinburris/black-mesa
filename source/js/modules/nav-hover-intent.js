/**
* @module mega-nav-hover-intent
* @description initializes hover intent on mega nav
* @author Amplifi Commerce Presentation Layer Technology Group
* @example
* &lt;ul class="nav-list" data-module="mega-nav-hover-intent"&gt;
*/

define(
	[
		'core/main',
		'hovIntent'
	],

	function (
		ampBase,
		hovIntent
	) {

return (

function (module) {

	module.defaults = {};

	module.setName('nav-hover-intent');

	module.setup = function () {

		var	config = {
			target: this.options.hovertarget,
			parent: this.options.hoverparent
		},
		parent;

		console.log('options = ' + this.options);

		if (config.parent) {
			parent = config.parent;
		} else {
			parent = config.target;
		}

		$(config.target).hoverIntent(

		function () {
			console.log('hover in');
			console.log('parent = ' + parent);
			$(parent).addClass('active');
		},

		function () {
			console.log('hover out');
			console.log('parent = ' + parent);
			$(parent).removeClass('active');
		}

		);

	};

	return module;

}(Object.create(ampBase))

);

}

);
