import React from 'react';

import Card from './Card';
import NoCards from './NoCards';

//uuid to generate timestamp number to assign to key:
const uuidv1 = require('uuid/v1');

const CardList = props => {
	const results = props.data;
	let cards;
	if (results.length > 0) {
		cards = results.map((img) =>
			<Card
				id={img.id}
				url={img.urls.small}
				user={img.user.links.html}
				name={img.user.name}
				link={img.links.html}
				key={uuidv1()}
				onClick={props.clickHandler}
				className={props.className}
			/>
			);
	} else {
		cards = <NoCards />;
	}
	return cards;
};

export default CardList;