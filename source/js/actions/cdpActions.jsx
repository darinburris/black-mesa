import Axios from 'axios';
import { rest } from 'rest';

export function fetchProducts(){

	return function(dispatch){

		Axios.get('http://localhost:3004/products')
			.then(

				(response) => {

					dispatch({type: 'FETCH_PRODUCTS_FULFILLED',payload: response.data})

				}

			)
			.catch(

				(err) => {

					dispatch({type: 'FETCH_PRODUCTS_REJECTED',payload: err})

				}

			)

	}

}

export function fetchTools(){

	return function(dispatch){

		Axios.get('http://localhost:3007/tools')
			.then(

				(response) => {

					dispatch({type: 'FETCH_TOOLS_FULFILLED',payload: response.data})

				}

			)
			.catch(

				(err) => {

					dispatch({type: 'FETCH_TOOLS_REJECTED',payload: err})

				}

			)

	}

}

export function sortView(payload){

	return function(dispatch){

		dispatch({type: 'CHANGE_SORT_FULFILLED',payload: payload})

	}

}

export function listView(payload){

	return function(dispatch){

		console.log('payload = ' + payload);

		dispatch({type: 'CHANGE_VIEW_FULFILLED',payload: payload})

	}

}

