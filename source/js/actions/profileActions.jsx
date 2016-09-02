import Axios from 'axios';

const function = fetchProfile(api){
	return : 	{
		type: 'FETCH_USER',
		payload: Axios.get('http://localhost:3005/users')
	}
}

export default fetchProfile;