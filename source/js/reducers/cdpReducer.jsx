export default function reducer(

	state = {
		products: {},
		count: 20,
		fetching: false,
		fetched: false,
		error: null
	},
	action

){

	switch(action.type){

		case 'FETCH_PRODUCTS' : {
			return {...state, fetching: true}
			break;
		}
		case 'FETCH_PRODUCTS_REJECTED' : {
			return {...state, fetching: false, error: action.payload}
			break;
		}
		case 'FETCH_PRODUCTS_FULFILLED' : {
			return {
				...state,
				fetching: false,
				fetched: true,
				products: action.payload
			}
			break;
		}

	}

	return state

}