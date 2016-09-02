import Axios from 'axios';

const fetchMiniCart = (api) => {

	return {
		type: 'FETCH_MINICART',
		payload: Axios.get('http://localhost:3006/minicart')
	}
}

export default fetchMiniCart;