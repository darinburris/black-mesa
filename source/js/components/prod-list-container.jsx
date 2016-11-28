import React from 'react';
import { connect } from 'react-redux';

// import actions
import { fetchProducts } from '../actions/cdpActions';

import List from 'product-list-view';

@connect(
	(store) => {
		return {
			products: store.products,
			list_count: store.tools.list_count
		};
	}
)

// Presentational Component
export default class ProdList extends React.Component{

	componentWillMount() {
		this.props.dispatch(fetchProducts());
	}

	render() {

		const products = this.props.products.products;
		var prods;

		if(products.length === 0){
			prods = 'error';
		} else {

			var _products = Array.from(products);
			_products = _products.slice(0, this.props.list_count);

			prods = [];
			for (var key in _products) {

				if ({}.hasOwnProperty.call(_products, key)) {

					var altText = 'This is a placeholder for image ' + _products[key].name;

					prods.push(

						<List
							key={_products[key].id}
							href={_products[key].url}
							src={_products[key].src}
							alt={altText}
							name={_products[key].name}
							price={_products[key].price}
							colors={_products[key].colors} />

					);

				}

			}

		}

		return (

			<ul className="product-list">{prods}</ul>

		);
	}

}
