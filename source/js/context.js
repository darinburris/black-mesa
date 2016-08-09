/**
* @module external-links
* @description searches DOM for anchors with a rel="external", then dynamically adds the target attribute with _blank as the value
* @author Amplifi Commerce Presentation Layer Technology Group this is a test
*
*/

define(
	[
		'jquery'
	],
	
	function(
		$
	){

		function getContext(context){

			var
			path = context.indexOf('/', -1),
			currContext = context.substring(path + 1);

			return currContext;

		}

		return {
			currContext : getContext
		};

	}

);