export default function checkName(firstName, lastName) {
	if (firstName !== 'nader' || lastName !== 'dabit') {
		console.log('You are not Nader Dabit');
	} else {
		console.log('You are Nader Dabit');
	}
}

export function checkName2(firstName, lastName) {
	if (firstName !== 'nader' || lastName !== 'dabit') {
		console.log('You are not Nader Dabit');
	} else {
		console.log('You are Nader Dabit');
	}
}
