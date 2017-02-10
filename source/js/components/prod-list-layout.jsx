// import react dependencies
import React from 'react';

const divStyle = {
	color: 'blue',
	backgroundColor: 'red'
};

export default class Layout extends React.Component{

	render(){

		return (

			<div style={divStyle}>

				<h1>Hello, world! </h1>

				<img src="http://placehold.it/775x250?text=Hero Image" className="hero-image" alt="alt text" />

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

				<form action="" method="post" id="listTools"></form>

				<div id="productList"></div>

			</div>

		);

	}

}
