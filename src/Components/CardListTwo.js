import React from 'react';

import Card from './Card';

//uuid to generate timestamp number to assign to key:
const uuidv1 = require('uuid/v1');

class CardListTwo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			results : this.props.dataTwo,
			clickHandler : this.props.clickHandler,
			className : this.props.className
		}
	}

	render() {
		let cards = this.state.results.map(img =>
			<Card
				id={img.id}
				url={img.urls.small}
				user={img.user.links.html}
				name={img.user.name}
				link={img.links.html}
				key={uuidv1()}
				onClick={this.state.clickHandler}
				className={this.state.className}
			/>
		);

		return cards;
	}

}

export default CardListTwo;