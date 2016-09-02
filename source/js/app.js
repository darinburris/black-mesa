/*import React from 'react';
import { connect } from 'react-redux';
import Modernizr from 'modernizr';*/
//import store from './store';
//import Axios from 'axios';

//import {applyMiddleware, createStore, combineReducers }  from 'redux';
//import {applyMiddleware, createStore }  from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';

//const middleware = applyMiddleware(promise(), thunk, logger());

// const miniCartInitialState = {
// 	products: [],
// 	fetching: false,
// 	fetched: false,
// 	user: {},
// 	transient : true,
// 	errors: null
// }


// const miniCart = (state = miniCartInitialState, action) => {

// 	switch (action.type){

// 		case 'FETCH_MINICART_PENDING': {
// 			return {...state, fetching: true}
// 			break;
// 		}
// 		case 'FETCH_MINICART_REJECTED': {
// 			return {...state, fetching: false, error: action.payload}
// 			break;
// 		}
// 		case 'FETCH_MINICART_FULFILLED': {
// 			return {...state, fetching: false, fetched: true, products: action.payload}
// 			break;
// 		}

// 	}

// 	return state;

// }

// const reducers = combineReducers(
// 	{
// 		profile: profile,
// 		miniCart: miniCart
// 	}
// );

// const userInitialState = {
// 	fetching: false,
// 	fetched: false,
// 	users: [],
// 	user: {},
// 	transient : true,
// 	errors: null
// }

// const profile = (state = userInitialState, action) => {

// 	switch (action.type){

// 		case 'FETCH_USER_PENDING': {
// 			return {...state, fetching: true}
// 			break;
// 		}
// 		case 'FETCH_USER_REJECTED': {
// 			return {...state, fetching: false, error: action.payload}
// 			break;
// 		}
// 		case 'RECEIVE_USER_FULFILLED': {
// 			return {...state, fetching: false, fetched: true, users: action.payload}
// 			break;
// 		}

// 	}

// 	return state;

// }

//const store = createStore();

// store.subscribe(() => {
// 	console.dir('Store changed, ' + JSON.stringify(store.getState()));
// })

// store.dispatch(
// 	{
// 		type: 'FETCH_USER',
// 		payload: Axios.get('http://localhost:3005/users')
// 	},
// );

// store.dispatch(
// 	{
// 		type: 'FETCH_MINICART',
// 		payload: Axios.get('http://localhost:3006/minicart')
// 	},
// );

//export default store;

/*store.dispatch({type: 'CHANGE_AGE',payload: 54});
store.dispatch({type: 'CHANGE_AGE',payload: 55});*/
