var React = require('react');
var PostsTable = require('./components/PostsTable.jsx');
var CompareSection = require('./components/CommpareChartBar.jsx')
var ComparePage = React.createClass({
	render: function () {
		return (
			<div className="container">
				<div className="col-md-6">
					<CompareSection posts={this.props.posts}/>
				</div>
				<div className="col-md-6">
					<PostsTable posts={this.props.posts}/>
				</div>
			</div>
		);
	}
});

module.exports = ComparePage;
