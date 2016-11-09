import { combineReducers } from 'redux';

import user from './userReducer';
import products from './cdpReducer';
import tools from './toolsReducer';
import categories from './cdpReducer';
import storecategories from './globalReducer';

// Combine Reducers
export default combineReducers(
	{
		user,
		products,
		tools,
		categories,
		storecategories
	}
);
