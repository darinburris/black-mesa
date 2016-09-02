//import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import store
import store from '../store';

//import views
import Layout from 'prod-list-layout-view';
import Facets from 'facets-view';
import Tools from 'list-tools';
import ProdList from 'prod-list-presentation-view';

//DOM rendering
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

// ReactDOM.render(
// 	<ProductListContainer />,
// 	document.getElementById('list')
// );