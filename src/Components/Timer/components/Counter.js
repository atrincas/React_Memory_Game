import React, {Proptypes, Component} from 'react';
import PropTypes from 'prop-types';

import timeFormat from '../utils/timeFormat';

class Counter extends Component {

	// static propTypes = {
	// 	time : React.Proptypes.number.isRequired
	// };

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