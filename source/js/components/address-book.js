	console.log('testy = ' + testy);

	(function() {

		//Get the contents of the template (_currentScript is available with webcomponents.js, use currentScript if you don't use this Polyfill)
		var template = document._currentScript.ownerDocument.querySelector('template');
		//Create a prototype for this component
		var proto = Object.create(HTMLElement.prototype);

		//When an instance of the custom element is created
		proto.createdCallback = function() {

			var clone = document.importNode(template.content, true);
			this.createShadowRoot().appendChild(clone);

			var companyName = this.shadowRoot.querySelector('#companyName');
			var address = this.shadowRoot.querySelector('#address');
			var country = this.shadowRoot.querySelector('#country');
			var website = this.shadowRoot.querySelector('#website a');
			var mission = this.shadowRoot.querySelector('#mission');
			var description = this.shadowRoot.querySelector('#description');

 			this.callMe(this, companyName, address, country, website, mission, description);

//console.log('$month = ' + $month);

		};

		//When an instance of custom element is attached to the DOM
		proto.attachedCallback = function() {

			console.log('inside address-book');

		};

		//When an instance of custom element is attached to the DOM
		proto.detachedCallback = function(){

		}

		//When an attribute of the custom element is added or updated or removed
		proto.attributeChangedCallback = function(){

		}

		proto.callMe = function(elem, companyName, address, country, website, mission, description) {

			console.log(elem);
			console.log('companyName = ' + companyName);
			console.log('address = ' + address);

			var xhr = new XMLHttpRequest();
			xhr.open('GET', '/data/results.json', true);

			// If specified, responseType must be empty string or "text"
			xhr.responseType = 'json';

			xhr.onload = function () {
				if (xhr.readyState === xhr.DONE) {
					if (xhr.status === 200) {
						var orgData = xhr.response['organization'];

						companyName.innerHTML = orgData.name;
						address.innerHTML = orgData.address1;
						country.innerHTML = orgData.country;
						website.innerHTML = orgData.website;
						website.setAttribute('href',orgData.website);
						mission.innerHTML = orgData.mission;
						description.innerHTML = orgData.description;

					}
				}
			};

			xhr.send(null);

		};

		//Register the element with the document
		document.registerElement('address-book', {prototype: proto});

		

	}());