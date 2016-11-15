import React from 'react';

export default class FacetsList extends React.Component{
	render(){

		return (

			<li><label htmlFor={this.props.key}><input id={this.props.key} type="checkbox" role="checkbox" aria-checked="false" /><a href="http://www.google.com">{this.props.categories}</a></label></li>

		);
	}

}
