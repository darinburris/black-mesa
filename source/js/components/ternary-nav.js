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

			//Grab the elements from the shadow root
			this.$externalLink = this.shadowRoot.querySelectorAll('ul a[rel="external"]');

			var
			links = this.$externalLink,
			i;

			this.callMe(this.$externalLink);
			this.callMe(links.length);

			this.setAttr(links, 'target', '_blank');

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

		proto.setAttr = function(elem, attr, val) {

			var i;

			for (i = 0; i < elem.length; i++) { 
				elem[i].setAttribute(attr, val);
			}

		};

		//Register the element with the document
		document.registerElement('ternary-nav', {prototype: proto});

	}());