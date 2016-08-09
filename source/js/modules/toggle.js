/**
 * @module toggle
 * @description binds the click event to the question element
 * @author Amplifi Commerce Presentation Layer Technology Group
* @example
 * &lt;p class="prd-qust" data-module="toggle”&gt;
 */

define(
	[
		'jquery'
	],

	function ($) {

$('.toggle').click(

function (e) {

	var	$target = $(this).next(),
	$test = $(this);

	e.preventDefault();

	if ($test.children('div').hasClass('change-arrow-up') === true) {
		$test.children('div').addClass('change-arrow').removeClass('change-arrow-up');
	} else if ($test.children('div').hasClass('change-arrow') === true) {
		$test.children('div').addClass('change-arrow-up').removeClass('change-arrow');
	}

	$target.slideToggle(500,

	function () {}

	);

}

);

}

);
