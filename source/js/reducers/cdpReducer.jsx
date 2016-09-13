export default function reducer(

	state = {
		products: {},
		categories: {},
		fetching: false,
		fetched: false,
		error: null
	},
	action

){

	switch(action.type){

	case 'FETCH_PRODUCTS' : {
		return { ...state, fetching: true };
		break;
	}
	case 'FETCH_PRODUCTS_REJECTED' : {
		return { ...state, fetching: false, error: action.payload };
		break;
	}
	case 'FETCH_PRODUCTS_FULFILLED' : {
		return {
			...state,
			fetching: false,
			fetched: true,
			products: action.payload
		};
		break;
	}
	case 'FETCH_CATEGORIES' : {
		return { ...state, fetching: true };
		break;
	}
	case 'FETCH_CATEGORIES_REJECTED' : {
		return { ...state, fetching: false, error: action.payload };
		break;
	}
	case 'FETCH_CATEGORIES_FULFILLED' : {
		return {
			...state,
			fetching: false,
			fetched: true,
			categories: action.payload
		};
		break;
	}
	default:
	}

	return state;

}
