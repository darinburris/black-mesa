import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

//import actions
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

			switch (key) {

				case 'filters' : 

					var filterOptions = [];
					for (var i = 0; i < tools[key].length; i++) {

						filterOptions.push(
							<option value={tools[key][i]} key={tools[key][i]}>{tools[key][i]}</option>
						)

					}

					break;

				case 'view' : 

					var viewOptions = [];
					for (var i = 0; i < tools[key].length; i++) {

						viewOptions.push(
							<option value={tools[key][i]} key={tools[key][i]}>{tools[key][i]}</option>
						)

					}

					break;

			}

		}

		return (

			<fieldset>

				<legend></legend>

				<label htmlFor="sortOrder">Sort by:</label>
				<select id="sortOrder" defaultValue="0" onChange={this.handleSort.bind(this)}>
					{filterOptions}
				</select>

				<label htmlFor="view">View:</label>
				<select id="view" defaultValue="0" onChange={this.handleView.bind(this)}>
					{viewOptions}
				</select>

			</fieldset>

		);

	}

};

// ReactDOM.render(
// 	<Tools />,
// 	document.getElementById('listTools')
// );