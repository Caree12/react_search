var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./components/search.jsx');
var products = require('./products.js');  //requiring a file instead of dependency

ReactDOM.render(<Search products={products}/>, document.getElementById('app'));

