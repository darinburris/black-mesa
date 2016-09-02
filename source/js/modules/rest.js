import Axios from 'axios';

export function fetch(endpoint){

console.log('inside fetch and ednpoint = ' + endpoint);

	Axios.get(endpoint)
		.then((response) => {return response.data;})
		.catch((err) => {return err;})

}
