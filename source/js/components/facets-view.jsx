import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import PubSub from 'pubsub-js';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

//import store
import store from '../store';

@connect(
	(store) => {
		return {
			facets: store.cdp
		};
	}
)

export default class Facets extends React.Component{

	componentWillMount(){

	}

	handleClick(index) {

		var currFacet = this.state.facets[index].category;

		PubSub.publish('CURRENTFACET', currFacet);

		this.setState({currFacet: currFacet});

	}

	render(){

		return (

			<ul className="facets">
				{
					this.state.facets.map(
						function(item, i) {

							var boundClick = this.handleClick.bind(this, i);

							return (

								<Facet onClick={boundClick} key={i} title={item.category} ref={'item' + i} />

							);

						},this)

				}
			</ul>

		);
	}

};

export class Facet extends React.Component{
	render(){

		return (

			// <li title={this.props.title} onClick={this.handleScroll}><a href="#">{this.props.title}</a></li>
			<li onClick={this.props.onClick}><a href="#">{this.props.title}</a></li>
			////localhost:3004/products?category=Shirts
		);
	}

};

// ReactDOM.render(
// 	<Provider store={store}><Facets /></Provider>,
// 	document.getElementById('facets')
// );