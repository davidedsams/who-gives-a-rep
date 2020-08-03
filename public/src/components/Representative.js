import React, { Component } from 'react';

class Representative extends Component {
	render() {
		return (
			<div className='rep'>
				<img src={this.props.rep.photoUrl} alt={this.props.name} />
				<h3>{this.props.rep.name}</h3>
				<h4>{this.props.rep.email}</h4>
			</div>
		);
	}
}

export default Representative;
