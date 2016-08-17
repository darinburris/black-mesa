//This is a sample file for the es6 resolver webpack loader

let checkName= (firstName, lastName) => {
	if(firstName !== 'nader' || lastName !== 'dabit') {
		console.log('You are not Nader Dabit');
	} else {
		console.log('You are Nader Dabit');
	}
}
checkName('nader', 'dabit');

console.log(typeof checkName);