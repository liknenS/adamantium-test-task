var React = require('react');

var page;
var parsedPath = /username=(\w+)/.exec(location.href);
if (parsedPath) {
    var posts = require('./mocks/posts').posts;
    var ComparePage = require('./src/ComparePage.jsx');
    page = <ComparePage posts={posts} username={parsedPath[1]}/>
} else {
    var AuthPage = require('./src/AuthPage.jsx');
    page = (<AuthPage/>);
}

React.render(page, document.body);