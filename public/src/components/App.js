import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components';

import React, { Component } from 'react';

class App extends Component {
	componentDidMount() {
		fetch('./reps.json')
			.then((res) => res.json())
			.then((res) => {
				this.setState({ contacts: res });
			})
			.catch(console.error);
	}

	render() {
		return (
			<div>
				<Header />
				<Route />
				<Route />
			</div>
		);
	}
}

export default App;
