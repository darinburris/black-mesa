import Axios from 'axios';

export default function fetchMiniCart(){

	return {
		type: 'FETCH_MINICART',
		payload: Axios.get('http://localhost:3006/minicart')
	};

}
