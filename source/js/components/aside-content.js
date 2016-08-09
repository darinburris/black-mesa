	var testy = 'what\'s up?';

	(function() {

		//Get the contents of the template (_currentScript is available with webcomponents.js, use currentScript if you don't use this Polyfill)
		var template = document._currentScript.ownerDocument.querySelector('template');
		//Create a prototype for this component
		var proto = Object.create(HTMLElement.prototype);

		//When an instance of the custom element is created
		proto.createdCallback = function() {

			var clone = document.importNode(template.content, true);
			this.createShadowRoot().appendChild(clone);

		};

		//When an instance of custom element is attached to the DOM
		proto.attachedCallback = function() {

			var test = this.getAttribute('role');

			var imOutside = document.getElementById('testy');

			this.callMe('attribute test = ' + test);
			this.callMe('id imOutside = ' + imOutside);

		};

		//When an instance of custom element is attached to the DOM
		proto.detachedCallback = function(){

		}

		//When an attribute of the custom element is added or updated or removed
		proto.attributeChangedCallback = function(){

		}

		proto.callMe = function(message) {
			console.log(message);
		};

		//Register the element with the document
		document.registerElement('aside-content', {prototype: proto});

	}());