var React = require('react');

var PostsTable = require('./components/PostsTable.jsx');
var CompareSection = require('./components/CommpareChartBar.jsx');
var Header = require('./components/Header.jsx');

var ComparePage = React.createClass({
    render: function () {
        return (
            <div>
                <Header username={this.props.username}/>

                <div className="container">
                    <div className="col-md-6">
                        <CompareSection posts={this.props.posts}/>
                    </div>
                    <div className="col-md-6">
                        <PostsTable posts={this.props.posts}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ComparePage;
