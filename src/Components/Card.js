import React from 'react';

const uuidv1 = require('uuid/v1');

const Card = props =>
	<div className="card-container">
		<div className={props.className} onClick={props.onClick} data-card={props.id} data-id={uuidv1()}>
			<div className="front"></div>
			<div className="back">
				<img src={props.url} alt="Memory Card" className="card-image" />
				<div className="flex-container">
					<p>Photo by <a href={props.user} target="_blank" rel="noopener noreferrer">{props.name}</a></p>
					<p><a href={props.link} target="_blank" rel="noopener noreferrer"> See on Unsplash</a></p>
				</div>
			</div>
		</div>
	</div>;

export default Card;