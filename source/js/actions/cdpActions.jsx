import Axios from 'axios';

export function fetchProducts(){

	return function(dispatch){

		Axios.get('http://localhost:3009/store')
		.then(

			(response) => {

				dispatch({ type: 'FETCH_PRODUCTS_FULFILLED', payload: response.data.products });

			}

		).catch(

			(err) => {

				dispatch({ type: 'FETCH_PRODUCTS_REJECTED', payload: err });

			}

		);

	};

}

export function fetchTools(){

	return function(dispatch){

		Axios.get('http://localhost:3009/store')
			.then(

				(response) => {

					dispatch({ type: 'FETCH_TOOLS_FULFILLED', payload: response.data.tools });

				}

			).catch(

				(err) => {

					dispatch({ type: 'FETCH_TOOLS_REJECTED', payload: err });

				}

			);

	};

}

export function sortView(payload){

	return function(dispatch){

		dispatch({ type: 'CHANGE_SORT_FULFILLED', payload: payload });

	};

}

export function listView(payload){

	return function(dispatch){

		dispatch({ type: 'CHANGE_VIEW_FULFILLED', payload: payload });

	};

}
