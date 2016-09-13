import React from 'react';
import { connect } from 'react-redux';

// import actions
import { fetchProducts } from '../actions/cdpActions';

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

						<li itemScope itemType="http://schema.org/Product" key={_products[key].id}>

							<figure>
								<a href={_products[key].url}>
									<img itemProp="image" src={_products[key].src} alt={altText} />
									<figcaption>

										<p itemProp="name" className="product-name">{_products[key].name}</p>
										<data itemProp="price" value={_products[key].price}>${_products[key].price}</data>
										<p className="colors">Available in {_products[key].colors} colors</p>

									</figcaption>
								</a>
							</figure>

						</li>

					);

				}

			}

		}

		return (

			<ul className="product-list">{prods}</ul>

		);
	}

}
