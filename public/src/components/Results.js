import React, { Component } from 'react';
import Representative from '../Representative';

class Results extends Component {
	render() {
		return (
			<div className='results'>
				Results
				{this.props.reps.map((rep) => (
					<Representative rep={rep} />
				))}
			</div>
		);
	}
}

export default Results;
