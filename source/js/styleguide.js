import checkName from 'logger';

checkName('nader', 'jackson');

if (Modernizr.canvas) {
	console.log('We\'ve got canvas');
} else {
	console.log('no canvas');
}

if (Modernizr.promises) {
	console.log('We\'ve got Promises');
} else {
	console.log('no Promises');
}
