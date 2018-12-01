import React, {Component} from 'react';

import timeFormat from '../utils/timeFormat';

class Counter extends Component {

	static defaultProps = {
		time : 0
	};

	render() {
		const { time } = this.props;

		return (
			<div className="Counter">
				{timeFormat(time)}
			</div>
			);
	}
}

export default Counter;