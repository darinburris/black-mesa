export default function reducer(

	state = {
		storecategories: [],
		fetching: false,
		fetched: false,
		error: null
	},
	action

){

	switch(action.type){

	case 'FETCH_GLOBAL_CATEGORIES' : {
		return { ...state, fetching: true };
		break;
	}
	case 'FETCH_GLOBAL_CATEGORIES_REJECTED' : {
		return { ...state, fetching: false, error: action.payload };
		break;
	}
	case 'FETCH_GLOBAL_CATEGORIES_FULFILLED' : {
		return {
			...state,
			fetching: false,
			fetched: true,
			storecategories: action.payload
		};
		break;
	}
	default:
	}

	return state;

}
