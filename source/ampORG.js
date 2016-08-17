/**
 *
 *  AMP UI Api is the common Amplifi Commerce Javascript framework
 *
 */

/* jshint ignore:start */
@@<!--rjs-->
/* jshint ignore:end */

(

	function(){

		'use strict';

		/* jshint freeze:false */
		// Add ECMA262-5 method binding if not supported natively
		//
		if (!('bind' in Function.prototype)) {
			Function.prototype.bind= function(owner) {
				var that= this;
				if (arguments.length<=1) {
					return function() {
						return that.apply(owner, arguments);
					};
				} else {
					var args= Array.prototype.slice.call(arguments, 1);
					return function() {
						return that.apply(owner, arguments.length===0? args : args.concat(Array.prototype.slice.call(arguments)));
					};
				}
			};
		}

		// Add ECMA262-5 string trim if not supported natively
		//
		if (!('trim' in String.prototype)) {
			String.prototype.trim= function() {
				return this.replace(/^\s+/, '').replace(/\s+$/, '');
			};
		}

		// Add ECMA262-5 Array methods if not supported natively
		//
		if (!('indexOf' in Array.prototype)) {
			Array.prototype.indexOf= function(find, i /*opt*/) {
				if (i===undefined) {
					i= 0;
				}
				if (i<0) {
					i+= this.length;
				}
				if (i<0) {
					i = 0;
				}
				for (var n= this.length; i<n; i++) {
					if (i in this && this[i] === find) {
						return i;
					}
				}
				return -1;
			};
		}
		if (!('lastIndexOf' in Array.prototype)) {
			Array.prototype.lastIndexOf= function(find, i /*opt*/) {
				if (i===undefined) {
					i = this.length - 1;
				}
				if (i<0) {
					i += this.length;
				}
				if (i>this.length-1) {
					i = this.length - 1;
				}
				/**
				 * \@summary i++ because from-argument is sadly inclusive
				 * */
				for (i++; i-->0;)
				{
					if (i in this && this[i] === find) {
						return i;
					}
				}
				return -1;
			};
		}
		if (!('forEach' in Array.prototype)) {
			Array.prototype.forEach= function(action, that /*opt*/) {
				for (var i= 0, n= this.length; i<n; i++) {
					if (i in this) {
						action.call(that, this[i], i, this);
					}
				}
			};
		}
		if (!('map' in Array.prototype)) {
			Array.prototype.map= function(mapper, that /*opt*/) {
				var other = [];
				for (var i= 0, n= this.length; i<n; i++) {
					if (i in this) {
						other[i] = mapper.call(that, this[i], i, this);
					}
				}
				return other;
			};
		}
		if (!('filter' in Array.prototype)) {
			Array.prototype.filter= function(filter, that /*opt*/) {
				var other= [], v;
				for (var i=0, n= this.length; i<n; i++) {
					if (i in this && filter.call(that, v = this[i], i, this)) {
						other.push(v);
					}
				}
				return other;
			};
		}
		if (!('every' in Array.prototype)) {
			Array.prototype.every= function(tester, that /*opt*/) {
				for (var i= 0, n= this.length; i<n; i++) {
					if (i in this && !tester.call(that, this[i], i, this)) {
						return false;
					}
				}
				return true;
			};
		}
		if (!('some' in Array.prototype)) {
			Array.prototype.some= function(tester, that /*opt*/) {
				for (var i= 0, n= this.length; i<n; i++) {
					if (i in this && tester.call(that, this[i], i, this)) {
						return true;
					}
				}
				return false;
			};
		}

	}

)();


/** START APP CODE HERE **/
function getCurrentHost(){

	'use strict';

	var scriptHost = document.getElementsByTagName('script');
	var srcPath = scriptHost[scriptHost.length-1].src.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1];

	return '//' + srcPath;

}

