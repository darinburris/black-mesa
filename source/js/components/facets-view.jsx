import React from 'react';
import { connect } from 'react-redux';

// import Facet from 'facet';

@connect(
	(store) => {
		return {
			facets: store.cdp
		};
	}
)

export default class Facets extends React.Component{

	componentWillMount(){}

	handleClick() {}

	render(){

		return (

			<ul className="facets" id="facetsList">Testy</ul>

		);

	}

}
