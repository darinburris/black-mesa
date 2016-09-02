import Axios from 'axios';

export function fetchUser(api){

	return function(dispatch){

		let config = {
			method: 'get'	
		};

		Axios.get('http://localhost:3005/users')
			.then(

				(response) => {

					dispatch({type: 'FETCH_USER_FULFILLED',payload: response.data})

				}

			)
			.catch(

				(err) => {

					dispatch({type: 'FETCH_USER_REJECTED',payload: err})

				}

			)

	}

}

export function setUserName(name){

	return {

		type: 'SET_USER_NAME',
		payload: name

	}

}

export function setUserAge(){

	return {

		type: 'SET_USER_AGE',
		payload: age

	}

}