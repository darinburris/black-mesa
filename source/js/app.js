// import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerSW from './registerSW';

// import store
import store from './store';

// import views
import MegaNav from 'mega-nav-list-container';

// DOM rendering
ReactDOM.render(
	<Provider store={store}><MegaNav /></Provider>,
	document.getElementById('megaNav')
);

registerSW();
