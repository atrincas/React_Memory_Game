import React from 'react';

const Card = props =>
	<div className="card-container">
		<div className="card">
			<div className="front"></div>
			<div className="back">
				<img src={props.url} alt="Memory Card" className="card-image" />
				<div className="flex-container">
					<p>Photo by <a href={props.user}>{props.name}</a></p>
					<p><a href={props.link}> See on Unsplash</a></p>
				</div>
			</div>
		</div>
	</div>;

export default Card;