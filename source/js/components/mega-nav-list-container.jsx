import React from 'react';
import { connect } from 'react-redux';

// import actions
// import { fetchCats } from '../actions/cdpActions';
import { fetchStoreCats } from '../actions/globalActions';
import MageNavListItem from 'mega-nav-list-view';

@connect(
	(store) => {
		return {
			storecategories: store.storecategories,
			fetched: store.fetched
		};
	}
)

export default class Facets extends React.Component{

	componentDidMount(){

		this.props.dispatch(fetchStoreCats());

	}

	render(){

		const cats = this.props.storecategories.storecategories;

		let _cats = [];

		for (let i = 0; i < cats.length; i++) {

			_cats.push(

				<MageNavListItem key={i} categories={cats[i]} />

			);

		}

		return (

			<ul className="primary-nav-items">{_cats}</ul>

		);

	}

}
