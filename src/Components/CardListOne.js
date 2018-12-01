import React from 'react';

import Card from './Card';

//uuid to generate timestamp number to assign to key:
const uuidv1 = require('uuid/v1');

class CardListOne extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			results : this.props.dataOne,
			clickHandler : this.props.clickHandler,
			className : this.props.className,
			update : this.props.update
		}
	}

	static defaultProps = {
    	startGame : false
  	};

	shouldComponentUpdate(nextProps, nextState) {
	  //Makes sure the component CardList only re-renders when cards has to be resetted:
	  // if(!this.state.update) {
	  //   return true;
	  // } else {
	  //   return false;
	  // }

	  // if(this.props.dataOne !== nextProps.dataOne) {
	  // 	return true;
	  // } else {
	  // 	return false;
	  // }
	  return this.props.startGame !== nextProps.startGame;
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.dataOne !== nextProps.dataOne) {
			console.log('props has changed');
		}
	}

	componentWillUpdate() {
		console.log('CardListOne:',this.state.results);
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

export default CardListOne;