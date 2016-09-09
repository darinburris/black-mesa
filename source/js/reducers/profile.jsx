const userInitialState = {
	fetching: false,
	fetched: false,
	users: [],
	user: {},
	transient: true,
	errors: null
};

const profile = (state = userInitialState, action) => {

	switch (action.type){
	case 'FETCH_USER_PENDING': {
		return { ...state, fetching: true };
		break;
	}
	case 'FETCH_USER_REJECTED': {
		return { ...state, fetching: false, error: action.payload };
		break;
	}
	case 'RECEIVE_USER_FULFILLED': {
		return { ...state, fetching: false, fetched: true, users: action.payload };
		break;
	}
	default:
	}

	return state;

};

export default profile;
