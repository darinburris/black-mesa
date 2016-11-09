import Axios from 'axios';

export function fetchStoreCats(){

	return function(dispatch){

		Axios.get('http://localhost:3009/store')
		.then(

			(response) => {

				dispatch({ type: 'FETCH_GLOBAL_CATEGORIES_FULFILLED', payload: response.data.storecategories });

			}

		).catch(

			(err) => {

				dispatch({ type: 'FETCH_GLOBAL_CATEGORIES_REJECTED', payload: err });

			}

		);

	};

}
