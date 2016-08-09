/**
* @module module name goes here
* @description initializes your feature description goes here
* @author Amplifi Commerce Presentation Layer Technology Group
* @example
* &lt;div data-module="module name goes here"&gt;
*/

define(
	[
		'core/main'
	],

	function(

		ampBase

	){

		return (

			function(module){

				module.defaults = {};

				module.setName('name-goes-here');

				module.setup = function(){

					var config = {
						// var-name: this.options.var-data-attribute
					};

					//code goes here

					bindEvents.call(this);

				};

				function bindEvents(){

					console.log('that is ' + this.elem);

				}

				return module;

			}(Object.create(ampBase))

		);

	}

);