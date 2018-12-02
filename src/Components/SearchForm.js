import React from 'react';

class SearchForm extends React.Component {

	state = {
		searchText: ''
	};

	onSearchChange = e => {
		this.setState({searchText : e.target.value});
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
		console.log('form submitted');
	}

	render() {
		return (
			<form className="search-form" onSubmit={this.handleSubmit}>
				<input
					type="search"
					onChange={this.onSearchChange}
					ref={input => (this.query = input)}
					name="search"
					placeholder="Search for a category..."
				/>
				<button type="submit" id="submit" className="search-button">Search</button>
			</form>
			);
	}
}

export default SearchForm;