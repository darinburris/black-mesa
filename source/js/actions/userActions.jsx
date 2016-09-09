import Axios from 'axios';

export function fetchUser(){

	return function(dispatch){

		Axios.get('http://localhost:3005/users')
			.then(

				(response) => {

					dispatch({ type: 'FETCH_USER_FULFILLED', payload: response.data });

				}

			).catch(

				(err) => {

					dispatch({ type: 'FETCH_USER_REJECTED', payload: err });

				}

			);

	};

}

export function setUserName(name){

	return {

		type: 'SET_USER_NAME',
		payload: name

	};

}

export function setUserAge(age){

	return {

		type: 'SET_USER_AGE',
		payload: age

	};

}
