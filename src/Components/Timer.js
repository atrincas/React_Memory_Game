import React from 'react';

class Timer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			seconds : 0
		}
	}

	// componentDidMount() {
	// 	this.myInterval = setInterval(() => {
	// 		this.setState({seconds : this.state.seconds + 1});
	// 	},1000);
	// }

	componentWillUpdate() {
		if(this.state.seconds === 0) {
			this.startTimer();
		}
	}

	startTimer = () => {
		this.myInterval = setInterval(() => {
			this.setState({seconds : this.state.seconds + 1});
		},1000);
	}

	getTime = (sec) => {
		return Math.floor(sec / 60) + ':' + ('0' + sec % 60).slice(-2);
	}

	render() {

		return (
			<div>
				<h1>{this.getTime(this.state.seconds)}</h1>
			</div>
			)
	}
}

export default Timer;