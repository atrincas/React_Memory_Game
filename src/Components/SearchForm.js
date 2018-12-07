import React from 'react';

import SearchWords from './SearchWords';

class SearchForm extends React.Component {

	state = {
		searchText: '',
		words : SearchWords.arr
	};

	onSearchChange = e => {
		this.setState({searchText : e.target.value});
	}

	componentWillMount() {
	}

	componentDidUpate() {
		console.log('didupdate')
	}

	componentWillUpdate() {
		console.log('willupdate')
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
		console.log('form submitted');
	}

	handleTrendingSearchWord = e => {
		console.log(e.target.text);
		var word = e.target.text;
		this.props.onSearch(word);
	}

	render() {
		return (
			<div className="search-form">
				<form onSubmit={this.handleSubmit}>
					<input
						type="search"
						onChange={this.onSearchChange}
						ref={input => (this.query = input)}
						name="search"
						placeholder="Search for a category..."
					/>
					<button type="submit" id="submit" className="search-button">Search</button>
				</form>
				<div id="trending-searches">
					<span>Trending searches:</span>
					<ul>
					{this.state.words.map((word, i) => {
						
						return (<li key={i}><a href="#" onClick={this.handleTrendingSearchWord}>{word}</a></li>);
					})}
					</ul>
				</div>
				</div>
			);
	}
}

export default SearchForm;