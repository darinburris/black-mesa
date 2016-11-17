import React from 'react';
import { connect } from 'react-redux';

// import actions
// import { fetchCats } from '../actions/cdpActions';
import { fetchStoreCats } from '../actions/globalActions';
import MageNavListItem from 'mega-nav-list-view';

var	isOpen,
	parentClasses;

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

	handleClick(event) {
		var el = event.target,
			parent = el.parentElement;

		function removeClass(classToRemove){
			parent.classList.remove(classToRemove);
		}

		parentClasses = parent.className;
		isOpen = parentClasses.indexOf('open');

		if(isOpen === -1){
			parent.className += ' open';
		} else {
			removeClass('open');
		}

		// setTimeout(removeClass('open'), 5000);

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

			<ul className="primary-nav-items">
				<li className="menu-link" onClick={this.handleClick.bind(this)}>Open Menu</li>
				{_cats}
			</ul>

		);

	}

}
