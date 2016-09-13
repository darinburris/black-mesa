const miniCartInitialState = {
	products: [],
	fetching: false,
	fetched: false,
	user: {},
	transient: true,
	errors: null
};

// The Widget Reducer
const miniCart = (state = miniCartInitialState, action) => {

	switch (action.type){

	case 'FETCH_MINICART_PENDING': {
		return { ...state, fetching: true };
		break;
	}
	case 'FETCH_MINICART_REJECTED': {
		return { ...state, fetching: false, error: action.payload };
		break;
	}
	case 'FETCH_MINICART_FULFILLED': {
		return { ...state, fetching: false, fetched: true, products: action.payload };
		break;
	}
	default:
	}

	return state;

};

export default miniCart;
