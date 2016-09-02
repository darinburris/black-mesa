import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions/userActions';

@connect(
	(store) => {
		return {
			user: store.user,
			userFetched: store.user.fetched,
			tweets: store.tweets.tweets
		};
	}
)

export default class Layout extends React.Component{

	componentWillMount() {
		this.props.dispatch(fetchUser());
	}

	fetchUsers(){
		this.props.dispatch(fetchUser());
	}

	render(){

		const user = this.props.user.user;

		if(user.length === 0){

			return <p>There seems to be a problem</p>

		} else {

			const usersList = user.map(user => <li key={user.id}>First Name: {user.first_name}, Email Address: <a href="#">{user.email}</a></li>);

			return <ul>
					{usersList}
				</ul>

		}

	}

};