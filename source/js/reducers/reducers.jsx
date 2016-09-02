import { combineReducers }  from 'redux';

import tweets from './tweetsReducer';
import user from './userReducer';
import cdp from './cdpReducer';
import tools from './toolsReducer';

// Combine Reducers
export default combineReducers(
	{
		tweets,
		user,
		cdp,
		tools
	}
);
