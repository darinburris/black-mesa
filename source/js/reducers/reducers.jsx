import { combineReducers } from 'redux';

import user from './userReducer';
import products from './cdpReducer';
import tools from './toolsReducer';

// Combine Reducers
export default combineReducers(
	{
		user,
		products,
		tools
	}
);
