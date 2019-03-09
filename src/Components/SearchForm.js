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

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
	}

	handleTrendingSearchWord = e => {
		var word = e.currentTarget.firstChild.nodeValue;
		this.props.onSearch(word);
	}

	render() {
		return (
			<div className="start-screen">
				<form onSubmit={this.handleSubmit} className="search-bar-wrapper">
					<input
						type="search"
						onChange={this.onSearchChange}
						ref={input => (this.query = input)}
						name="search"
						className="search-bar-input"
						placeholder="Search for a theme..."
						autoComplete="off"
					/>
					<button type="submit" id="submit" className="search-bar-button">
						<i className="fas fa-search"></i>
					</button>
				</form>
				<div id="trending-searches">
					<span>Trending searches:</span>
					<ul>
					{this.state.words.map((word, i) => {
						
						return (<li key={i}>
									<button
										type="button"
										className="link-button"
										onClick={this.handleTrendingSearchWord}>
										{word}
									</button>
								</li>);
					})}
					</ul>
				</div>
				<div className="about">
					<h4>About</h4>
					<p>This Game is made with React library and the Unsplash API.</p>
					<p>You can use your own theme by searching through the Unsplash database. Have fun!</p>
				</div>
				</div>
			);
	}
}

export default SearchForm;