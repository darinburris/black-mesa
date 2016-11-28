import React from 'react';
import { connect } from 'react-redux';

// import actions
import { fetchCats } from '../actions/cdpActions';
import FacetsList from 'facets-list-view';

@connect(
	(store) => {
		return {
			categories: store.categories
		};
	}
)

export default class Facets extends React.Component{

	componentDidMount(){

		this.props.dispatch(fetchCats());

	}

	render(){

		const cats = this.props.categories.categories;

		let _cats = [];

		for (var key in cats) {

			if ({}.hasOwnProperty.call(cats, key)) {

				_cats.push(

					<FacetsList key={key} categories={cats[key]} />

				);

			}

		}

		return (

			<ul className="facets" role="group">{_cats}</ul>

		);

	}

}
