import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Facet from 'facet';

@connect(
	(store) => {
		return {
			facets: store.cdp
		};
	}
)

export default class Facets extends React.Component{

	componentWillMount(){}

	handleClick(index) {}

	render(){

		return (

			<ul className="facets" id="facetsList">Testy</ul>

		);
	}

};

