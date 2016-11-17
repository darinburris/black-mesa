import React from 'react';
import { connect } from 'react-redux';

// import actions
import { fetchTools, sortView, listView } from '../actions/cdpActions';

@connect(
	(store) => {
		return {
			tools: store.tools
		};
	}
)

export default class Tools extends React.Component{

	componentWillMount() {
		this.props.dispatch(fetchTools());
	}

	handleSort(e){
		this.props.dispatch(sortView(e.target.value));
	}

	handleView(e){
		this.props.dispatch(listView(e.target.value));
	}

	render(){

		var tools = this.props.tools.tools;

		for (var key in tools) {

			if ({}.hasOwnProperty.call(tools, key)) {

				var filterOptions,
					i,
					viewOptions;

				switch (key) {

				case 'filters' : {

					filterOptions = [];
					for (i = 0; i < tools[key].length; i++) {

						filterOptions.push(
							<option value={tools[key][i]} key={tools[key][i]}>{tools[key][i]}</option>
						);

					}

					break;

				}

				case 'view' : {

					viewOptions = [];
					for (i = 0; i < tools[key].length; i++) {

						viewOptions.push(
							<option value={tools[key][i]} key={tools[key][i]}>{tools[key][i]}</option>
						);

					}

					break;

				}

				default:

				}

			}

		}

		return (

			<fieldset>

				<legend></legend>

				<label htmlFor="sortOrder">Sort by:</label>
				<select id="sortOrder" defaultValue="0" onBlur={this.handleSort.bind(this)}>
					{filterOptions}
				</select>

				<label htmlFor="view">View:</label>
				<select id="view" defaultValue="0" onBlur={this.handleView.bind(this)}>
					{viewOptions}
				</select>

			</fieldset>

		);

	}

}
