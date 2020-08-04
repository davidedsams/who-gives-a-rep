import React, { Component } from 'react';
import Header from './Header';
import Results from './Results';
import data from '../reps.json';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reps: data.officials,
		};
	}

	// componentDidMount() {
	// 	const key = process.env.REACT_APP_WHO_GIVES_A_REP_API_KEY;
	// 	const url = `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=1065%20Seaboard%20Avenue%20Atlanta%20Ga%2030307&key=${key}`;
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			console.log(res);
	// 			this.setState({ reps: res.officials });
	// 		})
	// 		.catch(console.error);
	// }

	render() {
		return (
			<div>
				<Header />
				<Results reps={this.state.reps} />
			</div>
		);
	}
}

export default App;
