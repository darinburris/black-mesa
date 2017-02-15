// import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import store
import store from './store';

// import views
import MegaNav from 'mega-nav-list-container';

// DOM rendering
ReactDOM.render(
	<Provider store={store}><MegaNav /></Provider>,
	document.getElementById('megaNav')
);

if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/js/sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}
