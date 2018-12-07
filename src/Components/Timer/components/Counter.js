import {Component} from 'react';

import timeFormat from '../utils/timeFormat';

class Counter extends Component {

	static defaultProps = {
		time : 0
	};

	render() {
		const { time } = this.props;
		return timeFormat(time)
	}
}

export default Counter;