require.config(

	{

		baseUrl : getCurrentHost() + '/source/js',

		paths: {
			'jQuery'                :   [
											'/*cdn*//ajax/libs/jquery/2.1.1/jquery.min',
											getCurrentHost() + '/source/js/lib/jquery/dist/jquery.min'
										],
			'jQuery.migrate'        :   [   '/*cdn*//ajax/libs/jquery-migrate/1.2.1/jquery-migrate.min',
											getCurrentHost() + '/source/js/lib/jquery.migrate/jquery-migrate-1.2.1.min'
										],

			'bxSlider'               :   [
											'//cdn.jsdelivr.net/bxslider/4.1.1/jquery.bxslider.min',
											getCurrentHost() + '/source/js/lib/bolster./jquery.bxslider.min'
										],
			'jQuery.easing'               :   [
											'/*cdn*//ajax/libs/jquery-easing/1.3/jquery.easing.min',
											getCurrentHost() + '/source/js/lib/bolster.bxSlider/plugins/jquery.easing.1.3'
										],
			'jQuery.fitvids'              :   [
											'/*cdn*//ajax/libs/fitvids/1.1.0/jquery.fitvids.min',
											getCurrentHost() + '/source/js/lib/bolster.bxSlider/plugins/jquery.fitvids'
										],
			'knockout'              :   [
											'/*cdn*//ajax/libs/knockout/3.2.0/knockout-min',
											getCurrentHost() + '/source/js/lib/knockout/dist/knockout'
										],
			'knockout.mapping'      :   [
											'/*cdn*//ajax/libs/knockout.mapping/2.4.1/knockout.mapping',
											getCurrentHost() + '/source/js/lib/knockout.mapping/knockout.mapping'
										],
			'font'                  :   [
											'/*cdn*//ajax/libs/requirejs-plugins/1.0.3/font',
											getCurrentHost() + '/source/js/lib/requirejs-plugins/src/font'
										],
			'propertyParser'        :   [
											'/*cdn*//ajax/libs/requirejs-plugins/1.0.3/propertyParser.min',
											getCurrentHost() + '/source/js/lib/requirejs-plugins/src/propertyParser'
										],
			'jQuery.validate'        :   [
											'/*cdn*//ajax/libs/jquery-validate/1.11.1/jquery.validate.min',
											getCurrentHost() + '/source/js/lib/jquery-validate/1.11.1/jquery.validate.min'
										],
			'modernizr'             :   [
											'/*cdn*//ajax/libs/modernizr/2.8.3/modernizr.min',
											getCurrentHost() + '/source/js/lib/modernizr/modernizr'
										],
			'colorbox'              :   [
											'/*cdn*//ajax/libs/jquery.colorbox/1.4.33/jquery.colorbox-min',
											getCurrentHost() + '/source/js/lib/colorbox/jquery.colorbox-min'
										],
			'hovIntent'             :   [
											'/*cdn*//ajax/libs/jquery.hoverintent/2013.03.11/hoverintent.min',
											getCurrentHost() + '/source/js/lib/jquery-hoverIntent/jquery.hoverintent'
										],
			'animatescroll'      :  getCurrentHost() + '/source/js/lib/animatescroll/animatescroll.min'
		},

		shim: {
			'jQuery' : {
				exports : '$'
			},
			'jQuery.validate' : {
				exports : 'validate',
				deps: ['jQuery']
			},
			'modernizr': {
				exports: 'modernizr'
			},
			'bxSlider' : {
				deps: [
						'jQuery',
						'jQuery.easing',
						'jQuery.fitvids'
					]
			},
			'knockout' : {
				exports: 'KO'
			},
			'mapping'  : {
				deps: ['knockout'],
				exports  : 'mapping'
			},
			'colorbox': {
				exports: 'colorbox',
				deps: [
					'jQuery'
				]
			},
			'hovIntent': {
				exports: 'hovIntent',
				deps: [
					'jQuery'
				]
			},
			'animatescroll': {
				exports: 'animatescroll',
				deps: [
					'jQuery'
				]
			}
		}

	}

);

(

	function(){

		'use strict';

		require(['modernizr','app'],//,'jQuery','font!google,families:[Open Sans:400,300,700,800]'
			function(app){
				console.log('start app');
				window.Amp = app;
			}
		);

	}

)();