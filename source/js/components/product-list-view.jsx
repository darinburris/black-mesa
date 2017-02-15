import React from 'react';

export default class List extends React.Component{

	render(){

		return (

            <li itemScope itemType="http://schema.org/Product">

                <figure>
                    <a href={this.props.href}>
                        <img itemProp="image" src={this.props.src} alt={this.props.alt} />
                        <figcaption>

                            <p itemProp="name" className="product-name">{this.props.name}</p>
                            <data itemProp="price" value={this.props.price}>${this.props.price}</data>
                            <p className="colors">Available in {this.props.colors} colors</p>

                        </figcaption>
                    </a>
                </figure>

            </li>

		);
	}

}
