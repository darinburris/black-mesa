// import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import store
import store from '../store';

// import views
import Layout from 'prod-list-layout';
import Facets from 'facets-list-container';
import Tools from 'list-tools-container';
import ProdList from 'prod-list-container';

// DOM rendering
ReactDOM.render(
	<Provider store={store}><Layout /></Provider>,
	document.getElementById('cdp')
);

ReactDOM.render(
	<Provider store={store}><ProdList /></Provider>,
	document.getElementById('productList')
);

ReactDOM.render(
	<Provider store={store}><Tools /></Provider>,
	document.getElementById('listTools')
);

ReactDOM.render(
	<Provider store={store}><Facets /></Provider>,
	document.getElementById('facets')
);
