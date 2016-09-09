// import react dependencies
import ReactDOM from 'react-dom';

// import store
import store from './store';

// DOM rendering
ReactDOM.render(
	<Provider store={store}><Layout /></Provider>,
	document.getElementById('app')
);
