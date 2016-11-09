import React from 'react';
import { connect } from 'react-redux';

// import actions
import { fetchCats } from '../actions/cdpActions';

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

					<li key={key}><a href="#">{cats[key]}</a></li>

				);

			}

		}

		return (

			<ul className="facets">{_cats}</ul>

		);

	}

}
