import Axios from 'axios';

export default function fetchProfile(){
	return	{
		type: 'FETCH_USER',
		payload: Axios.get('http://localhost:3005/users')
	};
}
