import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import { fetchProducts } from '../actions/cdpActions';

@connect(
	(store) => {
		return {
			products: store.cdp,
			productsFetched: null
		};
	}
)

export default class Item extends React.Component{

	render(){

		return (

			<li itemScope itemType="http://schema.org/Product">

				<figure>
					<a href={this.props.url}><img itemProp="image" src={this.props.src} alt="placeholder product image" /></a>
					<figcaption>
		 
						<a itemProp="name" href={this.props.url} title={this.props.name}>{this.props.name}</a>
						<data itemProp="price" value={this.props.price}>${this.props.price}</data>
						<p className="colors">Available in {this.props.colors} colors</p>

					</figcaption>
				</figure>	

			</li>

		);
	}
};

ReactDOM.render(
	<Item />,
	document.getElementById('productList')
);
