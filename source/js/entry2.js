console.log('you in the hizzy2');
console.log('you in the hizzy2 again');

import checkName2 from './modules/logger';
import Modernizr from 'modernizr';
 
if (!Modernizr.touch) {
	console.log('We\'ve got touch');
} else {
	console.log('no touch');
}

checkName2('nader', 'jackson');

console.log('Modernizr = ' + Modernizr);