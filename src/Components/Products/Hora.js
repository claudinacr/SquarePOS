import React, { Component } from 'react';
class Hora extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	// set up a timer
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	// clear that timer
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	tick() {
		this.setState({
			date: new Date()
		});
	}
	
	render() {
		return (
			<div>
				<p>{this.state.date.toLocaleTimeString()}</p>
			</div>
		);
	}
}

export default Hora;