import React, { Component } from 'react';
import Representative from './Representative';

class Results extends Component {
	render() {
		return (
			<div className='results'>
				{this.props.reps.map((rep) => (
					<Representative rep={rep} key={rep.name} />
				))}
			</div>
		);
	}
}

export default Results;
