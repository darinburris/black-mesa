export default function reducer(

	state = {
		tools: {},
		list_count: 20,
		sort_by: null,
		fetching: false,
		fetched: false,
		error: null
	},
	action

){

	switch(action.type){

	case 'FETCH_TOOLS' : {
		return {
			...state,
			fetching: true
		};
		break;
	}
	case 'FETCH_TOOLS_REJECTED' : {
		return {
			...state,
			fetching: false,
			error: action.payload
		};
		break;
	}
	case 'FETCH_TOOLS_FULFILLED' : {
		return {
			...state,
			fetching: false,
			fetched: true,
			tools: action.payload
		};
		break;
	}
	case 'CHANGE_SORT_FULFILLED' : {
		return {
			...state,
			sort_by: action.payload
		};
		break;
	}
	case 'CHANGE_VIEW_FULFILLED' : {
		return {
			...state,
			list_count: action.payload
		};
		break;
	}
	default:
	}

	return state;

}
