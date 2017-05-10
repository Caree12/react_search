var React = require('react');
var SearchBar = require('./search-bar.jsx');
var Results = require('./results.jsx');

class Search extends React.Component {
	constructor(props) {
		super(props);   //brings in everything from the main React lib bc subclass
		this.state = {  //sets up the initial structure bc no query on app start
			query: ''
		};
	}

	handleQuery(query) { //sets the state = to our query 
		this.setState({'query': query.toLowerCase().trim()});
	}
	render() {
		return(
			//strucuture that everything is going in
			<div className="serach">
			<SearchBar onQuery={this.handleQuery.bind(this)}/>
			<Results products={this.props.products} query={this.state.query}/>
		</div>
		)
	}
}

module.exports = Search;