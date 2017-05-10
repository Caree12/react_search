var React = require('react');

class SearchBar extends React.Component {
	handleQuery(e) {
		this.props.onQuery(e.target.value);
	}

	render() {
		return(
			<div className="serach-bar">
				<input onChange={this.handleQuery.bind(this)} placeholder="Search" />
			</div>
		)
	}
}

module.exports = SearchBar;