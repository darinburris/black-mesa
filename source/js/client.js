//import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import store
import store from './store';

//import views
import Layout from 'test-store-layout';




//DOM rendering
ReactDOM.render(
	<Provider store={store}><Layout /></Provider>,
	document.getElementById('app')
);